import React from 'react'

export default function Form2() {
    return (
        <>
            <div class="form-main-container form-grid">
                <div class="team-leader-container">
                    <div class="details-container form-grid">
                        <label class="form-heading" for="id_team_name">
                            Team Name
                            <span style="color:tomato">*</span>
                        </label>
                        <input type="text" class="form-control" id="id_team_name" name="team_name" placeholder="Team Name"
                            data-error="Please enter your name" value required />
                        <label class="form-heading" for="id_team_name">
                            Team Leader
                            <span style="color:tomato">*</span>
                        </label>
                        <input type="text" class="form-control" id="id_team_leader_name" name="team_leader_name"
                            placeholder="Full Name" data-error="Please enter your team name" value required />

                        <input type="text" class="form-control" id="id_team_leader_college_name" name="team_leader_college_name"
                            placeholder="College Name" data-error="Please enter your team name" value required />

                        <input type="email" class="form-control email-input" id="id_team_leader_email" name="team_leader_email"
                            placeholder="Email" data-error="Please enter your team name" value required />

                        <input type="text" class="form-control half-form course-year" id="id_team_leader_course_year"
                            name="team_leader_course_year" placeholder="Course and Year"
                            data-error="Please enter your team name" value required />
                        <input type="text" class="form-control half-form tel-input" id="id_team_leader_tel_number"
                            name="team_leader_tel_number" placeholder="Phone Number" data-error="Please enter your team name"
                            value required />


                        <input type="text" class="form-control half-form alt-tel-input" id="id_team_leader_alter_tel_number"
                            name="team_leader_alter_tel_number" placeholder="Alternate Phone No."
                            data-error="Please enter your team name" value required />
                        <select class="form-control half-form" name="team_leader_gender" id="id_team_leader_gender">
                            <option class="form-control" selected disabled>Gender</option>
                            <option class="form-control" value="M">Male</option>
                            <option class="form-control" value="F">Female</option>
                        </select>
                    </div>
                </div>
                <div class="team-member1-container">
                    <div class="details-container form-grid">
                        <label class="form-heading" for="id_teammate1_name">
                            Teammate 1
                        </label>
                        <input type="text" class="form-control" id="id_teammate1_name" name="teammate1_name"
                            placeholder="Full Name" data-error="Please enter your team name" value required />
                        <input type="text" class="form-control" id="id_teammate1_college_name" name="teammate1_college_name"
                            placeholder="College Name" data-error="Please enter your team name" value required />
                        <input type="email" class="form-control email-input" id="id_teammate1_email" name="teammate1_email"
                            placeholder="Email" data-error="Please enter your team name" value required />
                        <input type="text" class="form-control half-form course-year" id="id_teammate1_course_year"
                            name="teammate1_course_year" placeholder="Course and Year" data-error="Please enter your team name"
                            value required />
                        <input type="text" class="form-control half-form tel-input" id="id_teammate1_tel_number"
                            name="teammate1_tel_number" placeholder="Phone Number" data-error="Please enter your team name"
                            value required />
                        <input type="text" class="form-control half-form alt-tel-input" id="id_teammate1_alter_tel_number"
                            name="teammate1_alter_tel_number" placeholder="Alternate Phone No."
                            data-error="Please enter your team name" value required />
                        <select class="form-control half-form" name="teammate1_gender" id="id_teammate1_gender">
                            <option selected disabled>Gender</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                </div>
                <div class="team-member2-container">
                    <div class="details-container form-grid">
                        <label class="form-heading" for="id_teammate2_name">
                            Teammate 2
                        </label>
                        <input type="text" class="form-control" id="id_teammate2_name" name="teammate2_name"
                            placeholder="Full Name" data-error="Please enter your team name" value required />
                        <input type="text" class="form-control" id="id_teammate2_college_name" name="teammate2_college_name"
                            placeholder="College Name" data-error="Please enter your team name" value required />
                        <input type="email" class="form-control email-input" id="id_teammate2_email" name="teammate2_email"
                            placeholder="Email" data-error="Please enter your team name" value required />
                        <input type="text" class="form-control half-form course-year" id="id_teammate2_course_year"
                            name="teammate2_course_year" placeholder="Course and Year" data-error="Please enter your team name"
                            value required />
                        <input type="text" class="form-control half-form tel-input" id="id_teammate2_tel_number"
                            name="teammate2_tel_number" placeholder="Phone Number" data-error="Please enter your team name"
                            value required />
                        <input type="text" class="form-control half-form alt-tel-input" id="id_teammate2_alter_tel_number"
                            name="teammate2_alter_tel_number" placeholder="Alternate Phone No."
                            data-error="Please enter your team name" value required />
                        <select class="form-control half-form" name="teammate2_gender" id="id_teammate2_gender">
                            <option selected disabled>Gender</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                </div>
                <div class="team-member3-container">
                    <div class="details-container form-grid">
                        <label class="form-heading" for="id_teammate3_name">
                            Teammate 3
                        </label>
                        <input type="text" class="form-control" id="id_teammate3_name" name="teammate3_name"
                            placeholder="Full Name" data-error="Please enter your team name" value required />
                        <input type="text" class="form-control" id="id_teammate3_college_name" name="teammate3_college_name"
                            placeholder="College Name" data-error="Please enter your team name" value required />
                        <input type="email" class="form-control email-input" id="id_teammate3_email" name="teammate3_email"
                            placeholder="Email" data-error="Please enter your team name" value required />
                        <input type="text" class="form-control half-form course-year" id="id_teammate3_course_year"
                            name="teammate3_course_year" placeholder="Course and Year" data-error="Please enter your team name"
                            value required />
                        <input type="text" class="form-control half-form tel-input" id="id_teammate3_tel_number"
                            name="teammate3_tel_number" placeholder="Phone Number" data-error="Please enter your team name"
                            value required />
                        <input type="text" class="form-control half-form alt-tel-input" id="id_teammate3_alter_tel_number"
                            name="teammate3_alter_tel_number" placeholder="Alternate Phone No."
                            data-error="Please enter your team name" value required />
                        <select class="form-control half-form" name="teammate3_gender" id="id_teammate3_gender">
                            <option class="form-control" selected disabled>Gender</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}