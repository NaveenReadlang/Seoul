import { isArray, isObject, isString } from 'highcharts'
import React, { useEffect } from 'react'
import { array } from 'yup'

const PracticeView = (props) => {
    
    const viewData = JSON.stringify(props.data);
        console.log(viewData);
    useEffect(() => {
    })
  return (
    <div>
      <h1>{viewData}</h1>
    </div>
  )
}

export default PracticeView
