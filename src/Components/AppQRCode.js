import React from 'react';
import './AppQRCode.css';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import QRCode from 'qrcode.react'
import { WebAppUrl } from '../Common/Config';

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

function AppQRCode() {
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className="appQrCode_modal">
            <h2>Scan QR Code</h2>
            <p>
                <QRCode value={WebAppUrl}
                    size={200}
                    bgColor={"#ffffff"}
                    fgColor={"#3d4977"}
                    includeMargin={false}
                />
            </p>
        </div>
    );

    return (
        <div className="appQrCode">
            <Button color="inherit" onClick={handleOpen}><MobileScreenShareIcon />Open in mobile</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                {body}
            </Modal>
        </div>
    )
}

export default AppQRCode
