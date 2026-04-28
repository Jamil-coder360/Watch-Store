import React from 'react'

const Button = ({Tagname="button" , children , className= "", ...props}) => {
  return (
    <Tagname {...props} className={`text-center text-lg font-bold py-3 px-7 uppercase rounded  bg-yellow-700 text-white ${className}`}>
        {children}
    </Tagname>
  )
}

export default Button