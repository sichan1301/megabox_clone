import styled from "styled-components"

const Notice = () => {
  return(
    <NoticeArticle>
      <Content>
        <TextDiv>
          <p>지점</p>
          <p><span>[성수]</span>[성수] 7층 부티크 사용 제한 안내 (4/13 목)</p>
        </TextDiv>

        <TextDiv>
          <p>2023.04.10</p>
          <p>더보기</p>
        </TextDiv>
      </Content>
    </NoticeArticle>
  )
}


export default Notice

const NoticeArticle = styled.article`
  height:60px;
  border-top:1px solid grey;
  border-bottom:1px solid grey;
  `

const Content = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 0 20%;
  `

const TextDiv = styled.div`
  p{
    line-height:60px;
    display:inline; 
    font-size:20px;
    :first-child{
      margin-right:14px;
    }
  }
`