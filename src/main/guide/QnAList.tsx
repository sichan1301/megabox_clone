import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen, faFilm, faHeadset,faMessage,faQuestion,faUser } from '@fortawesome/free-solid-svg-icons'


const QnAList = () => {
  return(
    <QnAListUl>
      <QnALi>
        <Icon icon={faHeadset} />
        <p>고객센터</p>
      </QnALi>
      <QnALi>
        <Icon icon={faQuestion} />
        <p>자주 묻는 질문</p>
      </QnALi>
      <QnALi>
        <Icon icon={faMessage} />
        <p>1:1 문의</p>
      </QnALi>
      <QnALi>
        <Icon icon={faUser} />
        <p>단체/대관문의</p>
      </QnALi>
      <QnALi>
        <Icon icon={faBoxOpen} />
        <p>분실물 <br />문의/접수</p>
      </QnALi>
      <QnALi>
        <Icon icon={faFilm} />
        <p>더 부티크 <br /> 프라이빗 대관예매</p>
      </QnALi>
    </QnAListUl>
  ) 
}


export default QnAList


const QnAListUl = styled.ul`
  padding:20px 20% 40px;
  display:flex;
  justify-content:space-between;
  text-align:center;
`

const QnALi = styled.li`
  width:16%;
  height:150px;
  cursor:pointer;
  p{
    font-size:18px;
  }
`

const Icon = styled(FontAwesomeIcon)`
  color: #5ac8ce;
  font-size: 40px;
  cursor: pointer;
  margin: 0 10px;
`;