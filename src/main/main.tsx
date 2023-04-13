import styled from "styled-components"
import Advertisement from "./advertisement"
import Benefit from "./benefit/benefit"
import BoxOfffice from "./boxOffice/boxOffice"
import Curation from "./curation/curation"
import Guide from "./guide/guide"

const Main = () => {
  return(
    <MainTag>
      <BoxOfffice />
      <Benefit />
      <Curation />
      <Guide />
      <Advertisement />
    </MainTag>

  )
}

export default Main

const MainTag = styled.main`
  width:100%;
`