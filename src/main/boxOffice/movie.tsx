import styled from "styled-components"


const Movie = () => {
  return(
    <MovieDiv>
      <ImgDIv>
        <img src = {require('../../imgs/cost.jpg')} />
      </ImgDIv>

      <ButtonDiv>
        <button>❤️ 1.1k</button>
        <button>예매</button>
      </ButtonDiv>
    </MovieDiv>
  )
}

export default Movie

const MovieDiv = styled.div`
  width:23%;
  cursor:pointer;
`

const ImgDIv = styled.div`
  margin-bottom:10px;
  height:360px;
  img{
    border-radius:10px;
    width:100%;
    height:100%;
  }
`

const ButtonDiv = styled.div`
  height:40px;
  button{
    height:100%;
  :nth-child(1){
    width:32%;
    margin-right:3%;
  }
  :nth-child(2){
    width:65%;
  }
}
`