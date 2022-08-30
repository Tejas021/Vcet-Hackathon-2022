import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from "./Form.module.css"
const Form = () => {

  const submitInfo = (e) => {
    e.preventDefault();
    console.log(data);

  }

  return (
    <div className='p-5'>
      <Navbar />
      <h1 className={`text-center ${styles.textPurple}`}>Register</h1>
      <form className={`form-control p-5 ${styles.bgBlue} ${styles.form1}`}>

        <div className='p-2'>
          <h3 className={`text-light`}>Team Leader</h3>
          <input className={`form-control mt-2`} placeholder="Name" />
          <input className={`form-control mt-2`} placeholder="Surname" />

        </div>


        <button className={`btn ${styles.bgPurple} text-light`} type="submit" onClick={(e) => submitInfo(e)}>Submit</button>

      </form>
    </div>
  )
}

export default Form
