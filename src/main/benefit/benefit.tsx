import styled from "styled-components"
import Banner from "./banner"
import BenefitMenu from "./benefitMenu"

const Benefit = () => {
  return(
    <>
      <WhiteBackground>
        <p>혜택</p>
        <Banner />
      </WhiteBackground>
      <BenefitMenu />
    </>
  )
}

export default Benefit

const WhiteBackground = styled.article`
  position:relative;
  padding: 20px 20% 0;
  height:520px;

  p{
    font-size:32px;
    color:rgb(119, 69, 179);
  }
`
