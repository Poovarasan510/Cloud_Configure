import React,{useEffect,useState} from 'react';
import axios from 'axios'


export const AddDriver = () => {
    const [driver,setDriver]=useState({})


    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(driver);
        axios.post("http://localhost:7070/api/v1/drivers",driver)
            .then(response=>console.log(response.status))
    }
    const handleChange=(event)=>{
        // console.log(event.target.name)
        // console.log(event.target.value)
        let name=event.target.name;
        let value=event.target.value;
        setDriver(obj=>({...obj,[name]:value}))
    }

  return (
    <div>
            <form onSubmit={handleSubmit}>

            <div className='from-group'>
                <label htmlFor="">Driver Id</label>
                <input type="text" name='driverId' onChange={handleChange} className='form-control' />
            </div>
            <div>
                <label htmlFor="">Driver Name</label>
                <input type="text" name='driverName' onChange={handleChange} className='form-control' />
            </div>
            <div>
                <label htmlFor="">Mobile Number</label>
                <input type="text" name='mobileNumber' onChange={handleChange} className='form-control'/>
            </div>
            <div>
                <label htmlFor="">Location</label>
                <input type="text" name='location' onChange={handleChange} className='form-control'/>
            </div>
            <div>
                <label htmlFor="">Date Of Birth</label>
                <input type="date" name='dateOfBirth' onChange={handleChange} className='form-control'/>
            </div>
            <div>
                <label htmlFor="">Rating</label>
                <input type="text" name='rating' onChange={handleChange} className='form-control'/>
            </div>
                <input type="submit" value='add' className='btn btn-info'/>
            </form>
    </div>
  )
}
