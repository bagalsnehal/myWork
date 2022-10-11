import React from 'react'
import Age  from './Age'
import ExceptionBoundry from './ExceptionBoundry'
const ExceptionHandling = () => {
  return (
    <div>
        <h1>ExceptionHandling</h1>
        <ExceptionBoundry>
        <Age Name='s1' age={10}/>
        <Age Name='s2' age={20}/>
        <Age Name='s3' age={-40}/>
        </ExceptionBoundry>
    </div>
  )
}

export default ExceptionHandling