import styled from "styled-components"
import Page from "./page"

const PageList = () => {
  return(
    <PageListUl>
      <Page />
      <Page />
      <Page />
      <Page />
      <Page />
      <Page />
    </PageListUl>
  )
}


export default PageList

const PageListUl = styled.ul`
  padding:20px 20% 50px;
  display:flex;
  justify-content:space-between;
`