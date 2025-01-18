import styled from "styled-components";
import { Td, Th } from "../UI";
import { Link } from "react-router-dom";

const Table = styled.table`
    border: 2px solid #fff;
    width: 100%;
    color: #fff;
    margin: 30px auto;
    border-spacing: 0;
    @media screen and (min-width: 1100px) {
        max-width: 95%;
        border: 4px solid #fff;
    }
`;

const ThNombre = styled(Th)`
    width: 25%;
    text-align: left;
    padding: 10px;
    background-color: #222;
`;

const TdAcciones = styled(Td)`
    text-align: center;
    cursor: pointer;
    padding: 10px;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: ${({ blue }) => blue ? "#2A7AE4" : "#E53935"};
    border-radius: 4px;
    padding: 6px 12px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.3s;
    &:hover {
        background-color: ${({ blue }) => blue ? "#1B5CB7" : "#B71C1C"};
    }
`;

const H2 = styled.h2`
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    color: #fff;
`;

const H3 = styled.h3`
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    color: #bbb;
`;

const Tr = styled.tr`
    &:nth-child(odd) {
        background-color: #111;
    }
    &:hover {
        background-color: #333;
    }
`;

const TdStyled = styled.td`
    padding: 10px;
    color: #fff;
    text-align: left;
    vertical-align: middle;
`;

const ContentTable = ({ Datos, EliminaDato, tipo }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <ThNombre>
                        <H2>Nombre</H2>
                    </ThNombre>
                    <Th>
                        <H2>Descripción</H2>
                    </Th>
                    <Th>
                        <H2>Editar</H2>
                    </Th>
                    <Th>
                        <H2>Eliminar</H2>
                    </Th>
                </tr>
            </thead>
            <tbody>
                {Datos.map((element, i) => (
                    <Tr key={i}>
                        <TdStyled>
                            <H3>{element.titulo}</H3>
                        </TdStyled>
                        <TdStyled>
                            <H3>{`${element.descripcion.slice(0, 90)}${element.urlVideo ? "..." : ""}`}</H3>
                        </TdStyled>
                        <TdAcciones>
                            <Link to={tipo ? `/ActualizarCategoria/${element.id}` : `/ActualizarVideo/${element.id}`}>
                                <Div blue>
                                    <H3>Editar</H3>
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </Div>
                            </Link>
                        </TdAcciones>
                        <TdAcciones>
                            <Div onClick={() => EliminaDato(element.id)}>
                                <H3>Eliminar</H3>
                                <i className="fa-solid fa-trash"></i>
                            </Div>
                        </TdAcciones>
                    </Tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ContentTable;