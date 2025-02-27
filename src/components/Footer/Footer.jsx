import Logo from "../../assets/img/LogoMain.png";
import styled from "styled-components";
import { P } from "../UI";

const Footer = styled.footer`
    width: 100%;
    color: white;
    background-color: rgba(0,0,0,1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0 30px 0;
    border-top: 3px solid rgba(42, 122, 228, 1);
`;
const Div = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
`;
const A = styled.a`
    text-decoration: none;
    color: white;
    font-size: 30px;
    padding: 5px;
    i {
        transition: all 0.4s ease-in-out;
    }
    i:hover {
        transform: scale(1.2);
        transition: all 0.4s ease-in-out;
    }
`;
const Stronge = styled.span`
    font-weight: 800;
    color: rgba(42, 122, 228, 1);
`;

export default () => {
    return (
        <Footer>
            <img src={Logo} alt="Logo" />
            <Div>
                <P>
                    &copy; 2025 |<Stronge>AluraLatam</Stronge>
                </P>
                <A
                    href="https://github.com/INGJUANBCH19"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-github"></i>
                </A>
                <A
                    href="https://www.linkedin.com/in/juan-betin-5092172b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </A>
                <A
                    href="https://www.instagram.com/jbetinchamat/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-instagram"></i>
                </A>
            </Div>
        </Footer>
    );
};