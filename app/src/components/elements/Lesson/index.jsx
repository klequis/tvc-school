// LessonHeader
import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.css'
import LessonHeader from './LessonHeader'
import LessonFooter from './LessonFooter'

/*
    props
      > title
      > subTitle
 */
const Lesson = (props) => {
  return (
    <div>
      <LessonHeader
        title={props.title}
        subTitle={props.subTitle}
      />
      {props.children}
      <LessonFooter/>
    </div>


  )
}

export default Lesson
