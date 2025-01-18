import styled from "styled-components";
import banner from "../../assets/img/banner.png";

const BannerWrapper = styled.div`
    position: absolute;
    overflow: hidden;
    top: -120px;
    left: 0;
    width: 100%;
    height: 880px;
    background-image: linear-gradient(to top, #181818 -4%, rgba(42, 122, 228, 0.2) 100%), url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;

    @media screen and (max-width: 1024px) {
        height: 600px;
    }

    @media screen and (max-width: 768px) {
        height: 400px;
    }
`;

const Banner = () => {
    return <BannerWrapper />;
};

export default Banner;
