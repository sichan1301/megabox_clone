import styled from "styled-components"
import Movie from "./movie"

const MovieList = () => {
  return(
    <MovieListDiv>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <MoreButton>더 많은 영화보기</MoreButton>
    </MovieListDiv>
  )
}

export default MovieList


const MovieListDiv = styled.div`
  position:relative;
  width:100%;
  display:flex;
  margin-bottom:30px;
  justify-content:space-between;
`

const MoreButton = styled.button`
  position:absolute;
  right:5px;
  top:-35px;
  color:#b1b1b1;
  font-size:18px;
  border:none;
  background:none;
  cursor:pointer;
`