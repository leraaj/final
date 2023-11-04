import React, { useRef } from "react";
import keys from "../../../assets/gdrive/darkshot-productions-014bb438e855.json";
const Gdrive = () => {
  const fileInputRef = useRef(null);
  const handleFileUpload = async () => {
    const files = fileInputRef.current.files;
    if (files.length > 0) {
      const formData = new formData();

      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
      try {
        const response = await fetch("http://localhost:3001/upload");
      } catch (error) {
        console.log(error);
      }
    } else {
    }
  };
  return (
    <div className="p-2 col-5">
      <h6>Upload multiple FIles to Google Drive</h6>
      <div className="row mx-0 g-2">
        <div className="input-group">
          <input
            type="file"
            className="form-control"
            multiple
            ref={fileInputRef}
          />
          <button className="btn btn-secondary" onClick={handleFileUpload}>
            Upload Files
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gdrive;
