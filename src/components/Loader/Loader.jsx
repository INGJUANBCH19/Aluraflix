import styled from "styled-components";

const Content = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);  // Darker background for elegance
    color: #fff;
    font-family: 'Helvetica Neue', sans-serif;
`;

const FaviconWrapper = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: spin 2s ease-in-out infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid rgba(42, 122, 228, 0.7);  // Soft glow effect
        border-radius: 50%;
        animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.2);
            opacity: 0.7;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const Message = styled.p`
    margin-top: 30px;
    font-size: 20px;
    color: rgba(42, 122, 228, 1);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    animation: fadeInOut 2s ease-in-out infinite;

    @keyframes fadeInOut {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }
`;

const Loader = () => {
    return (
        <Content>
            <FaviconWrapper>
            <img src="/favicon.png" alt="Loader Icon" />

            </FaviconWrapper>
            <Message>Loading...</Message>
        </Content>
    );
};

export default Loader;
