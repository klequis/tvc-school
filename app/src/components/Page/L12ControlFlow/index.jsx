// L12ControlFlow
import React from 'react'
import './style.css'
import Lesson from '../../elements/Lesson'
import Pre from './../../elements/Pre'
import Code from './../../elements/Code'
import Img from '../../elements/Img/index'

const L12ControlFlow = (props) => {
  return (
    <Lesson
      title='Conditional Flow Control'
      subTitle='" if " statement'
      handleMenuItemClick={props.handleMenuItemClick}
    >
      <p>What is an if statement?</p>
    </Lesson>
  )
};

export default L12ControlFlow;