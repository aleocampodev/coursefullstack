import React from 'react'
import Part from './Part'

const Content = (props) => {
  return (
    <>
     { 
        props.parts.map((item,index) => (
            <Part part={item.name} exercises={item.exercises} key={index}/>
        ))
     }
    </>
  )
}

export default Content
