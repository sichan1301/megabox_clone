import styled from "styled-components"

const Page = () => {
  return(
    <PageLi>
      <img src = {require('../../imgs/cost.jpg')} />
    </PageLi>
  )
}


export default Page


const PageLi = styled.li`
  width:16%;
  height:150px;
  cursor:pointer;
  border:1px solid black;
  border-radius:10px;
  padding:2px;
  img{
    width:100%;
    height:100%;
  }
`