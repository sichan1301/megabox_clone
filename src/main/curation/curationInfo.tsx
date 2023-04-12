import styled from "styled-components"

const CurationInfo = () => {
 return(
  <CurationInfoArticle>
    <div>
      <HashTag>#클래스소사이어티</HashTag>
      <Title>[ROH 오페라] 투란도트</Title>
    </div>

    <CurationInfoDiv>
      <p>푸치니의 마지막 오페라 명작, 투란도트</p> <br />
      <p>역대 가장 화려한 시즌, 로열 오페라 하우스 라이브 시네마 2022/23</p> <br />
      <p>[상영 정보]</p>
      <p>상영지점 : 더 부티크 목동현대백화점 / 성수 / 센트럴 / 분당 / 킨텍스 / 부산대 / 마산 / 남양주 / 영종 / 전주혁신</p>
      <p>상영일정 : 2023년 4월 24일(월) ~ 5월 8일(월) 매주 월요일 상영</p>
      <p>러닝타임 : 155분</p>
    </CurationInfoDiv>

    <CurationListUl>
      <li>
        <img src = {require('../../imgs/cost.jpg')} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
      </li>
      <li>
        <img src = {require('../../imgs/cost.jpg')} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
      </li>
      <li>
        <img src = {require('../../imgs/cost.jpg')} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
      </li>
      <li>
        <img src = {require('../../imgs/cost.jpg')} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
      </li>
    </CurationListUl>
  </CurationInfoArticle>
 ) 
}

export default CurationInfo

const CurationInfoArticle = styled.article`
  margin-left:20px;
`


const HashTag = styled.p`
  font-size:22px;
  color:#fff;
  margin:5px 0;
  font-weight:600;
`

const Title = styled(HashTag)`
  font-size:32px;

`

const CurationInfoDiv = styled.div`
  padding-top:10px;
  border-top:0.5px solid grey;
  p{
    color:#fff;
    margin:0;
  }
`

const CurationListUl = styled.ul`
  display:flex;
  justify-content:space-between;
  padding:0;
  li{
    width:23%;
    img{
      width:100%;
      border-radius:10px;
      height:300px;
    }
    p{
      color:#fff;
    }
  }
`

