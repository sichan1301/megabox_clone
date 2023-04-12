import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faMagnifyingGlass,faClapperboard,faUser } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return(
    <HeaderContainer>

      <TopMenu>
        <ul>
          <li>VIP LOUNGE</li>
          <li>멤버십</li>
          <li>고객센터</li>
        </ul>
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
          <li>빠른예매</li>
        </ul>
      </TopMenu>

      <Navbar>
        <div>
          <Icon icon={faBars}/>
          <Icon icon={faMagnifyingGlass} />
        </div>

        <ul>
          <li>영화</li>
          <li>예매</li>
          <li>극장</li>
          <li>메가박스</li>
          <li>이벤트</li>
          <li>스토어</li>
          <li>혜택</li>
        </ul>

        <div>
          <Icon icon={faClapperboard} />
          <Icon icon={faUser} />
        </div>
      </Navbar>

    </HeaderContainer>
  )
}


export default Header

const HeaderContainer = styled.header`
  background-color: #08010a;
  width:100%;
`

const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width:70%;
  margin:0 auto;
  height:40px;
  ul{
    padding:0;
    li{
      display:inline;
      padding:10px;
      color:#6b6b6b;
      cursor:pointer;
    }
  }
`

const Navbar = styled.nav`
  display: flex;
  align-items:center;
  justify-content:space-between;
  width:70%;
  margin:0 auto;
  padding:15px 0;
  
  div{
    padding:10px;
  }

  ul{
    padding:0;
    li{
      display:inline-block;
      text-align:center;
      color:#fff;
      width:80px;
      margin:0 30px;
      font-size:20px;
      cursor:pointer;
    }
  }
`
const Icon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 30px;
  cursor: pointer;
  margin: 0 10px;
`;

