import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return(
    <FooterSection>
      <TopMenu>
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
      </TopMenu>

      <LowerMenu>
        <LogoImgDiv>
          <img src={require('../imgs/free.jpg')} />
        </LogoImgDiv>
        <LowerMenuText>
          <p>서울특별시 성동구 왕십리로 50, 6층 (성수동1가, 메가박스 스퀘어) ARS 1544-0070</p>
          <p>대표자명 홍정인 · 개인정보보호책임자 공성진 · 사업자등록번호 211-86-59478 · 통신판매업신고번호 2023-서울성동-0177</p>
          <p>COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved</p>
        </LowerMenuText>
        <SocialImgDiv>
          <img src={require('../imgs/free.jpg')} />
          <img src={require('../imgs/free.jpg')} />
          <img src={require('../imgs/free.jpg')} />
          <img src={require('../imgs/free.jpg')} />
        </SocialImgDiv>
      </LowerMenu>
    </FooterSection>
  )
}

export default Footer

const FooterSection = styled.footer`
  padding: 20px 20% 40px;  
  width:100%;
`

const TopMenu = styled.div`
  display:flex;
  justify-content: space-between; 
  ul{
    padding:0;
    display: flex;
    li{
      font-size: 14px;
      margin-right:15px;
      cursor:pointer;
    }
  }
`

const FindTheater = styled.div`
  display:flex;  
  align-items: center;
  border:0.5px solid grey;
  border-radius: 40px;
  padding:1px 25px;
  p{
    color:rgb(84, 84, 84);
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


const LowerMenu = styled.div`
  display:flex;
  align-items:center; 
`

const LogoImgDiv = styled.div`
  width : 200px;
  height: 150px;
  img{
    width:100%;
    height:100%;
  }
`

const LowerMenuText = styled.div`
  width:80%;
  p{
    margin:0 0 4px 0;
    font-size:15px;
  }
`

const SocialImgDiv = styled.div`
  width:160px;
  height:40px;
  img{
    width:25%;
    height:100%;
  }
`