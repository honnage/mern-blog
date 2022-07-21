import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function DialogCustom() {
    const [showDialog, setShowDialog] = React.useState(false);

    const handleClickOpenDialog = () => {
        setShowDialog(true);
    };
    const handleClosDialoge = () => {
        setShowDialog(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpenDialog}>
                Open dialog
            </Button>
            <BootstrapDialog
                onClose={handleClosDialoge}
                aria-labelledby="customized-dialog-title"
                open={showDialog}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClosDialoge}>
                    Modal title
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        XXX
                    </Typography>
                    <Typography gutterBottom>
                        YYY
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClosDialoge}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
