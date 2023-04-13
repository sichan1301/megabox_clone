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
  padding:30px 20% 100px;
  background-color:rgb(33, 33, 72);
`

const Title = styled.p`
  color:#fff;
  font-size:30px;
  font-weight:600;
  margin-bottom:20px;
`

const Contents = styled.div`
  display:flex;
`
