import styled from "styled-components"

const CurationSample = () => {
  return(
    <CurationSampleDiv>
      <img src = {require('../../imgs/cost.jpg')} />
    </CurationSampleDiv>
  )
}


export default CurationSample

const CurationSampleDiv = styled.div`
  width:700px;
  height:500px;

  img{
    border-radius:10px;
    width:100%;
    height:100%;
  }
`
