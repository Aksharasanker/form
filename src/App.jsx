import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {

  const [name, setName] = useState('')
  const [isName, setIsName] = useState(true)
  const [email, setEmail] = useState('')
  const [isEmail, setIsEmail] = useState(true)
  const [password, setPassword] = useState('')
  const [isPassword, setIsPassword] = useState(true)



  const validateName = (e) => {
    const { value } = e.target
    if (value.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
    )) {
      setIsName(true);
      setName(value);
    }
    else {
      setIsName(false);
      setName(value);
    }
  }

  const validateEmail = (e) => {
    const { value } = e.target
    if (value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setIsEmail(true);
      setEmail(value);
    }
    else {
      setIsEmail(false);
      setEmail(value);
    }
  }

  const validatePassword = (e) => {
    const { value } = e.target
    if (value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
      setIsPassword(true);
      setPassword(value);
    }
    else {
      setIsPassword(true);
      setPassword(value);
    }
  }




  const submit = (e) => {
    e.preventDefault()
    if (name && email && password) {
      alert('Succefully Completed Registration')
      setName('')
      setEmail('')
      setPassword('')

    }
    else {
      alert("Please fill the form completly")
    }
  }
  const handleReset=()=>{
    setName(null)
    setEmail(null)
    setPassword(null)
    setName(0)
    setEmail(0)
    setPassword(0)
   
            
  }
  //function to calculate handleCalculate 




  return (
    <>
     <div className='main'>
        <div className='sub'>
        <h1>Registration Form</h1>
        <form>
          <TextField id="outlined-basic" color='success'name='Age' placeholder='Enter Your Name' variant="outlined" className='w-75 mt-3' onChange={(e) => { validateName(e) }} value={name} /> 
          {!isName && <div>
                <p className='validation'>Invalid Input</p>
              </div>}

          <TextField id="outlined-basic" color='success'name='Age' placeholder='Enter Your Email' variant="outlined" className='w-75 mt-3'  onChange={(e) => { validateEmail(e) }} value={email} /> 
          {!isEmail && <div>
                <p className='validation'>Invalid Input</p>
              </div>}
          <TextField id="outlined-basic" color='success'name='Age' placeholder='Enter Your Password' variant="outlined" className='w-75 mt-3' onChange={(e) => { validatePassword(e) }} value={password} /> 
          {!isPassword && <div>
                <p className='validation'>Invalid Input</p>
              </div>}

              <Button  onClick={handleReset} variant="outlined" className='w-25 mt-3 m-1' color='success'>Reset</Button>
              
              <Button  onClick={submit} variant="contained" className='w-25 mt-3 m-1' color='success' disabled={isName && isEmail && isPassword ?false:true} >Submit</Button>
              
        
            
          
        
        </form>

      </div>
    </div>
 
     
      </>
  )
}

export default App
