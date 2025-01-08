
import React from 'react'

function CourseItem({id,name,fees}) {
  return (
    <div>
        <p>Course Id is {id}</p>
        <p>Course Name is {name}</p>
        <p>Course Fees is {fees}</p>
    </div>
  )
}

export default CourseItem