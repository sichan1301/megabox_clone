import styled from "styled-components"
import Notice from "./notice"
import PageList from "./pageList"
import QnAList from "./QnAList"


const Guide = () => {
  return(
    <section>
      <Title>메가박스 안내</Title>
      <PageList />
      <Notice />
      <QnAList />
    </section>
  )
}

export default Guide

const Title = styled.p`
  width:60%;
  margin:40px auto;
  color:rgb(69, 48, 88);
  font-size:32px;
  font-weight:600;
  
`