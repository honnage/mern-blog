import * as React from "react";
import Footer from "./Footer/footer";
import Header from "./Header/header";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

import EditIcon from '@mui/icons-material/Edit';
import ForumIcon from '@mui/icons-material/Forum';

const actions = [
  { icon: <FileCopyIcon />, name: "โทรศัพท์" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function Layout({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />
      {children}

      <a className="btn-custom" >
        <Box sx={{ height: 320, flexGrow: 1 }}  color="secondary" >
          <SpeedDial
            ariaLabel="SpeedDial controlled open example"
            sx={{ position: "absolute", bottom: 10, right: 0 }}
            icon={<SpeedDialIcon />}
            // icon={<ForumIcon  openIcon={<EditIcon />} />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={handleClose}
              />
            ))}
          </SpeedDial>
        </Box>
      </a>

      <a href="#" className="back-to-top  d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short" />
      </a>

      <Footer />
    </>
  );
}
