import styled from "styled-components";
import { ContentInput, Input, Span } from "../UI";

const Inputs = ({ titulo, tipo, ActualizarValor, valor }) => {
    // Función para manejar cambios en el valor del input
    const manejarCambio = (e) => {
        ActualizarValor(e.target.value);
    };

    return (
        <ContentInput>
            <Input
                id={titulo}
                value={valor}
                type={tipo}
                required
                onChange={manejarCambio}
            />
            <Span>{titulo}</Span>
        </ContentInput>
    );
};

export default Inputs;