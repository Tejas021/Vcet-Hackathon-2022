
import React from 'react'
import styles from "./Rules.module.css"
import { Link } from "react-router-dom"

const Rules = () => {
  return (
    <div className='container p-md-5 p-3 py-4 my-5' id="Guidelines">
      <h1 className={`text-center text-light mb-3`}>Event Guidelines</h1>

      <h3 className={`${styles.textPurple} mb-3`}>Rules</h3>
      <ul className={`text-light ${styles.ruleList}`}>
        <li> The VCET Hackathon will take place on<span className={`${styles.hLight}`}> 7th & 8th October 2022.</span> </li>
        <li> A team can consist of 1 to 4 members. Every member of the team must be a student of a university or a college. A team can have members from different colleges.</li>
        <li>  Entry fees is <span className={`${styles.hLight}`}>&#8377; 500</span> per team.</li>
        <li> Participants are free to use open standard repositories, APIs and publically available libraries.</li>
        <li>  Progress of the project will be tracked during Hackathon. Use of readymade code or precompiled code will lead to disqualification</li>
        <li> Participants are expected to behave professionally and responsibly.</li>
        <li>Decisions made by organizers and judges are final.
        </li>
        <li> Participants will have to submit 3 abstracts for all 1 for each problem statement.</li>
        <li> All updates regarding the event will be posted on Social Media handles as well as mailed to each team.</li>

      </ul>


      <h3 className={`${styles.textPurple} mb-3`}>Registration</h3>

      <Link to="/register" className={`${styles.Link}`}><button className={`${styles.bgBlue} btn text-light m-3 p-2 px-4`}>REGISTER NOW</button></Link>
      <ul className={`text-light ${styles.ruleList}`}>
        <li> 9 Problem Statements will be provided from our end.</li>
        <li>  You have to submit 3 abstracts (one for each domain) to these Problem Statements out of <span className={`${styles.hLight}`}>all 9 Problem Statements</span> consising of Implementation & Technology Stack out of which 1 will be allocated and notified to each team one day prior via email.</li>
        <li> Check out the sample abstract <span style={{ fontWeight: 'bold', cursor: "pointer", textDecoration: "underline" }} className={`${styles.textPurple} `} data-bs-toggle="modal" data-bs-target="#SampleAbs">here</span></li>
        <li>NOTE: The order preference of the problem statements is solely for our reference. We do not assure that the topic allocation will be based on your top preferences only</li>
        <li>Last date for submission of abstract is <span className={`${styles.hLight}`}>September 29, 2022</span>.</li>
        <li> The selected teams will get a confirmation by <span className={`${styles.hLight}`}>September 30, 2022</span>.</li>

        <li> Payment for the selected teams i.e. &#8377; 500 per team should be made by <span className={`${styles.hLight}`}>October 2, 2022</span>. Entry fee payment of the entire team should be done in a single transaction.</li>

        <li>Out of the 3 abstracts submitted, the final Problem Statement for your team will be disclosed on <span className={`${styles.hLight}`}>October 6, 2022.</span></li>
        <li> All done, your squad is all set to seize the multiverse of hacking.</li>
        <li> Following are the details of payment.</li>
      </ul>



      <div class="modal fade  text-light" id="NEFT" tabindex="-1" aria-labelledby="NEFT" aria-hidden="true">
        <div class="modal-dialog " >
          <div class="modal-content a" style={{ color: "#7A2BAA", background: "#180828" }}>
            <div class="modal-header ">
              <h5 class="modal-title " id="NEFT">NEFT Details</h5>
            </div>
            <div class="modal-body" style={{ color: '#fff', letterSpacing: '1px' }}>
              <h5>Account Name:  Vatsal Harish Shah</h5>
              <h5>Branch:  Dahisar East</h5>
              <h5>A/c no - 17910110011454</h5>
              <h5>IFSC - UCBA0001791</h5>
              <h6>Payment should be done by single transaction per team.</h6>
            </div>
            <div class="modal-footer">
              <button type="button" className={`${styles.bgBlue} btn text-light m-3 me-2 p-2 px-4 `} data-bs-dismiss="modal" >Close</button>

            </div>
          </div>
        </div>
      </div>

      <div class="modal fade  text-light" id="UPI" tabindex="-1" aria-labelledby="UPI" aria-hidden="true">
        <div class="modal-dialog " >
          <div class="modal-content " style={{ color: "#7A2BAA", background: "#180828" }}>
            <div class="modal-header ">
              <h5 class="modal-title " id="UPI">UPI Details</h5>

            </div>
            <div class="modal-body" >
              <h5>You can Scan the Qr Code Given Below:</h5>

              <img src="/Payment_QR.png" alt="qrcode" className={`${styles.qrcode}`} />
              <br />

              <h5>Or Pay On the following UPI-ID</h5>
              <h6 style={{ color: '#fff' }}>vatsalshah471@okhdfcbank</h6>
            </div>
            <div class="modal-footer">
              <button type="button" className={`${styles.bgBlue} btn text-light m-3 me-2 p-2 px-4 `} data-bs-dismiss="modal" >Close</button>

            </div>
          </div>
        </div>
      </div>

      <div class="modal fade  text-light" id="SampleAbs" tabindex="-1" aria-labelledby="SampleAbs" aria-hidden="true">
        <div class="modal-dialog " >
          <div class="modal-content " style={{ color: "#fff", background: "#180828" }}>
            <div class="modal-header ">
              <h5 class="modal-title " id="SampleAbs">Sample Abstract</h5>

            </div>
            <div class="modal-body" >
              <b>Problem statement:</b> Solving the problem of keeping track of student’s attendance, scores and other important information, deriving meaningful results, insights from the data by building a tech solution for the same.

              <br />
              <br />
              <b>Abstract:</b> The solution would be an android application that would perform automation operations such as sending automated text to parents on low attendance, calculating scores, submitting the results to Placement cell, identifying their weak areas if scored low on a test, etc.
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
