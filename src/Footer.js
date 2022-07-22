import React from 'react'

export const Footer = ({designer,email}) => {
  return (
    <div>
        <hr/>
        <p>Designed by {designer}</p>
        <p><a href={'mailTo:'+email.mail}>{email.text}</a></p>
    </div>
  )
}
