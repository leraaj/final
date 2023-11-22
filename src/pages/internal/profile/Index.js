import React, { useState, useEffect } from "react";
import placeholder from "../../../assets/images/placeholder/Img_placeholder.jpg";
const Index = () => {
  const updateUserAPI = `http://localhost:3001/api/user/`;
  const [nameValue, setNameValue] = useState(null);
  const [contactValue, setContactValue] = useState(null);
  const [emailValue, setEmailValue] = useState(null);
  const [usernameValue, setUsernameValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);
  const [positionValue, setPositionValue] = useState(null);
  const [skillsValue, setSkillsValue] = useState(null);
  const [prefferedSkillsValue, setPrefferedSkillsValue] = useState(null);
  const jobs = [
    // # DESIGN & CREATIVE
    { id: 1, job: " Graphic Designers" },
    { id: 2, job: " Logo Designers" },
    { id: 3, job: " Video Post Editing Specialists" },
    { id: 4, job: " Sound Editors" },
    { id: 5, job: " Video Producers" },
    { id: 6, job: " Motion Graphics Designers" },
    { id: 7, job: " 2D Animators" },
    { id: 8, job: " Video Editors" },
    { id: 9, job: " Voice-Over Artists" },
    { id: 10, job: " Illustrators" },
    { id: 11, job: " Brand Identity & Guideline Freelancers" },
    // # SALES AND MARKETERS
    { id: 12, job: " Social Media Marketers" },
    { id: 13, job: " SEO Expert" },
    { id: 14, job: " Social Media Managers" },
    { id: 15, job: " Internet Marketers" },
    { id: 16, job: " Marketing Strategists" },
    { id: 17, job: " Campaign Manager" },
    { id: 18, job: " Influencer Marketers" },
    // # WRITING AND TRANSLATION
    { id: 19, job: " Article Writers" },
    { id: 20, job: " Content Writers" },
    { id: 21, job: " English Specialists" },
    { id: 22, job: " Writers" },
    { id: 23, job: " Researchers" },
    { id: 24, job: " Social Media Content Freelancers" },
  ];

  const displaySkills =
    skillsValue && skillsValue.length > 0
      ? skillsValue.map((id) => {
          const job = jobs.find((job) => job.id === id);
          return job ? job.job : null;
        })
      : null;

  const displayPrefferedSkills =
    prefferedSkillsValue && prefferedSkillsValue.length > 0
      ? prefferedSkillsValue.map((id) => {
          const job = jobs.find((job) => job.id === id);
          return job ? job.job : null;
        })
      : null;

  useEffect(() => {
    setNameValue(null);
    setContactValue(null);
    setEmailValue(null);
    setUsernameValue(null);
    setPasswordValue(null);
    setSkillsValue([]);
    setPrefferedSkillsValue([]);
  }, []);
  const columns = "col-12 col-sm-12 col-md col-lg";
  const sections = "col-12 col-sm-12 col-md col-lg mb-3";
  const title =
    "col-12 px-2 border-5 border-dark text-uppercase fw-bold h4 external-theme-font border-start";
  return (
    <>
      <div className="row mx-0 p-0">
        <div className={columns}>
          <div className={sections}>
            <span className={title}>User Information</span>
            <div className="col-12 row m-0 p-0 g-3">
              <div className="input-group col-12">
                <span className="input-group-text">Fullname</span>
                <input type="text" className="form-control" readOnly />
              </div>
            </div>
            <div className="col-12 row m-0 p-0 g-3">
              <div className="input-group col-12 col-sm">
                <span className="input-group-text">Email</span>
                <input type="text" className="form-control" readOnly />
              </div>
              <div className="input-group col-12 col-sm">
                <span className="input-group-text">Contact</span>
                <input type="text" className="form-control" readOnly />
              </div>
            </div>
            <div className="col-12 row m-0 p-0 g-3">
              <div className="input-group col-12 col-sm">
                <span className="input-group-text">Username</span>
                <input type="text" className="form-control" readOnly />
              </div>
              <div className="input-group col-12 col-sm">
                <span className="input-group-text">Password</span>
                <input type="text" className="form-control" readOnly />
              </div>
            </div>
          </div>
          <div className={sections}>
            <span className={title}>Media Files</span>
            <div className="input-group col mt-3 p-0 g-3">
              <div className="col-auto">
                <span className="form-label">Resume</span>
                <span className="input-group">
                  <input type="file" className="form-control " disabled />
                  <button className=" btn btn-secondary">Download</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={columns}>
          <div className={sections}>
            <span className={title}>Portfolio</span>
            <div
              className="row m-0 p-0 mb-3 vstack overflow-x-auto col-12"
              style={{ height: "120px" }}>
              {Array(20)
                .fill()
                .map((_) => (
                  <div className="col-auto m-0 p-0">
                    <img
                      src={placeholder}
                      className="img-fluid"
                      alt="Placeholder"
                      style={{ height: "100px" }}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className={sections}>
            <span className={title}>Skills</span>

            <div className="d-flex flex-wrap gap-2 mx-0 py-0 mb-3 internal-theme-font">
              {displaySkills && displaySkills.length > 0 ? (
                displaySkills.map((skill, index) => (
                  <button
                    key={index}
                    className="btn btn-dark rounded-pill"
                    disabled>
                    {skill}
                  </button>
                ))
              ) : (
                <span>No skills available</span>
              )}
            </div>
          </div>
          <div className={sections}>
            <span className={title}>Preffered Positions</span>
            <div className="d-flex flex-wrap gap-2 mx-0 py-0 mb-3 internal-theme-font">
              {displayPrefferedSkills && displayPrefferedSkills.length > 0 ? (
                displayPrefferedSkills.map((skill, index) => (
                  <button
                    key={index}
                    className="btn btn-dark rounded-pill"
                    disabled>
                    {skill}
                  </button>
                ))
              ) : (
                <span>No preffered skills available</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
