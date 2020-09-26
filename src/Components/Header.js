import React from 'react'
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppQRCode from './AppQRCode';
import Info from './Info';

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
                    <div className="header_right">
                        <div className="header_right_info">
                            <Info/>
                        </div>
                        <div className="mobile-hidden">
                            <AppQRCode />
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
