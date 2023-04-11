import styled from "styled-components"

const Navbar = () => {
  return(
    <NavbarContainer>
      <NavbarInner>
        <ul>
          <li>사이트맵</li>
          <li>검색</li>
        </ul>
        <ul>
          <li>영화</li>
          <li>예매</li>
          <li>극장</li>
        </ul>
        <h1>메가박스</h1>
        <ul>
          <li>이벤트</li>
          <li>스토어</li>
          <li>혜택</li>
        </ul>
        <ul>
          <li>상영시간표</li>
          <li>나의 메가박스</li>
        </ul>
      </NavbarInner>
    </NavbarContainer>
  )
}




export default Navbar

const NavbarContainer = styled.div`
  background-color: #08010a;
  width:100%;
`

const NavbarInner = styled.nav`
  width:80%;
  margin:0 auto;
  display: flex;
  color:#fff;
  
  ul{
    display:flex;
    :nth-child(1){
      width:10%;
    }

    :nth-child(2){
      width:35%;
    }
    :nth-child(3){
      width:35%;
    }
    :nth-child(4){
      width:10%;
    }
    li{
      margin:0 10px;
    }
    h1{
      width:10%;
    }
  }
`

