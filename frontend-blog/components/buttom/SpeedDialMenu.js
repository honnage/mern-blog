import React, { useState } from 'react';
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import CloseIcon from '@mui/icons-material/Close';
import ForumIcon from '@mui/icons-material/Forum';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';

import Modal from 'react-bootstrap/Modal';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const src = '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwonderwash.franchise%2F&tabs=timeline&width=280&height=150&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="280" height="150" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>';

export default function SpeedDialMenu() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [showModalFacebook, setModalShowFacebook] = useState(false);
    const ModalFacebookClose = () => setModalShowFacebook(false);
    const ModalFacebookShow = () => setModalShowFacebook(true);

    const [showModalLine, setModalShowLine] = useState(false);
    const ModalLineClose = () => setModalShowLine(false);
    const ModalLineShow = () => setModalShowLine(true);

    const [showModalPhone, setModalShowPhone] = useState(false);
    const ModalPhoneClose = () => setModalShowPhone(false);
    const ModalPhoneShow = () => setModalShowPhone(true);

    const actions = [
        {
            icon: <PhoneIcon />,
            name: "โทรศัพท์",
            bgcolor: "#f8961e",
            bgcollorhover: '#f9c74f',
            Modal: ModalPhoneShow
        },
        {
            icon: <FacebookIcon />,
            name: "FACEBOOK",
            bgcolor: "#0353a4",
            bgcollorhover: '#006daa',
            Modal: ModalFacebookShow
        },
        {
            icon: "L",
            name: "LINE",
            bgcolor: "#3e8914",
            bgcollorhover: '#3da35d',
            Modal: ModalLineShow
        },
    ];

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
                                onClick={action.Modal}
                                FabProps={{
                                    sx: {
                                        width: 50,
                                        height: 50,
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

            {/* ==================================================================== */}
            {/* ======================== MODAL FACEBOOK ============================ */}
            {/* ==================================================================== */}
            <Dialog
                open={showModalFacebook}
                onClose={ModalFacebookClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div
                            dangerouslySetInnerHTML={{ __html: src }}
                        />
                    </DialogContentText>
                </DialogContent>
            </Dialog>


            {/* ==================================================================== */}
            {/* =========================== MODAL LINE ============================= */}
            {/* ==================================================================== */}
            <Dialog
                open={showModalLine}
                onClose={ModalLineClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Line
                    </DialogContentText>
                </DialogContent>
            </Dialog>


            {/* ==================================================================== */}
            {/* =========================== MODAL PHONE ============================ */}
            {/* ==================================================================== */}
            <Dialog
                open={showModalPhone}
                onClose={ModalPhoneClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Phone
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}
