import React from 'react';
import Styled from 'styled-components'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const ContainerDiv = Styled.div`
  ${props => (props.type === 'top-bar' ? `width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  ` : null )}
  ${props => (
    props.type === 'container' ? `
      width: 100%;
      display: flex;
      justify-content: none;
      align-items: none;
      flex-direction: row;
      color: #fff;
      letter-spacing: 1px;
      padding: 0 10px;
      @media(min-width: 1280px){
        width: 1280px
      }     
    ` : null
  )}
  ${props => (
      props.type === 'container-left' ? `
        display: flex;
        justify-content: none;
        align-items: center;
        flex-direction: row;
        flex: 1;
        font-size: 11px;     
      ` : null
    )}
  ${props => (
      props.type === 'container-center' ? `
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex: 3;
        font-size: 9px;
      ` : null
    )}
  ${props => (
    props.type === 'contianer-right' ? `
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex: 3;
      font-size: 9px;   
    ` : null
  )}
  ${props => (
      props.type === 'header' ? `
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        background-color: #fff;
        border-bottom: 1px solid lightgrey;
        width: 100%;
        height: 120px;
        margin-top: 44px;
        padding-bottom: 15px;
      ` : null
    )}
`

const TopBar = () => {
  return (
    <ContainerDiv type = 'top-bar'>
      <ContainerDiv type="container">
        <ContainerDiv type ="container-left">
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerDiv>
        <ContainerDiv type ="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerDiv>
        <ContainerDiv type ="container-right">
          <span>LOG IN</span>
        </ContainerDiv>
      </ContainerDiv>
    </ContainerDiv>
  )
}

export default TopBar;
export {ContainerDiv}