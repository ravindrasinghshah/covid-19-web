import React from 'react';
import './DataNotFound.css';
import PublicIcon from '@material-ui/icons/Public';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';

function DataNotFound() {
    return (
        <div className="dataNotFound">
            <Typography variant="h3" gutterBottom>
                Updating latest data in server from around the world <PublicIcon />
            </Typography>

            <Alert severity="info">Please check again after sometime....
            </Alert>
            <LinearProgress />
        </div>
    )
}

export default DataNotFound
