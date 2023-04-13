import styled from "styled-components"

const Notice = () => {
  return(
    <NoticeArticle>
      <Content>
        <div>
          <Text1>지점</Text1>
          <Text2><span>[성수]</span>[성수] 7층 부티크 사용 제한 안내 (4/13 목)</Text2>
        </div>
        <div>
          <Text1>2023.04.10</Text1>
          <Text2>더보기</Text2>
        </div>
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

const Text1 = styled.p`
  line-height:60px;
  display:inline; 
  font-size:16px;
  margin-right:14px;
`

const Text2 = styled(Text1)`
  margin:0;
`