import React from 'react';
import './AppLoading.css';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

function AppLoading() {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progressRef = React.useRef(() => { });
    React.useEffect(() => {
        progressRef.current = () => {
            if (progress > 100) {
                setProgress(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setProgress(progress + diff);
                setBuffer(progress + diff + diff2);
            }
        };
    });
    React.useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="appLoading">
            <div className={classes.root}>
            <Alert severity="info">Getting latest data from around the world!</Alert>
                <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            </div>
        </div>
    )
}

export default AppLoading
