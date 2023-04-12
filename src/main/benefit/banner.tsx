import styled from "styled-components"

const Banner = () => {
  return(
    <BannerDiv>
      <BannerItem />
      <BannerItem />
      <BannerItem />
      <BannerItem />
    </BannerDiv>
  )
}

export default Banner 


const BannerDiv = styled.div`
  position:absolute;
  top:120px;
  left:0;
  right:0;
  display:grid;
  grid-gap:10px;
  grid-template-columns:repeat(7,1fr);
  width:60%;
  height:500px;
  margin: 0 auto;
  z-index:10;
`

const BannerItem = styled.div`
  :nth-child(1){
    background-color:rgb(251, 255, 230);
    grid-column-start:1;
    grid-column-end:5;
  }
  :nth-child(2){
    background-color:rgb(254, 84, 84);
    grid-column-start:5;
    grid-column-end:8;
    grid-row-start:1;
    grid-row-end:3;
    
  }
  :nth-child(3){
    background-color:rgb(196, 238, 255);
    grid-column-start:1;
    grid-column-end:3;
    grid-row-start:2;
    grid-row-end:3;
  }
  :nth-child(4){
    background-color:rgb(254, 171, 255);
    grid-column-start:3;
    grid-column-end:5;
    grid-row-start:2;
    grid-row-end:3;
  }
`