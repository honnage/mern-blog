import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import CloseIcon from '@mui/icons-material/Close';
import ForumIcon from '@mui/icons-material/Forum';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { api } from "../../lib/constants"

export default function SpeedDialMenu() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    {/* ==================================================================== */ }
    {/* ============================ FACEBOOK ============================== */ }
    {/* ==================================================================== */ }
    const [showModalFacebook, setModalShowFacebook] = useState(false);
    const ModalFacebookClose = () => setModalShowFacebook(false);
    const ModalFacebookShow = () => setModalShowFacebook(true);

    {/* ==================================================================== */ }
    {/* ============================== LINE ================================ */ }
    {/* ==================================================================== */ }
    const [showModalLine, setModalShowLine] = useState(false);
    const ModalLineClose = () => setModalShowLine(false);
    const ModalLineShow = () => setModalShowLine(true);


    {/* ==================================================================== */ }
    {/* ============================== PHONE =============================== */ }
    {/* ==================================================================== */ }
    const [showModalPhone, setModalShowPhone] = useState(false);
    const ModalPhoneClose = () => setModalShowPhone(false);
    const ModalPhoneShow = () => setModalShowPhone(true);

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(api.LOCALHOST + "/api/section-contents")
            .then((res) => res.json())
            .then((result) => {
                setItems(result.data);
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);

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

    const arr = [1, 2, 3, 4, 5, 6];

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

            {items.map(item => {
                return item.attributes.section == 'Buttom_Facebook'
                    ?
                    <Dialog
                        open={showModalFacebook}
                        onClose={ModalFacebookClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
                            {item.attributes.title}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <ReactMarkdown children={item.attributes.content} rehypePlugins={[rehypeRaw]} />
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                    : null;
            })}

            {/* ==================================================================== */}
            {/* =========================== MODAL LINE ============================= */}
            {/* ==================================================================== */}
            {items.map(item => {
                return item.attributes.section == 'Buttom_Line'
                    ?
                    <Dialog
                        open={showModalLine}
                        onClose={ModalLineClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
                            {item.attributes.title}
                        </DialogTitle>
                        <DialogContent >
                            <DialogContentText id="alert-dialog-description" >
                                <ReactMarkdown children={item.attributes.content} rehypePlugins={[rehypeRaw]} />
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                    : null;
            })}


            {/* ==================================================================== */}
            {/* =========================== MODAL PHONE ============================ */}
            {/* ==================================================================== */}
            {items.map(item => {
                return item.attributes.section == 'Buttom_Phone'
                    ?
                    <Dialog
                        open={showModalPhone}
                        onClose={ModalPhoneClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
                            {item.attributes?.title}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <ReactMarkdown children={item.attributes.content} rehypePlugins={[rehypeRaw]} />
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                    : null;
            })}

        </>
    )
}
