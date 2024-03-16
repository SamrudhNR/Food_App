import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const err = useRouteError()
    console.log(err)
  return (
    <div>
        <h1>Ooopss!! </h1>
        <h2>Something went wrong....</h2>
        <h4>{err.status}: { err.statusText }</h4>
    </div>
  )
}

export default ErrorPage