import React, { useState, useMemo, useEffect } from "react";
import SimpleContainer from "../../../components/containers/SimpleContainer";
import MaterialTable from "../../../components/table/MaterialTable";
import Box from "@mui/material/Box";
import SimpleButton from "../../../components/buttons/SimpleButton";
import CreateForm from "./CreateForm";
import UpdateForm from "./UpdateForm";
import DeleteForm from "./DeleteForm";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const Accounts = () => {
  const apiEndpoint = "http://localhost:3001/api/";
  const [tableUsers, setTableUsers] = useState([]);
  const [userData, setUserData] = useState([]);
  const [enableLoading, setEnableLoading] = useState(true);
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => row.fullName, //access nested data with dot notation
        header: "Full Name",
      },
      {
        accessorFn: (row) => row.contact, //access nested data with dot notation
        header: "Contact number",
      },
      {
        accessorFn: (row) => row.email, //access nested data with dot notation
        header: "Email",
      },
      {
        accessorFn: (row) => row.username, //access nested data with dot notation
        header: "Username",
      },
      {
        accessorFn: (row) =>
          row.position === 1
            ? "Admin"
            : row.position === 2
            ? "Client"
            : "Applicant",
        header: "Position",
      },
    ],
    []
  );
  async function getTableData() {
    try {
      const response = await fetch(apiEndpoint + "users"); // Replace with your server URL
      const data = await response.json();
      if (response.ok) {
        setTableUsers(data);
        setEnableLoading(false);
      } else {
        // message toast here
        setEnableLoading(true);
      }
    } catch (error) {
      // message toast here
      console.error("Error fetching users:", error);
    }
  }
  useEffect(() => {
    getTableData();
  }, []);
  // Create Modal
  const [createModal, setCreateModal] = useState(false);
  const createModalHide = () => {
    setCreateModal(false);
  };
  const createModalShow = () => {
    setCreateModal(true);
  };
  // Update Modal
  const [updateModal, setUpdateModal] = useState(false);
  const updateModalHide = () => {
    setUpdateModal(false);
  };
  const updateModalShow = () => {
    setUpdateModal(true);
  };
  // Delete Modal
  const [deleteModal, setDeleteModal] = useState(false);
  const deleteModalHide = () => {
    setDeleteModal(false);
  };
  const deleteModalShow = () => {
    setDeleteModal(true);
  };
  return (
    <>
      <SimpleContainer
        mainSection={
          <>
            <MaterialTable
              columns={columns}
              data={tableUsers}
              enableLoading={enableLoading}
              enableColumnActions={false}
              enableHiding={true}
              enableDensityToggle={true}
              enableFullScreenToggle={false}
              renderRowActions={({ row }) => (
                <Box sx={{ display: "flex", gap: "0.5rem" }}>
                  {/* <button>{row.original.position}</button> */}
                  <SimpleButton
                    size={"sm"}
                    color={"light"}
                    classes={"rounded-pill"}
                    onClick={() => {
                      updateModalShow();
                      setUserData(row.original);
                    }}
                    label={<EditIcon fontSize="small" />}
                  />
                  <SimpleButton
                    size={"sm"}
                    color={"light"}
                    classes={"rounded-pill"}
                    onClick={() => {
                      deleteModalShow();
                      setUserData(row.original);
                    }}
                    label={<DeleteIcon fontSize="small" />}
                  />
                </Box>
              )}
              renderTopToolbarCustomActions={({ table }) => {
                return (
                  <>
                    <SimpleButton
                      color={"secondary"}
                      size={"sm"}
                      classes={" rounded-0 "}
                      onClick={() => {
                        createModalShow();
                        setUserData([]);
                      }}
                      label={"Create User"}
                    />
                  </>
                );
              }}
            />

            <CreateForm
              show={createModal}
              onHide={createModalHide}
              data={userData}
              refreshData={getTableData}
            />
            <UpdateForm
              show={updateModal}
              onHide={updateModalHide}
              data={userData}
              refreshData={getTableData}
            />
            <DeleteForm
              show={deleteModal}
              onHide={deleteModalHide}
              data={userData}
              refreshData={getTableData}
            />
          </>
        }
      />
    </>
  );
};

export default Accounts;
