import React from 'react'
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppQRCode from './AppQRCode';

function Header() {
    return (
        <div className="header">
            <AppBar position="static">
                <Toolbar>
                    <div className="header_left">
                        <Typography variant="h6" className='header_title'>
                            COVID-19 STATS
                    </Typography>
                    </div>
                    <div className="header_right mobile-hidden">
                        <AppQRCode />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
