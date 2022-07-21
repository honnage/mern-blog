import React, { useState } from 'react';
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import CloseIcon from '@mui/icons-material/Close';
import ForumIcon from '@mui/icons-material/Forum';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const actions = [
    { icon: <FacebookIcon />, name: "FACEBOOK", bgcolor: "#0353a4", bgcollorhover: '#006daa' },
    { icon: <PhoneIcon />, name: "โทรศัพท์", bgcolor: "#f8961e", bgcollorhover: '#f9c74f' },
    { icon: "L", name: "LINE", bgcolor: "#3e8914", bgcollorhover: '#3da35d' },
];

export default function SpeedDialMenu() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [showModal, setModalShow] = useState(false);
    const ModalClose = () => setModalShow(false);
    const ModalShow = () => setModalShow(true);

    return (
        <>
            <a className="btn-custom" >
                <Box sx={{ height: 320, flexGrow: 1 }} color="secondary" >
                    <SpeedDial
                        ariaLabel="SpeedDial controlled open example"
                        sx={{ position: "absolute", bottom: 10, right: 0 }}
                        // icon={<SpeedDialIcon />}
                        icon={<SpeedDialIcon icon={<ForumIcon />} openIcon={<CloseIcon />} />}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={open}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={ModalShow}
                                FabProps={{
                                    sx: {
                                        color: '#ffffff',
                                        bgcolor: `${action.bgcolor}`,
                                        '&:hover': {
                                            bgcolor: `${action.bgcollorhover}`,
                                        }
                                    }
                                }}
                            />
                        ))}
                    </SpeedDial>
                </Box>
            </a>

            <Modal show={showModal} onHide={ModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ModalClose}>
                        testhandleClose
                    </Button>
                    <Button variant="primary" onClick={ModalClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
