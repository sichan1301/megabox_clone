import styled from "styled-components"
import CurationInfo from "./curationInfo"
import CurationSample from "./curationSample"

const Curation = () => {
  return(
    <Section>
      <Title>큐레이션</Title>
        <Contents>
          <CurationSample />
          <CurationInfo/>
        </Contents>
    </Section>
  )
}

export default Curation

const Section = styled.section`
  padding:30px 20% 50px;
  background-color:rgb(39, 40, 111);
`

const Title = styled.p`
  color:#fff;
  font-size:30px;
  font-weight:600;
  margin-bottom:20px;
`

const Contents = styled.div`
  width:100%;
  display:flex;
`