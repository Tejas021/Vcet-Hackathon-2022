
import React from 'react'
import styles from "./Rules.module.css"
import { Link } from "react-router-dom"

const Rules = () => {
  return (
    <div className='container p-md-5 p-3 py-4 my-5' id="Guidelines">
      <h1 className={`text-center text-light mb-3`}>Event Guidlines</h1>

<h3 className={`${styles.textPurple} mb-3`}>Rules</h3>
<ul className={`text-light ${styles.ruleList}`}>
<li> The VCET Hackathon will take place on<span className={`${styles.hLight}`}> 7th & 8th October 2022.</span> </li>
<li> A team can consist of 1 to 4 members. Every member of the team must be a student of a university or a college. A team can have members from different colleges.</li>
<li>  Entry fees is <span className={`${styles.hLight}`}>Rs.500</span> per team.</li>
<li> Participants are free to use open standard repositories, APIs and publically available libraries.</li>
<li>  Progress of the project will be tracked during Hackathon. Use of readymade code or precompiled code will lead to disqualification</li>
<li> Participants are expected to behave professionally and responsibly.</li>
<li>Decisions made by organizers and judges are final.
</li>
<li> Participants will have to submit abstracts for all five problem statements.</li>
<li> All updates regarding the event will be posted on Social Media handles as well as mailed to each team.</li>

</ul>

<button className={`${styles.bgBlue} btn text-light m-3 p-2 px-4`}><Link to="/register" className={`${styles.Link}`}>REGISTER NOW</Link></button>

<h3 className={`${styles.textPurple} mb-3`}>Registration</h3>

<ul className={`text-light ${styles.ruleList}`}>
<li>Submit your abstract/solution consisting of- Implementation, Features and Technology Stack.</li>
<li> Check out the sample abstract here</li>
<li>  Problem Statements will be provided from our end.</li>
<li>  It is mandatory for participants to submit abstracts for <span className={`${styles.hLight}`}>all 5 Problem Statements</span>, out of which 1 will be allocated and notified to each team one day prior via email.</li>
<li>NOTE: The order preference of the problem statements is solely for our reference. We do not assure that the topic allocation will be based on your top preferences only</li>
<li>Last date for submission of abstract is <span className={`${styles.hLight}`}>September 23, 2021</span>.</li>
<li> The selected teams will get a confirmation by <span className={`${styles.hLight}`}>September 24, 2021</span>.</li>
<li> Payment for the selected teams i.e. Rs.500 per team should be made by <span className={`${styles.hLight}`}>September 26, 2021</span>. Entry fee payment of the entire team should be done in a single transaction.</li>
<li>Out of the 5 problem statements submitted, the final Problem Statement for your team will be disclosed on <span className={`${styles.hLight}`}>September 30, 2021.</span></li>
<li> Further details will be provided in email.</li>
<li> Following are the details of payment.</li>
</ul>



<div class="modal fade  text-light" id="NEFT" tabindex="-1" aria-labelledby="NEFT" aria-hidden="true">
  <div class="modal-dialog " >
    <div class="modal-content a" style={{color:"#7A2BAA",background:"#180828"}}>
      <div class="modal-header ">
        <h5 class="modal-title " id="NEFT">NEFT Details</h5>
       
      </div>
      <div class="modal-body" >
        ...
      </div>
      <div class="modal-footer">
        <button type="button" className={`${styles.bgBlue} btn text-light m-3 me-2 p-2 px-4 `} data-bs-dismiss="modal" >Close</button>
        
      </div>
    </div>
  </div>
</div>

<div class="modal fade  text-light" id="UPI" tabindex="-1" aria-labelledby="UPI" aria-hidden="true">
  <div class="modal-dialog " >
    <div class="modal-content " style={{color:"#7A2BAA",background:"#180828"}}>
      <div class="modal-header ">
        <h5 class="modal-title " id="UPI">UPI Details</h5>
       
      </div>
      <div class="modal-body" >
        ...
      </div>
      <div class="modal-footer">
        <button type="button" className={`${styles.bgBlue} btn text-light m-3 me-2 p-2 px-4 `} data-bs-dismiss="modal" >Close</button>
        
      </div>
    </div>
  </div>
</div>

<div>
<button className={`${styles.bgBlue} btn text-light m-3 me-2 p-2 px-4 `} data-bs-toggle="modal" data-bs-target="#NEFT">NEFT</button>
<button className={`${styles.bgBlue} btn text-light m-3 ms-2 p-2 px-4`} data-bs-toggle="modal" data-bs-target="#UPI">UPI</button>
</div>

    </div>
  )
}

export default Rules
