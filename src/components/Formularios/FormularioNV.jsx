import {
    Btn,
    BtnLimpia,
    ContentBtns,
    Title,
    Section,
    Form,
  } from "../UI";
  import Inputs from "../Campos/Inputs";
  import TextTarea from "../Campos/Textarea";
  import { Link } from "react-router-dom";
  import ListaOpciones from "../ListaOpciones/ListaOpciones";
  import { useState, useEffect } from "react";
  import { Api } from "../../api/ClienteService.js";
  import { v4 as uuidv4 } from "uuid";
  import styled from "styled-components";
  import ContentTable from "../Table/Table";
  import Loader from "../Loader/Loader";
  
  const DivAcciones = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
    }
  `;
  
  const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  `;
  
  const StyledContentBtns = styled(ContentBtns)`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
    }
  `;
  
  const StyledLink = styled(Link)`
    text-decoration: none;
  `;
  
  const FormNuevoVideo = (props) => {
    const [titulo, setTitulo] = useState("");
    const [urlVideo, setUrlVideo] = useState("");
    const [urlImg, setUrlImg] = useState("https://i.ytimg.com/vi//maxresdefault.jpg");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [codigoS, setCodigoS] = useState("");
  
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchVideos = async () => {
        const res = await Api.get("videos");
        if (res.status === 200) {
          setVideos(res.data);
          setTimeout(() => {
            setLoading(true);
          }, 2500);
        }
      };
      fetchVideos();
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const datos = {
        id: uuidv4(),
        titulo,
        urlVideo,
        urlImg,
        categoria,
        descripcion,
        codigoS,
      };
      const post = await Api.post("videos", datos);
      if (post.status === 201) {
        setLoading(false);
        const res = await Api.get("videos");
        setVideos(res.data);
        setTimeout(() => {
          setLoading(true);
        }, 2500);
      }
    };
  
    const handleDelete = async (id) => {
      await Api.delete(`videos/${id}`);
      const { data } = await Api.get("videos");
      setVideos(data);
    };
  
    const resetForm = () => {
      setTitulo("");
      setDescripcion("");
      setUrlVideo("");
      setCodigoS("");
    };
  
    const updateImageUrl = (urlV) => {
      const imgId = urlV.slice(-11);
      setUrlVideo(urlV);
      setUrlImg(`https://i.ytimg.com/vi/${imgId}/maxresdefault.jpg`);
    };
  
    return (
      <Section>
        <Title>Nuevo Video</Title>
        <StyledForm onSubmit={handleSubmit}>
          <Inputs
            tipo="text"
            titulo="Título"
            valor={titulo}
            ActualizarValor={setTitulo}
          />
          <Inputs
            tipo="text"
            titulo="Link del video"
            valor={urlVideo}
            ActualizarValor={updateImageUrl}
          />
          <Inputs
            tipo="text"
            titulo="Link de la imagen del video"
            valor={urlImg}
            disabled
          />
          <ListaOpciones
            categorias={props.categorias}
            valor={categoria}
            ActualizarCategoria={setCategoria}
          />
          <TextTarea
            titulo="Descripción"
            ActualizarDescrip={setDescripcion}
          />
          <Inputs
            tipo="text"
            titulo="Código de seguridad"
            valor={codigoS}
            ActualizarValor={setCodigoS}
          />
          <StyledContentBtns>
            <DivAcciones>
              <Btn>Guardar</Btn>
              <BtnLimpia type="reset" value="Limpiar" onClick={resetForm} />
            </DivAcciones>
            <StyledLink to="/NuevaCategoria">
              <Btn>Nueva Categoría</Btn>
            </StyledLink>
          </StyledContentBtns>
        </StyledForm>
        {loading ? (
          <ContentTable Datos={videos} EliminaDato={handleDelete} />
        ) : (
          <Loader />
        )}
      </Section>
    );
  };
  
  export default FormNuevoVideo;