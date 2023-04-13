import styled from "styled-components"

const CurationSample = () => {
  return(
    <CurationSampleDiv>
      <img src = {require('../../imgs/cost.jpg')} />
      <div>
        <Button1>상세 정보</Button1>
        <Button2>예매</Button2>
      </div>
    </CurationSampleDiv>
  )
}


export default CurationSample

const CurationSampleDiv = styled.div`
  width:700px;
  height:400px;
  margin-right:20px;
  img{
    border-radius:10px;
    width:100%;
    height:100%;
    margin-bottom: 10px;
  } 
`

const Button1 = styled.button`
  width:49%;
  height:50px;
  border-radius: 10px;
  color:#fff;
  font-size:18px;
  background-color: transparent;
  margin-right:5px;
  border:1px solid #fff;
`

const Button2 = styled(Button1)`
  border:none;
  background-color: rgb(75, 183, 233);
  margin:0;
`
