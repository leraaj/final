import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import placholder from "../../../assets/images/placeholder/Img_placeholder.jpg";
import SimpleHeader from "../../../components/textHeaders/SimpleHeader";
import ModalHeader from "../../../components/textHeaders/ModalHeader";
const ViewModal = ({ show, onHide, data, refreshData }) => {
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
    if (data) {
      setNameValue(data.fullName);
      setContactValue(data.contact);
      setEmailValue(data.email);
      setUsernameValue(data.username);
      setPasswordValue(data.password);
      setSkillsValue(data.skills);
      setPrefferedSkillsValue(data.prefferedSkills);
    }
  }, [data]);
  return (
    <>
      {/* Modal View User */}
      <Modal show={show} fullscreen={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title className="internal-theme-font">
            <ModalHeader label={"applicant details"} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mx-0">
            <div className="col-12 col-lg">
              <div className="row mx-0 p-0">
                <SimpleHeader label={"user information"} />
                <div className="row mx-0 p-0 g-2 my-0 py-0 mb-3 internal-theme-font">
                  <div class="input-group col-12">
                    <span class="input-group-text" id="basic-addon1">
                      Full Name
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={nameValue}
                      readOnly
                    />
                  </div>
                  <div class="input-group col-12 col-lg">
                    <span class="input-group-text" id="basic-addon1">
                      Contact Number
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={contactValue}
                      readOnly
                    />
                  </div>
                  <div class="input-group col-12 col-lg">
                    <span class="input-group-text" id="basic-addon1">
                      Email
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={emailValue}
                      readOnly
                    />
                  </div>
                </div>
                <SimpleHeader label={"media files"} />
                <div className="row mx-0 p-0 g-2 my-0 py-0 mb-3 internal-theme-font">
                  <div className="col-auto">
                    <div className="input-group">
                      <span className="input-group-text">Resume/CV</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={`example_resume.docx`}
                        disabled
                      />
                      <a
                        // Link = https://drive.google.com/uc?export=download&id=
                        href="https://docs.google.com/document/d/1HUt8MQOOsac8rAlxq0c4DVAl7JQnk0wr/export?format=docx"
                        target="_blank"
                        rel="noopener"
                        className="btn btn-secondary">
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg">
              <div className="row mx-0">
                <SimpleHeader label={"portfolio"} />
                <div
                  className="row m-0 p-0 mb-3 vstack overflow-x-auto col-12"
                  style={{ height: "120px" }}>
                  {Array(20)
                    .fill()
                    .map((_) => (
                      <div className="col-auto m-0 p-0">
                        <img
                          src={placholder}
                          className="img-fluid"
                          alt="Placeholder"
                          style={{ height: "100px" }}
                        />
                      </div>
                    ))}
                </div>
                <span className="modal-body-title">skills</span>
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
                <SimpleHeader label={"preffered positions"} />
                <div className="d-flex flex-wrap gap-2 mx-0 py-0 mb-3 internal-theme-font">
                  {displayPrefferedSkills &&
                  displayPrefferedSkills.length > 0 ? (
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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewModal;
