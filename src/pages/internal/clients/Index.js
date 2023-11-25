import React, { useEffect, useMemo, useState } from "react";
import SimpleButton from "../../../components/buttons/SimpleButton";
import MaterialTable from "../../../components/table/MaterialTable";
import SimpleContainer from "../../../components/containers/SimpleContainer";
import ViewModal from "./ViewModal";
import HistoryModal from "./HistoryModal";
import { Box } from "@mui/material";
import ViewIcon from "@mui/icons-material/Visibility";
import HistoryIcon from "@mui/icons-material/HistoryToggleOff";
const Index = () => {
  const apiEndpoint = "http://localhost:3001/api/";
  const [tableUsers, setTableUsers] = useState([]);
  const [userData, setUserData] = useState([]);
  const [enableLoading, setEnableLoading] = useState(true);
  const [applicantFilter, setApplicantFilter] = useState(3);
  const displayStatusFilter = [
    { value: 0, label: "All users" },
    { value: 1, label: "Pending" },
    { value: 2, label: "For review" },
    { value: 3, label: "Accepted" },
    { value: 4, label: "Rejected" },
  ];
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
          row.applicationStatus === 1
            ? "Pending"
            : row.applicationStatus === 2
            ? "For review"
            : row.applicationStatus === 3
            ? "Accepted"
            : row.applicationStatus === 4
            ? "Rejected"
            : "No value", //access nested data with dot notation
        header: "Application Status",
      },
    ],
    []
  );
  async function getTableData(applicantFilter) {
    try {
      const response = await fetch(apiEndpoint + "users"); // Replace with your server URL
      const data = await response.json();
      if (response.ok) {
        // Filter the data to get items with position equal to 3
        console.log(applicantFilter);
        const filteredData = data.filter(
          (item) =>
            item.position === 2 && item.applicationStatus == applicantFilter
        );
        const allFilter = data.filter((item) => item.position === 2);
        if (applicantFilter == 0) {
          setTableUsers(allFilter);
        } else {
          setTableUsers(filteredData);
        }
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
    getTableData(applicantFilter);
  }, []);

  // View Modal
  const [viewModal, setViewModal] = useState(false);
  const viewModalHide = () => {
    setViewModal(false);
  };
  const viewModalShow = () => {
    setViewModal(true);
  };
  // Histroy Modal
  const [historyModal, setHistoryModal] = useState(false);
  const historyModalHide = () => {
    setHistoryModal(false);
  };
  const historyModalShow = () => {
    setHistoryModal(true);
  };
  return (
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
                    viewModalShow();
                    setUserData(row.original);
                  }}
                  label={<ViewIcon fontSize="small" />}
                />
                <SimpleButton
                  size={"sm"}
                  color={"light"}
                  classes={"rounded-pill"}
                  onClick={() => {
                    historyModalShow();
                    setUserData(row.original);
                  }}
                  label={<HistoryIcon fontSize="small" />}
                />
              </Box>
            )}
            renderTopToolbarCustomActions={({ table }) => {
              return (
                <>
                  <div className="col-auto">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={applicantFilter}
                      onChange={(e) => {
                        setApplicantFilter(e.target.value);
                        getTableData(e.target.value);
                      }}>
                      {displayStatusFilter.map((option) => {
                        return (
                          <option value={option.value}>{option.label}</option>
                        );
                      })}
                    </select>
                  </div>
                </>
              );
            }}
          />
          <ViewModal
            show={viewModal}
            onHide={viewModalHide}
            data={userData}
            refreshData={getTableData}
          />
          <HistoryModal
            show={historyModal}
            onHide={historyModalHide}
            data={userData}
            refreshData={getTableData}
          />
        </>
      }
    />
  );
};

export default Index;
