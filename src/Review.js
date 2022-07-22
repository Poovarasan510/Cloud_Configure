import React from 'react'

export const Review = (props) => {
  return (
    <div>
        <p>Like Sriharish Call Taxi</p>
    <p><button onClick={props.handleClick} className='btn btn-info'>+</button></p>
    <p> Likes:{props.count}</p>
    </div>
  )
}

