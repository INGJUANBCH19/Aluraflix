import { Btn, BtnLimpia, ContentBtns, Title, Section, Form } from "../UI";
import Inputs from "../Campos/Inputs";
import TextTarea from "../Campos/Textarea";
import ContentTable from "../Table/Table";
import { v4 as uuidv4 } from "uuid";
import { Api } from "../../api/ClienteService.js";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import styled from "styled-components";

const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  label {
    font-size: 16px;
    color: #fff;
  }

  input[type="color"] {
    width: 50px;
    height: 50px;
    border: none;
    cursor: pointer;
    background: none;
  }
`;

const FormStyled = styled(Form)`
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const FormNuevaCategoria = () => {
  // guardar los valores de los inputs y textos
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [colorPrimario, setColor] = useState("#000000"); // inicializamos el color negro por default
  const [codigoS, setCodigoS] = useState("");

  const [categorias, setCategorias] = useState([]);

  const [loading, setLoading] = useState(false);

  // carga la consulta de todas las categorias para luego ser mostrado en la tabla
  useEffect(() => {
    const ConsultaApi = async () => {
      const res = await Api.get("categorias");
      if (res.status === 200) {
        setCategorias(res.data);
        setTimeout(() => {
          setLoading(true);
        }, 2500);
      }
    };
    ConsultaApi();
  }, []);

  /* capturamos los datos y lo enviamos para nuevo dato, se vuelve hacer la consulta para
  actualizar las categorias*/
  const EnviarDatos = async (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      titulo,
      colorPrimario,
      descripcion,
      codigoS,
    };
    const post = await Api.post("categorias", data);
    if (post.status === 201) {
      const res = await Api.get("categorias");
      setCategorias(res.data);
    }
  };

  // eliminamos una categoria
  const EliminarCategoria = async (id) => {
    await Api.delete(`categorias/${id}`);
    const { data } = await Api.get("categorias");
    setCategorias(data);
  };

  // Limpia todos los inputs
  const resetText = () => {
    setTitulo("");
    setDescripcion("");
    setColor("#000000");
    setCodigoS("");
  };

  return (
    <Section>
      <Title>Nueva Categoría</Title>
      <FormStyled onSubmit={EnviarDatos}>
        <Inputs
          tipo="text"
          titulo="Título"
          valor={titulo}
          ActualizarValor={setTitulo}
        />
        <TextTarea
          titulo="Descripción"
          ActualizarDescrip={setDescripcion}
          valor={descripcion}
        />
        <ColorPickerContainer>
          <label htmlFor="color">Color Primario</label>
          <input
            type="color"
            id="color"
            value={colorPrimario}
            onChange={(e) => setColor(e.target.value)}
          />
        </ColorPickerContainer>
        <Inputs
          tipo="text"
          titulo="Código de seguridad"
          ActualizarValor={setCodigoS}
          valor={codigoS}
        />

        <ContentBtns>
          <div>
            <Btn>Guardar</Btn>
            <BtnLimpia type="reset" value="Limpiar" onClick={resetText} />
          </div>
        </ContentBtns>
      </FormStyled>
      {loading ? (
        <ContentTable Datos={categorias} EliminaDato={EliminarCategoria} tipo={true} />
      ) : (
        <Loader />
      )}
    </Section>
  );
};

export default FormNuevaCategoria;