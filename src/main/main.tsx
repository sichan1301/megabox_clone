import styled from "styled-components"
import Advertisement from "./advertisement/advertisement"
import Benefit from "./benefit/benefit"
import BoxOfffice from "./boxOffice/boxOffice"
import Curation from "./curation/curation"
import Guide from "./guide/guide"

const Main = () => {
  return(
    <main>
      <BoxOfffice />
      <Benefit />
      <Curation />
      <Guide />
      <Advertisement />
    </main>

  )
}

export default Main

const MainTag = styled.main`
  width:100%;
`