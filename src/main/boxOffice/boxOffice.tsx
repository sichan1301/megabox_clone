import styled from "styled-components"
import Menu from "./menu"
import MovieList from "./movieList"


const BoxOfffice = () => {
  return(
    <Section>
      <p>박스오피스</p>
      <MovieList />
      <Menu />
    </Section>
    
  )
}

export default BoxOfffice

const Section =styled.section`
  background-color:rgb(20, 2, 30);
  padding:80px 20% 150px;

  p{
    width:100px;
    font-size:20px;
    margin:0 auto 30px;
    color:#fff;
    cursor:pointer;
  }
`