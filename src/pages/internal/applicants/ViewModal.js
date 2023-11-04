import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import placholder from "../../../assets/images/placeholder/Img_placeholder.jpg";
const ViewModal = ({ show, onHide, data, refreshData }) => {
  const updateUserAPI = `http://localhost:3001/api/user/`;
  const [nameValue, setNameValue] = useState(null);
  const [contactValue, setContactValue] = useState(null);
  const [emailValue, setEmailValue] = useState(null);
  const [usernameValue, setUsernameValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);
  const [positionValue, setPositionValue] = useState(null);
  useEffect(() => {
    if (data) {
      setNameValue(data.fullName);
      setContactValue(data.contact);
      setEmailValue(data.email);
      setUsernameValue(data.username);
      setPasswordValue(data.password);
    }
  }, [data]);
  return (
    <>
      {/* Modal View User */}
      <Modal show={show} fullscreen={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title className="internal-theme-font">
            <span className="fw-bold text-uppercase h4 m-0 p-0">
              Applicant Details
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mx-0">
            <div className="col-12 col-lg">
              <div className="row mx-0 p-0">
                <span className="modal-body-title">user information</span>
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
                <span className="modal-body-title">media files</span>
                <div className="row mx-0 p-0 g-2 my-0 py-0 mb-3 internal-theme-font">
                  <div className="col-auto">
                    <div className="input-group">
                      <span className="input-group-text">Resume/CV</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={`${usernameValue}_resume.docx`}
                        disabled
                      />
                      <a
                        // Link = https://drive.google.com/uc?export=download&id=
                        // File ID = 1RmreDGAGO2_S7EAha4nc4hmsJrwOhMuM
                        href="https://drive.google.com/uc?export=download&id=1RmreDGAGO2_S7EAha4nc4hmsJrwOhMuM"
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
                <span className="modal-body-title">portfolio</span>
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
                <span className="modal-body-title">preffered positions</span>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewModal;
