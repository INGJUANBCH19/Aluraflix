import styled from "styled-components";
import TituloCarusel from "./TituloCarousel";
import ContentCarousel from "./ContentCarousel";

const Wrapper = styled.div`
    margin-top: 30px;
`;

const Carosuel = ({ equipos, categoria, ActualizarInicio, ActualizarVideoInicio }) => {
    const { colorPrimario, titulo } = categoria;

    return (
        <>
            {equipos.length > 0 && (
                <Wrapper>
                    <TituloCarusel
                        titulo={titulo}
                        colorPrimario={colorPrimario}
                        ActualizarInicio={ActualizarInicio}
                    />
                    <ContentCarousel
                        equipos={equipos}
                        ActualizarInicio={ActualizarInicio}
                        ActualizarVideoInicio={ActualizarVideoInicio}
                    />
                </Wrapper>
            )}
        </>
    );
};

export default Carosuel;