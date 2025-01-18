import styled from "styled-components";
import Logo from "../../assets/img/LogoMain.png";
import { Btn, LogoImg } from "../UI";

import { Link } from "react-router-dom";

const Head = styled.header`
  position: relative;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  border-bottom: 3px solid rgba(42, 122, 228, 1);
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const BtnHeader = styled(Btn)`
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
    transform: scale(1.05);
  }

  &:active {
    background-color: rgba(42, 122, 228, 1);
    color: #fff;
    transform: scale(1);
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px 15px;
  }
`;

const Header = () => {
  return (
    <Head>
      <div>
        <Link to={"/"}>
          <LogoImg src={Logo} alt="Logo" />
        </Link>
      </div>
      <nav>
        <Link to="/NuevoVideo">
          <BtnHeader>Nuevo Video</BtnHeader>
        </Link>
      </nav>
    </Head>
  );
};

export default Header;