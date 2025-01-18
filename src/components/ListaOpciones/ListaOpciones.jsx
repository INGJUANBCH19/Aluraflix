import { ContentInput } from "../UI";
import styled from "styled-components";

// Definición de colores como variables CSS para mantener la consistencia
const COLORS = {
  background: 'rgba(83, 88, 93, 1)',
  text: '#fff',
  optionBackground: '#000000',
  optionText: '#fff'
};

// Estilos del select
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 28px 10px;
  outline: none;
  border: none;
  background: ${COLORS.background};
  color: ${COLORS.text};
  
  option {
    background-color: ${COLORS.optionBackground};
    color: ${COLORS.optionText};  // Asegura que el texto sea legible
  }
`;

const ListaOpciones = ({ categorias, ActualizarCategoria, valor }) => {
  const handleChange = (e) => {
    ActualizarCategoria(e.target.value);
  };

  return (
    <ContentInput>
      <Select onChange={handleChange} value={valor || ""}>
        <option value="" hidden>{valor ? valor : "Escoja una categoria"}</option>
        {
          categorias.map((titulo) => 
            titulo !== valor && (
              <option key={titulo} value={titulo}>
                {titulo}
              </option>
            )
          )
        }
      </Select>
    </ContentInput>
  );
};

export default ListaOpciones;