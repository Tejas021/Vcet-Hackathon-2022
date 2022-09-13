import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import { addDoc,collection,db } from '../../firebase'



const Form = ({setSuccess}) => {

  const navigate = useNavigate()
  const [data, setData] = useState({
    PB1Name: "", PB1Abstract: "", PB1Tech: "", PB1Pref: "",
    PB2Name: "", PB2Abstract: "", PB2Tech: "", PB2Pref: "", PB3Name: "", PB3Abstract: "",
    PB3Tech: "", PB3Pref: "", TName: "", TLName: "", TLCollege: "", TLCourseYear: "",
    TLMail: "", TLPhone: "", TLAltPhone: "", TLGender: "", TM1Name: "", TM1College: "",
    TM1CourseYear: "", TM1Mail: "", TM1Phone: "", TM1AltPhone: "", TM1Gender: "",
    TM2Name: "", TM2College: "", TM2CourseYear: "", TM2Mail: "", TM2Phone: "",
    TM2AltPhone: "", TM2Gender: "", TM3Name: "", TM3College: "", TM3CourseYear: "",
    TM3Mail: "", TM3Phone: "", TM3AltPhone: "", TM3Gender: "",
  })
  const submitInfo = async (e) => {
    e.preventDefault();
    // console.log(data);
    const res = await addDoc(collection(db, "registrations"), {
      data: data,
    }).then(docRef => { return docRef.id });
    // console.log(res)
    if(res){
      setSuccess(true);
      navigate("/")

    }
  }

  return (
    <>
      <Navbar />
      <div className="form-main-container marginal">
        <h1 className="form-h1">Registration</h1>
        <hr className="form-hr" />
        <h3 className="form-h3">Problem Statement Selection</h3>
        <div className="problem-statement-container form-grid">
          <div className="problem1-container blur-container form-grid">
            <div className="form-heading">
              AI/ML
            </div><br />
            <select className="form-control" name="AI" id="" onChange={(e) => setData({ ...data, PB1Name: e.target.value })}>
              <option className="form-control" selected disabled>Problem Statement</option>
              <option className="form-control" value="System Vulnerability using AI/ML">System Vulnerability using AI/ML</option>
              <option className="form-control" value="Metadata-farmer assistance">Metadata-farmer assistance</option>
              <option className="form-control" value="Recommendation for career/resume building">Recommendation for career/resume building</option>
            </select>
            <textarea
              className="form-control" name="" id="" cols="" rows="" value={data.PB1Abstract} onChange={(e) => setData({ ...data, PB1Abstract: e.currentTarget.value })} required></textarea>
            <input type="text" name="" id="" className="form-control" placeholder="Technology Stack" value={data.PB1Tech} onChange={(e) => setData({ ...data, PB1Tech: e.currentTarget.value })} required />
            <select className="form-control " name="" id="">
              <option className="form-control" selected disabled>Preference</option>
              <option className="form-control" value="">1</option>
              <option className="form-control" value="">2</option>
              <option className="form-control" value="">3</option>


            </select>
          </div>
          <div className="problem2-container blur-container form-grid">
            <div className="form-heading">
              Web/App Devlopment
            </div><br />
            <select className="form-control "
              onChange={(e) => setData({ ...data, PB2Name: e.target.value })}
              name="" id="">
              <option className="form-control" selected disabled>Problem Statement</option>
              <option className="form-control" value="Testing tool for phone apps.">Testing tool for phone apps.</option>
              <option className="form-control" value="Bus Tracking System">Bus Tracking System</option>
              <option className="form-control" value="CRM for Business"> CRM for Business </option>
            </select>
            <textarea  className="form-control" name="" id="" cols="" rows="" value={data.PB2Abstract} onChange={(e) => setData({ ...data, PB2Abstract: e.currentTarget.value })} required></textarea>
            <input type="text" name="" id="" className="form-control" placeholder="Technology Stack" value={data.PB2Tech} onChange={(e) => setData({ ...data, PB2Tech: e.currentTarget.value })} required />
            <select className="form-control " name="" id="">
              <option className="form-control" selected disabled>Preference</option>
              <option className="form-control" value="">1</option>
              <option className="form-control" value="">2</option>
              <option className="form-control" value="">3</option>


            </select>
          </div>
          <div className="problem3-container blur-container form-grid">
            <div className="form-heading">
              Cyber Security
            </div><br />
            <select className="form-control "
              onChange={(e) => setData({ ...data, PB3Name: e.target.value })}
              name="" id="">
              <option className="form-control" selected disabled>Problem Statement</option>
              <option className="form-control" value="Call Tracking for VOIP">Call Tracking for VOIP</option>
              <option className="form-control" value="Network Security Scanner">Network Security Scanner</option>
              <option className="form-control" value="Email monitoring">Email monitoring</option>
            </select>
            <textarea className="form-control" name="" id="" cols="" rows="" value={data.PB3Abstract} onChange={(e) => setData({ ...data, PB3Abstract: e.currentTarget.value })} required></textarea>
            <input type="text" name="" id="" className="form-control" placeholder="Technology Stack" value={data.PB3Tech} onChange={(e) => setData({ ...data, PB3Tech: e.currentTarget.value })} required />
            <select className="form-control " name="" id="">
              <option className="form-control" selected disabled>Preference</option>
              <option className="form-control" value="">1</option>
              <option className="form-control" value="">2</option>
              <option className="form-control" value="">3</option>


            </select>
          </div>
        </div>
        <hr className="form-hr" /><br />
        <h3 className="form-h3">Team Details</h3>
        <div className="form-main-container form-grid">
          <div className="team-leader-container">
            <div className="details-container form-grid">
              <label className="form-heading" for="id_team_name">
                Team Name
                <span style={{ "color": "tomato" }}>*</span>
              </label>
              <input type="text" className="form-control" id="id_team_name" name="team_name" placeholder="Team Name"
                data-error="Please enter your name" value={data.TName} onChange={(e) => setData({ ...data, TName: e.currentTarget.value })} required />
              <label className="form-heading" for="id_team_name">
                Team Leader
                <span style={{ "color": "tomato" }}>*</span>
              </label>
              <input type="text" className="form-control" id="id_team_leader_name" name="team_leader_name"
                placeholder="Full Name" data-error="Please enter your team name" value={data.TLName} onChange={(e) => setData({ ...data, TLName: e.currentTarget.value })} required />

              <input type="text" className="form-control" id="id_team_leader_college_name" name="team_leader_college_name"
                placeholder="College Name" data-error="Please enter your team name" value={data.TLCollege} onChange={(e) => setData({ ...data, TLCollege: e.currentTarget.value })} required />

              <input type="email" className="form-control email-input" id="id_team_leader_email" name="team_leader_email"
                placeholder="Email" data-error="Please enter your team name" value={data.TLMail} onChange={(e) => setData({ ...data, TLMail: e.currentTarget.value })} required />

              <input type="text" className="form-control half-form course-year" id="id_team_leader_course_year"
                name="team_leader_course_year" placeholder="Course and Year"
                data-error="Please enter your team name" value={data.TLCourseYear} onChange={(e) => setData({ ...data, TLCourseYear: e.currentTarget.value })} required />
              <input type="text" className="form-control half-form tel-input" id="id_team_leader_tel_number"
                name="team_leader_tel_number" placeholder="Phone Number" data-error="Please enter your team name"
                value={data.TLPhone} onChange={(e) => setData({ ...data, TLPhone: e.currentTarget.value })} required />


              <input type="text" className="form-control half-form alt-tel-input" id="id_team_leader_alter_tel_number"
                name="team_leader_alter_tel_number" placeholder="Alternate Phone No."
                data-error="Please enter your team name" value={data.TLAltPhone} onChange={(e) => setData({ ...data, TLAltPhone: e.currentTarget.value })} required />
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
                placeholder="Full Name" data-error="Please enter your team name" value={data.TM1Name} onChange={(e) => setData({ ...data, TM1Name: e.currentTarget.value })} required />
              <input type="text" className="form-control" id="id_teammate1_college_name" name="teammate1_college_name"
                placeholder="College Name" data-error="Please enter your team name" value={data.TM1College} onChange={(e) => setData({ ...data, TM1College: e.currentTarget.value })} />
              <input type="email" className="form-control email-input" id="id_teammate1_email" name="teammate1_email"
                placeholder="Email" data-error="Please enter your team name" value={data.TLMail} onChange={(e) => setData({ ...data, TLMail: e.currentTarget.value })} />
              <input type="text" className="form-control half-form course-year" id="id_teammate1_course_year"
                name="teammate1_course_year" placeholder="Course and Year" data-error="Please enter your team name"
                value={data.TM1CourseYear} onChange={(e) => setData({ ...data, TM1CourseYear: e.currentTarget.value })} required />
              <input type="text" className="form-control half-form tel-input" id="id_teammate1_tel_number"
                name="teammate1_tel_number" placeholder="Phone Number" data-error="Please enter your team name"
                value={data.TLPhone} onChange={(e) => setData({ ...data, TLPhone: e.currentTarget.value })} required />
              <input type="text" className="form-control half-form alt-tel-input" id="id_teammate1_alter_tel_number"
                name="teammate1_alter_tel_number" placeholder="Alternate Phone No."
                data-error="Please enter your team name" value={data.TM1AltPhone} onChange={(e) => setData({ ...data, TM1AltPhone: e.currentTarget.value })} required />
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
                placeholder="Full Name" data-error="Please enter your team name" value={data.TM2Name} onChange={(e) => setData({ ...data, TM2Name: e.currentTarget.value })} required />
              <input type="text" className="form-control" id="id_teammate2_college_name" name="teammate2_college_name"
                placeholder="College Name" data-error="Please enter your team name" value={data.TM2College} onChange={(e) => setData({ ...data, TM2College: e.currentTarget.value })} required />
              <input type="email" className="form-control email-input" id="id_teammate2_email" name="teammate2_email"
                placeholder="Email" data-error="Please enter your team name" value={data.TM2Mail} onChange={(e) => setData({ ...data, TM2Mail: e.currentTarget.value })} required />
              <input type="text" className="form-control half-form course-year" id="id_teammate2_course_year"
                name="teammate2_course_year" placeholder="Course and Year" data-error="Please enter your team name"
                value={data.TM2CourseYear} onChange={(e) => setData({ ...data, TM2CourseYear: e.currentTarget.value })} required />
              <input type="text" className="form-control half-form tel-input" id="id_teammate2_tel_number"
                name="teammate2_tel_number" placeholder="Phone Number" data-error="Please enter your team name"
                value={data.TM2Phone} onChange={(e) => setData({ ...data, TM2Phone: e.currentTarget.value })} required />
              <input type="text" className="form-control half-form alt-tel-input" id="id_teammate2_alter_tel_number"
                name="teammate2_alter_tel_number" placeholder="Alternate Phone No."
                data-error="Please enter your team name" value={data.TM2AltPhone} onChange={(e) => setData({ ...data, TM2AltPhone: e.currentTarget.value })} required />
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
                placeholder="Full Name" data-error="Please enter your team name" value={data.TM3Name} onChange={(e) => setData({ ...data, TM3Name: e.currentTarget.value })} required />
              <input type="text" className="form-control" id="id_teammate3_college_name" name="teammate3_college_name"
                placeholder="College Name" data-error="Please enter your team name" value={data.TM3College} onChange={(e) => setData({ ...data, TM3College: e.currentTarget.value })} required />
              <input type="email" className="form-control email-input" id="id_teammate3_email" name="teammate3_email"
                placeholder="Email" data-error="Please enter your team name" value={data.TM3Mail} onChange={(e) => setData({ ...data, TM3Mail: e.currentTarget.value })} required />
              <input type="text" className="form-control half-form course-year" id="id_teammate3_course_year"
                name="teammate3_course_year" placeholder="Course and Year" data-error="Please enter your team name"
                value={data.TM3CourseYear} onChange={(e) => setData({ ...data, TM3CourseYear: e.currentTarget.value })} required />
              <input type="text" className="form-control half-form tel-input" id="id_teammate3_tel_number"
                name="teammate3_tel_number" placeholder="Phone Number" data-error="Please enter your team name"
                value={data.TM3Phone} onChange={(e) => setData({ ...data, TM3Phone: e.currentTarget.value })} required />
              <input type="text" className="form-control half-form alt-tel-input" id="id_teammate3_alter_tel_number"
                name="teammate3_alter_tel_number" placeholder="Alternate Phone No."
                data-error="Please enter your team name" value={data.TM3AltPhone} onChange={(e) => setData({ ...data, TM3AltPhone: e.currentTarget.value })} required />
              <select className="form-control half-form" name="teammate3_gender" id="id_teammate3_gender">
                <option className="form-control" selected disabled>Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
          </div>
        </div>
        <div style={{textAlign:'center'}}>
        <button className={`btn bgPurple text-light`} type="submit" onClick={(e) => submitInfo(e)}>Submit</button>
        </div>
        
      </div>
    </>
  )
}

export default Form
