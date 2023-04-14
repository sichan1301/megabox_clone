import styled from "styled-components"
import CurationInfo from "./curationInfo"
import CurationSample from "./curationSample"

const Curation = () => {
  return(
    <Section>
      <TopText>
        <p>큐레이션</p>
        <p>큐레이션 더보기</p>
      </TopText>
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

const TopText = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
  p{
    :first-child{
      color:#fff;
      font-size:30px;
      font-weight:600;
    }
    :last-child{
      color:#c0bdbd;
      font-size:16px;
      cursor:pointer;
    }
  }
`
const Title = styled.p`
`

const Contents = styled.div`
  display:flex;
`
