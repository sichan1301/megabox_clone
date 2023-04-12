import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return(
    <FooterSection>
      <FooterMenu>
        <ul>
          <li>회사소개</li>
          <li>인재채용</li>
          <li>사회공헌</li>
          <li>제휴/광고/부대사업문의</li>
          <li>이용약관</li>
          <li>위치기반서비스 이용약관</li>
          <li>개인정보처리방침</li>
          <li>윤리경영</li>
        </ul>

        <FindTheater>
          <Icon icon={faMagnifyingGlass} />
          <p>극장 찾기</p>
        </FindTheater>
      </FooterMenu>
    </FooterSection>
  )
}

export default Footer

const FooterSection = styled.footer`
  padding: 20px 20% 40px;  
  width:100%;
`

const FooterMenu = styled.div`
  display:flex;
  justify-content: space-between; 
  ul{
    padding:0;
    display: flex;
    li{
      font-size: 12px;
      margin-right:5px;
      cursor:pointer;
    }
  }
`

const FindTheater = styled.div`
  display:flex;  
  align-items: center;
  border:0.5px solid grey;
  border-radius: 40px;
  padding:2px 10px;
  p{
    color:rgb(110, 110, 110);
    font-size:12px;
    margin:0;
  }
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 12px;
  cursor: pointer;
  margin-right: 10px;
  color:rgb(110, 110, 110);
`;