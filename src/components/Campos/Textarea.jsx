import styled from "styled-components";
import { ContentInput, Span, Textarea } from "../UI";

const TextTarea = ({ titulo, valor, ActualizarDescrip }) => {
    // Maneja el cambio del contenido del textarea
    const manejarCambio = (e) => {
        ActualizarDescrip(e.target.value);
    };

    return (
        <ContentInput>
            <Textarea
                rows="5"
                cols="30"
                value={valor}
                required
                onChange={manejarCambio}
            />
            <Span>{titulo}</Span>
        </ContentInput>
    );
};

export default TextTarea;
