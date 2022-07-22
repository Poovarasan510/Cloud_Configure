import React from 'react'
import { NavBar } from './NavBar'
import{ Image} from './Image'
import logo from './Images/taxi.jpg'
const links=[
  {"link":'/home','text':'Home Tour'},
  {"link":'/about','text':'About Us'},
  {"link":'/client','text':'Client'}
]
export const Header = ({heading}) => {
  return (
    <header>
    <div className='col-md-6' style={{height:'300px'}}>
        <h1>{heading}</h1>
      <Image imgRef = {logo} altText = {'Company Logo'}> </Image>
      </div>
       <div className='col-md-6'>
       <NavBar data={links}></NavBar>
       </div>
       </header>
  )
}
