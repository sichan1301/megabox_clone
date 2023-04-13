import styled from "styled-components"
import { faGem,faUser, faCreditCard, faGift, faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BenefitMenu = () => {
  return(
    <BenefitMenuArticle>
      <BenefitMenuUl>
        <li>
          <Icon icon={faGem}/>
          <p>VIP LOUNGE</p>
        </li>

        <li>
          <Icon icon={faUser}/>
          <p>멤버십</p>
        </li>

        <li>
          <Icon icon={faCreditCard}/>
          <p>할인카드안내</p>
        </li>

        <li>
          <Icon icon={faGift}/>
          <p>이벤트</p>
        </li>

        <li>
          <Icon icon={faPizzaSlice}/>
          <p>스토어</p>
        </li>

      </BenefitMenuUl>
    </BenefitMenuArticle>
  )
}


export default BenefitMenu

const BenefitMenuArticle = styled.article`
  padding:150px 20% 0;
  width:100%;
  height:330px;
  background-color:rgb(85, 46, 132);
`

const BenefitMenuUl = styled.ul`
  display:flex;
  justify-content:space-around;
  height:50px;
  padding:0;
  li{
    text-align:center;
    width:200px;
    cursor:pointer;
    p{
      color:#fff;
      font-size:20px;
    }
  }
`

const Icon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 40px;
  margin: 0 10px;
`