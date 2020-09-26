import React from 'react'
import './Info.css';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

function Info() {
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <div style={modalStyle} className="info_modal">
            <h2>App Info</h2>
            <p>
                Note: Data is pulled from Covid19 API : <a href="https://covid19api.com/" target="_blank">https://covid19api.com/</a>
            </p>
            <p>A free API for data on the Coronavirus</p>
        </div>
    );

    return (
        <div className="info">
            <Button color="inherit" onClick={handleOpen}><InfoIcon />Info</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                {body}
            </Modal>
        </div>
    )
}

export default Info
