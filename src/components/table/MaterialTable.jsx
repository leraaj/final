import React, { useState } from "react";
import { MaterialReactTable } from "material-react-table";
import Poppins from "../../assets/fonts/Poppins/Poppins-Regular.ttf";
import "./Table.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
const MaterialTable = ({
  columns,
  data,
  enableLoading,
  renderRowActions,
  renderTopToolbarCustomActions,
  enableColumnActions,
  enableHiding,
  enableDensityToggle,
  enableFullScreenToggle,
}) => {
  const theme = createTheme({
    components: {
      MuiTable: {
        styleOverrides: {
          root: {
            fontFamily: "Poppins",
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {},
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            // color: "black",
          },
          root: {
            // borderBottom: "1px solid #ccc", // Customize the border of table cells
          },
        },
      },
    },
  });
  return (
    <>
      <div className="internal-theme-font">
        <ThemeProvider theme={theme}>
          <MaterialReactTable
            columns={columns}
            data={data ?? []}
            enableDensityToggle={enableDensityToggle}
            enableHiding={enableHiding}
            state={{ isLoading: enableLoading }}
            enableColumnActions={enableColumnActions}
            enableFullScreenToggle={enableFullScreenToggle}
            positionActionsColumn="last"
            initialState={{ pagination: { pageSize: 5 } }}
            enableRowActions
            renderRowActions={renderRowActions}
            renderTopToolbarCustomActions={renderTopToolbarCustomActions}
            enableStickyHeader
            enableStickyFooter
            muiTableContainerProps={
              {
                // sx: { maxHeight: "350px" },
              }
            }
          />
        </ThemeProvider>
      </div>
    </>
  );
};

export default MaterialTable;
