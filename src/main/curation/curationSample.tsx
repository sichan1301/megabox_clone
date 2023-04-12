import styled from "styled-components"

const CurationSample = () => {
  return(
    <CurationSampleDiv>
      <img src = {require('../../imgs/cost.jpg')} />
      <ButtonDiv>
        <button>상세 정보</button>
        <button>예매</button>
      </ButtonDiv>
    </CurationSampleDiv>
  )
}


export default CurationSample

const CurationSampleDiv = styled.div`
  width:700px;
  height:500px;
  margin-right:20px;
  img{
    border-radius:10px;
    width:100%;
    height:100%;
    margin-bottom: 10px;
  } 
`

const ButtonDiv = styled.div`
  button{
    width:49%;
    height:50px;
    border-radius: 10px;
    :nth-child(1){
      background-color: transparent;
      margin-right:5px;
      color:#fff;
      border:1px solid #fff;
    }
    :nth-child(2){
      border:none;
      background-color: rgb(75, 183, 233);
    }
  }
  `
