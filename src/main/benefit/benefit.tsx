import styled from "styled-components"
import Banner from "./banner"
import BenefitMenu from "./benefitMenu"

const Benefit = () => {
  return(
    <>
      <Background>
        <p>혜택</p>
        <Banner />
      </Background>
      <BenefitMenu />
    </>
  )
}

export default Benefit

const Background = styled.article`
  position:relative;
  padding: 20px 20% 0;
  background-color:#fff;
  width:100%;
  height:520px;

  p{
    font-size:32px;
    color:rgb(119, 69, 179);
  }
`
