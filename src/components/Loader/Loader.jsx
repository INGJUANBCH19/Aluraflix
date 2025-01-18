import styled from "styled-components";

const Content = styled.div`
    min-height: 100vh;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: rgba(0, 0, 0, 0.95);
    color: #fff;
    @media screen and (max-width: 1024px) {
        min-height: 70vh;
    }
`;

const LoadingSpinner = styled.div`
    width: 80px;
    height: 80px;
    border: 6px solid rgba(255, 255, 255, 0.2);
    border-top: 6px solid #7cd6ec;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const Message = styled.p`
    margin-top: 20px;
    font-size: 18px;
    color: #7cd6ec;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    animation: fadeInOut 1.5s ease-in-out infinite;

    @keyframes fadeInOut {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
`;

const Loader = () => {
    return (
        <Content>
            <LoadingSpinner></LoadingSpinner>
            <Message>Cargando...</Message>
        </Content>
    );
};

export default Loader;
