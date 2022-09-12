import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Form.css'

const Form = () => {

  const submitInfo = (e) => {
    e.preventDefault();
    console.log(data);

  }
  return (
    <>
      <Navbar />
      <div className="form-main-container marginal">
        <h1>Registration</h1>
        <hr/>
        <h3>Problem Statement Selection</h3>
        <div className="problem-statement-container grid">
            <div className="problem1-container blur-container grid">
                <div className="form-heading">
                    AI/ML
                </div><br/>
                <select className="form-control " name="" id="">
                    <option className="form-control" selected disabled>Problem Statement</option>
                    <option className="form-control" value="">System Vulnerability using AI/ML</option>
                    <option className="form-control" value="">Metadata-farmer assistance</option>
                    <option className="form-control" value="">Recommendation for career/resume building</option>
                </select>
                <textarea className="form-control" name="" id="" cols="" rows=""></textarea>
                <input type="text" name="" id="" className="form-control" placeholder="Technology Stack" value required/>
                <select className="form-control " name="" id="">
                    <option className="form-control" selected disabled>Preference</option>
                    <option className="form-control" value="">Preference 1</option>
                    <option className="form-control" value="">Preference 2</option>
                    <option className="form-control" value="">Preference 3</option>
                    <option className="form-control" value="">Preference 4</option>
                    <option className="form-control" value="">Preference 5</option>
                </select>
            </div>
            <div className="problem2-container blur-container grid">
                <div className="form-heading">
                    Web/App Devlopment
                </div><br/>
                <select className="form-control " name="" id="">
                    <option className="form-control" selected disabled>Problem Statement</option>
                    <option className="form-control" value="">Testing tool for phone apps.</option>
                    <option className="form-control" value="">Bus Tracking System</option>
                    <option className="form-control" value=""> CRM for Business </option>
                </select>
                <textarea className="form-control" name="" id="" cols="" rows=""></textarea>
                <input type="text" name="" id="" className="form-control" placeholder="Technology Stack" value required />
                <select className="form-control " name="" id="">
                    <option className="form-control" selected disabled>Preference</option>
                    <option className="form-control" value="">Preference 1</option>
                    <option className="form-control" value="">Preference 2</option>
                    <option className="form-control" value="">Preference 3</option>
                    <option className="form-control" value="">Preference 4</option>
                    <option className="form-control" value="">Preference 5</option>
                </select>
            </div>
            <div className="problem3-container blur-container grid">
                <div className="form-heading">
                    Cyber Security
                </div><br />
                <select className="form-control " name="" id="">
                    <option className="form-control" selected disabled>Problem Statement</option>
                    <option className="form-control" value="">Call Tracking for VOIP</option>
                    <option className="form-control" value="">Network Security Scanner</option>
                    <option className="form-control" value="">Email monitoring</option>
                </select>
                <textarea className="form-control" name="" id="" cols="" rows=""></textarea>
                <input type="text" name="" id="" className="form-control" placeholder="Technology Stack" value required />
                <select className="form-control " name="" id="">
                    <option className="form-control" selected disabled>Preference</option>
                    <option className="form-control" value="">Preference 1</option>
                    <option className="form-control" value="">Preference 2</option>
                    <option className="form-control" value="">Preference 3</option>
                    <option className="form-control" value="">Preference 4</option>
                    <option className="form-control" value="">Preference 5</option>
                </select>
            </div>
        </div>
        <hr/><br/>
        <h3>Team Details</h3>
        <div className="form-main-container form-grid">
          <div className="team-leader-container">
            <div className="details-container form-grid">
              <label className="form-heading" for="id_team_name">
                Team Name
                <span style={{ "color": "tomato" }}>*</span>
              </label>
              <input type="text" className="form-control" id="id_team_name" name="team_name" placeholder="Team Name"
                data-error="Please enter your name" value required />
              <label className="form-heading" for="id_team_name">
                Team Leader
                <span style={{ "color": "tomato" }}>*</span>
              </label>
              <input type="text" className="form-control" id="id_team_leader_name" name="team_leader_name"
                placeholder="Full Name" data-error="Please enter your team name" value required />

              <input type="text" className="form-control" id="id_team_leader_college_name" name="team_leader_college_name"
                placeholder="College Name" data-error="Please enter your team name" value required />

              <input type="email" className="form-control email-input" id="id_team_leader_email" name="team_leader_email"
                placeholder="Email" data-error="Please enter your team name" value required />

              <input type="text" className="form-control half-form course-year" id="id_team_leader_course_year"
                name="team_leader_course_year" placeholder="Course and Year"
                data-error="Please enter your team name" value required />
              <input type="text" className="form-control half-form tel-input" id="id_team_leader_tel_number"
                name="team_leader_tel_number" placeholder="Phone Number" data-error="Please enter your team name"
                value required />


              <input type="text" className="form-control half-form alt-tel-input" id="id_team_leader_alter_tel_number"
                name="team_leader_alter_tel_number" placeholder="Alternate Phone No."
                data-error="Please enter your team name" value required />
              <select className="form-control half-form" name="team_leader_gender" id="id_team_leader_gender">
                <option className="form-control" selected disabled>Gender</option>
                <option className="form-control" value="M">Male</option>
                <option className="form-control" value="F">Female</option>
              </select>
            </div>
          </div>
          <div className="team-member1-container">
            <div className="details-container form-grid">
              <label className="form-heading" for="id_teammate1_name">
                Teammate 1
              </label>
              <input type="text" className="form-control" id="id_teammate1_name" name="teammate1_name"
                placeholder="Full Name" data-error="Please enter your team name" value required />
              <input type="text" className="form-control" id="id_teammate1_college_name" name="teammate1_college_name"
                placeholder="College Name" data-error="Please enter your team name" value required />
              <input type="email" className="form-control email-input" id="id_teammate1_email" name="teammate1_email"
                placeholder="Email" data-error="Please enter your team name" value required />
              <input type="text" className="form-control half-form course-year" id="id_teammate1_course_year"
                name="teammate1_course_year" placeholder="Course and Year" data-error="Please enter your team name"
                value required />
              <input type="text" className="form-control half-form tel-input" id="id_teammate1_tel_number"
                name="teammate1_tel_number" placeholder="Phone Number" data-error="Please enter your team name"
                value required />
              <input type="text" className="form-control half-form alt-tel-input" id="id_teammate1_alter_tel_number"
                name="teammate1_alter_tel_number" placeholder="Alternate Phone No."
                data-error="Please enter your team name" value required />
              <select className="form-control half-form" name="teammate1_gender" id="id_teammate1_gender">
                <option selected disabled>Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
          </div>
          <div className="team-member2-container">
            <div className="details-container form-grid">
              <label className="form-heading" for="id_teammate2_name">
                Teammate 2
              </label>
              <input type="text" className="form-control" id="id_teammate2_name" name="teammate2_name"
                placeholder="Full Name" data-error="Please enter your team name" value required />
              <input type="text" className="form-control" id="id_teammate2_college_name" name="teammate2_college_name"
                placeholder="College Name" data-error="Please enter your team name" value required />
              <input type="email" className="form-control email-input" id="id_teammate2_email" name="teammate2_email"
                placeholder="Email" data-error="Please enter your team name" value required />
              <input type="text" className="form-control half-form course-year" id="id_teammate2_course_year"
                name="teammate2_course_year" placeholder="Course and Year" data-error="Please enter your team name"
                value required />
              <input type="text" className="form-control half-form tel-input" id="id_teammate2_tel_number"
                name="teammate2_tel_number" placeholder="Phone Number" data-error="Please enter your team name"
                value required />
              <input type="text" className="form-control half-form alt-tel-input" id="id_teammate2_alter_tel_number"
                name="teammate2_alter_tel_number" placeholder="Alternate Phone No."
                data-error="Please enter your team name" value required />
              <select className="form-control half-form" name="teammate2_gender" id="id_teammate2_gender">
                <option selected disabled>Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
          </div>
          <div className="team-member3-container">
            <div className="details-container form-grid">
              <label className="form-heading" for="id_teammate3_name">
                Teammate 3
              </label>
              <input type="text" className="form-control" id="id_teammate3_name" name="teammate3_name"
                placeholder="Full Name" data-error="Please enter your team name" value required />
              <input type="text" className="form-control" id="id_teammate3_college_name" name="teammate3_college_name"
                placeholder="College Name" data-error="Please enter your team name" value required />
              <input type="email" className="form-control email-input" id="id_teammate3_email" name="teammate3_email"
                placeholder="Email" data-error="Please enter your team name" value required />
              <input type="text" className="form-control half-form course-year" id="id_teammate3_course_year"
                name="teammate3_course_year" placeholder="Course and Year" data-error="Please enter your team name"
                value required />
              <input type="text" className="form-control half-form tel-input" id="id_teammate3_tel_number"
                name="teammate3_tel_number" placeholder="Phone Number" data-error="Please enter your team name"
                value required />
              <input type="text" className="form-control half-form alt-tel-input" id="id_teammate3_alter_tel_number"
                name="teammate3_alter_tel_number" placeholder="Alternate Phone No."
                data-error="Please enter your team name" value required />
              <select className="form-control half-form" name="teammate3_gender" id="id_teammate3_gender">
                <option className="form-control" selected disabled>Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Form
