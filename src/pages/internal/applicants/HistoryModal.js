import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import SimpleButton from "../../../components/buttons/SimpleButton";
import ModalHeader from "../../../components/textHeaders/ModalHeader";
const HistoryModal = ({ show, onHide, data, refreshData }) => {
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
      setPositionValue(data.position);
    }
  }, [data]);
  // Client-Side field validation
  const validField = (e) => {
    const inputClass =
      e.target.value === ""
        ? "form-control is-invalid"
        : "form-control is-valid";
    e.target.className = inputClass;
  };
  // VARIABLE HANDLERS
  const handleName = (e) => {
    validField(e);
    setNameValue(e.target.value);
  };
  const handleContact = (e) => {
    validField(e);
    setContactValue(e.target.value);
  };
  const handleEmail = (e) => {
    validField(e);
    setEmailValue(e.target.value);
  };
  const handleUserName = (e) => {
    validField(e);
    setUsernameValue(e.target.value);
  };
  const handlePassword = (e) => {
    validField(e);
    setPasswordValue(e.target.value);
  };
  const handlePosition = (e) => {
    validField(e);
    setPositionValue(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(updateUserAPI + data._id, {
      method: "put",
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: nameValue,
        contact: contactValue,
        email: emailValue,
        username: usernameValue,
        password: passwordValue,
        position: positionValue,
      }),
    })
      .then(async (response) => {
        const data = await response.json();
        console.log("Updated User:\n");
        console.log(data);
        onHide();
        refreshData();
      })
      .catch((error) => {
        alert("No user updated");
        console.log({ error: error.message });
      });
  };
  const positions = [
    {
      pos_id: 1,
      name: "Admin",
    },
    {
      pos_id: 2,
      name: "Client",
    },
    {
      pos_id: 3,
      name: "Applicant",
    },
  ];
  return (
    <>
      {/* Modal History of User */}
      <Modal
        show={show}
        fullscreen={true}
        onHide={onHide}
        className="internal-theme-font">
        <Modal.Header closeButton>
          <Modal.Title>
            <ModalHeader label={"Job History"} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Applicants previous history</Modal.Body>
      </Modal>
    </>
  );
};

export default HistoryModal;
