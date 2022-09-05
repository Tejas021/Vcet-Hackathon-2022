import React from "react";
import "./Faq.css"
function Faq() {
  return (
    <div className="mb-5 text-light">
      <i className="fas fa-bell-slash"></i>
      <div className="container mt-5 ">
        <h1 className="text-center">FAQ</h1>
        <div className="accordion mt-5" id="accordionFlushExample">
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12  ">
              <div className=" accordion-item border border-dark bg-light">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What is the mode of the Hackathon?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-light">
                    VCET Hackathon’21 Reloaded will be held online.
                  </div>
                </div>
              </div>

              <div className="accordion-item border  border-dark">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Who can participate?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-light">
                    Anyone is welcome to participate in this event. While
                    experienced coding and programming is a huge plus, teams
                    will also need people with strong presentation skills and
                    unique ideas.
                  </div>
                </div>
              </div>

              <div className="accordion-item border border-dark">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Can a pass out student participate in the event?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-light">
                    No, every member of the team must be a current student of a
                    university or a college. (Members from different colleges
                    allowed).
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-dark">
                <h2 className="accordion-header " id="flush-headingfour">
                  <button
                    className="accordion-button collapsed text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsefour"
                    aria-expanded="false"
                    aria-controls="flush-collapsefour"
                  >
                    What are the Problems Statements that can be selected?
                  </button>
                </h2>
                <div
                  id="flush-collapsefour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingfour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-light">
                    Problem Statements will be provided from our end. You have
                    to submit abstracts for all 5 Problem Statements, out of
                    which 1 will be allocated.
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-dark">
                <h2 className="accordion-header" id="flush-headingfive">
                  <button
                    className="accordion-button collapsed text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsefive"
                    aria-expanded="false"
                    aria-controls="flush-collapsefive"
                  >
                    How much is the entry fee and the last date for
                    registration?
                  </button>
                </h2>
                <div
                  id="flush-collapsefive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingfive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-light">
                    Entry fee is 500/- per team and the last date of
                    registration is September 19, 2021.
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-dark">
                <h2 className="accordion-header" id="flush-headingSix">
                  <button
                    className="accordion-button collapsed text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    Which payment methods do you accept?
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-light">
                    Which payment methods do you accept?
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 ">
              <div className="accordion-item border border-dark">
                <h2 className="accordion-header" id="flush-headingSeven">
                  <button
                    className="accordion-button collapsed text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSeven"
                    aria-expanded="false"
                    aria-controls="flush-collapseSeven"
                  >
                    Will a dataset be provided?
                  </button>
                </h2>
                <div
                  id="flush-collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingSeven"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-light">
                    No, the data has to be collected on your own.
                  </div>
                </div>
              </div>

              <div className="accordion-item border border-dark">
                <h2 className="accordion-header" id="flush-headingEight">
                  <button
                    className="accordion-button collapsed text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseEight"
                    aria-expanded="false"
                    aria-controls="flush-collapseEight"
                  >
                    What is the selection criteria?
                  </button>
                </h2>
                <div
                  id="flush-collapseEight"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingEight"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-light">
                    Innovation, Technology, Completion & Business Values are
                    some of the criterias.
                  </div>
                </div>
              </div>

              <div className="accordion-item border border-dark">
                <h2 className="accordion-header" id="flush-headingNine">
                  <button
                    className="accordion-button collapsed text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseNine"
                    aria-expanded="false"
                    aria-controls="flush-collapseNine"
                  >
                    On which platform will the event be conducted?
                  </button>
                </h2>
                <div
                  id="flush-collapseNine"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingNine"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-light">
                    Google Meet, YouTube live streaming and Discord.
                  </div>
                </div>
              </div>

              <div className="accordion-item border border-dark">
                <h2 className="accordion-header" id="flush-headingTen">
                  <button
                    className="accordion-button collapsed text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTen"
                    aria-expanded="false"
                    aria-controls="flush-collapseTen"
                  >
                    When and where will the final results be announced?
                  </button>
                </h2>
                <div
                  id="flush-collapseTen"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTen"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-light">
                    Results will be announced at the end of the Final Pitching
                    round. (Google Meet & YouTube live stream)
                  </div>
                </div>
              </div>

              <div className="accordion-item border border-dark">
                <h2 className="accordion-header" id="flush-headingEleven">
                  <button
                    className="accordion-button collapsed text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseEleven"
                    aria-expanded="false"
                    aria-controls="flush-collapseEleven"
                  >
                    What is the cancellation policy like?
                  </button>
                </h2>
                <div
                  id="flush-collapseEleven"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingEleven"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-light">
                    There is no cancellation policy and payment once done will
                    not be refunded.
                  </div>
                </div>
              </div>

              <div className="accordion-item border border-dark">
                <h2 className="accordion-header" id="flush-headingTwelve">
                  <button
                    className="accordion-button button-light collapsed text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwelve"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwelve"
                  >
                    Having another questions that is not answered in the FAQs?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwelve"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwelve"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-light">
                    You can contact us via mail or drop your query in the
                    comment sections on our Social Media handles.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
