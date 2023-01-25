import React from 'react'
import { NotFoundDiv } from './notFoundStyle'
import robo from '../../images/robortBuilder.png'

const NotFound = () => {
  return (
    <NotFoundDiv>
        <h1> <b>Error!!</b> Page not Found.</h1>
        <img src={robo} alt="robo" />
    </NotFoundDiv>
  )
}

export default NotFound