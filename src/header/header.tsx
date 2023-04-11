import styled from "styled-components"


const Header = () => {
  return(
    <HeaderContainer>
      <HeaderInner>

        <HeaderUl>
          <li>VIP LOUNGE</li>
          <li>멤버십</li>
          <li>고객센터</li>
        </HeaderUl>
        <HeaderUl>
          <li>로그인</li>
          <li>회원가입</li>
          <li>빠른예매</li>
        </HeaderUl>
      </HeaderInner>

    </HeaderContainer>
  )
}




export default Header

const HeaderContainer = styled.div`
  background-color: #08010a;
  width:100%;
`

const HeaderInner = styled.header`
  width:80%;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
`

const HeaderUl = styled.ul`
  display:flex;
  li{
    margin-right:10px;
    color:#6b6b6b;
  }
`
