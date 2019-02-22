import React from 'react';
import Styled from 'styled-components'
import {ContainerDiv} from './TopBar'


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Span = Styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  ${props => (
    props.type === 'date' ? `
      margin-left: 25px;
      flex: 1;
    ` : null
  )}
  
  ${props => (
    props.type === 'temp' ? `
      text-align: right;
      margin-right: 25px;
      flex: 1;
    ` : null
  )}
`

const Header = () => {
  return (
    <ContainerDiv type ="header">
      <Span type="date">SMARCH 32, 2018</Span>
      <h1>Lambda Times</h1>
      <Span type="temp">98°</Span>
    </ContainerDiv>
  )
}

export default Header