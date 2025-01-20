import styled from "styled-components";

const Content = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.95);
    color: #fff;
`;

const FaviconWrapper = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;

const Message = styled.p`
    margin-top: 20px;
    font-size: 18px;
    color: rgba(42, 122, 228, 1);
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
            <FaviconWrapper>
                <img src="./public/favicon.png" alt="Loader Icon" />
            </FaviconWrapper>
            <Message>Cargando...</Message>
        </Content>
    );
};

export default Loader;


