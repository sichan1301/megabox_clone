import styled from "styled-components"

const Menu = () => {
  return(
    <MenuDiv>
      <button>검색</button>
      <button>상영시간표</button>
      <button>박스오피스</button>
      <button>빠른예매</button>
    </MenuDiv>
  )
}

export default Menu

const MenuDiv = styled.div`
  height:65px;
  background-color:rgba(38, 7, 56, 0.5);
  border-radius:10px;

  button{
    background-color:transparent;
    border:none;
    font-size:20px;
    width:25%;
    padding:20px;
    cursor:pointer;
    color:rgb(162, 161, 161);
  }
`