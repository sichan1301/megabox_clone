import styled from "styled-components"
import Notice from "./notice"
import PageList from "./pageList"
import QnAList from "./QnAList"


const Guide = () => {
  return(
    <Section>
      <p>메가박스 안내</p>
      <PageList />
      <Notice />
      <QnAList />
    </Section>
  )
}


export default Guide


const Section = styled.section`
  p{
    width:60%;
    margin:40px auto;
    color:rgb(69, 48, 88);
    font-size:32px;
    font-weight:600;
  }
`