import styled from "styled-components"
import Benefit from "./benefit/benefit"
import BoxOfffice from "./boxOffice/boxOffice"
import Curation from "./curation/curation"

const Main = () => {
  return(
    <MainTag>
        <BoxOfffice />
        <Benefit />
        <Curation />
    </MainTag>

  )
}

export default Main

const MainTag = styled.main`
  width:100%;
`