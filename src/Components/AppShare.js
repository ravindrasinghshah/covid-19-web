import React from 'react';
import './AppShare.css';
import { WebAppUrl, AppShareTitle } from '../Common/Config';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    TwitterShareButton
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon
} from "react-share";
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'inherit',
        transform: 'translateZ(0px)',
        flexGrow: 1,
    },
    speedDial: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    }
}));

function AppShare() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="appShare">
            <SpeedDial
                ariaLabel="App Share"
                className={classes.speedDial}
                icon={<ShareIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                <SpeedDialAction
                    key="Facebook"
                    icon={<FacebookShareButton
                        url={WebAppUrl}
                        quote={AppShareTitle}
                    >
                        <FacebookIcon size={48} round />
                    </FacebookShareButton>}
                    tooltipTitle="Facebook"
                    onClick={handleClose}
                />
                <SpeedDialAction
                    key="Twitter"
                    icon={<TwitterShareButton
                        url={WebAppUrl}
                        title={AppShareTitle}
                    >
                        <TwitterIcon size={48} round />
                    </TwitterShareButton>}
                    tooltipTitle="Twitter"
                    onClick={handleClose}
                />
                <SpeedDialAction
                    key="Telegram"
                    icon={<TelegramShareButton
                        url={WebAppUrl}
                        title={AppShareTitle}
                    >
                        <TelegramIcon size={48} round />
                    </TelegramShareButton>}
                    tooltipTitle="Telegram"
                    onClick={handleClose}
                />
                <SpeedDialAction
                    key="WhatsApp"
                    icon={<WhatsappShareButton
                        url={WebAppUrl}
                        title={AppShareTitle}
                        separator=" "
                    >
                        <WhatsappIcon size={48} round />
                    </WhatsappShareButton>}
                    tooltipTitle="WhatsApp"
                    onClick={handleClose}
                />
                <SpeedDialAction
                    key="LinkedIn"
                    icon={<LinkedinShareButton
                        url={WebAppUrl}
                    >
                        <LinkedinIcon size={48} round />
                    </LinkedinShareButton>}
                    tooltipTitle="LinkedIn"
                    onClick={handleClose}
                />
                <SpeedDialAction
                    key="Email"
                    icon={<EmailShareButton
                        url={WebAppUrl}
                        body={AppShareTitle}
                        subject="Covid 19 Stats App"
                    >
                        <EmailIcon size={48} round />
                    </EmailShareButton>}
                    tooltipTitle="Email"
                    onClick={handleClose}
                />
            </SpeedDial>

        </div>
    )
}

export default AppShare
