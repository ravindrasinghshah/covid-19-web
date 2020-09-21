import React from 'react'
import './NewCasesCard.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '90%',
        justifyContent: 'center',
        '& > *': {
            // margin: theme.spacing(3),
            width: 'inherit',
            height: 'inherit',
            // height: theme.spacing(10.5),
        },
    },
}));


function NewCasesCard({ confirmedCount, recoveredCount, deathCount }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper>
                <div className="newcase_card">
                    <div className="newcase_card_icon">
                        <TrendingUpIcon />
                    </div>
                    <div className="newcase_card_text">
                        <h1>
                            {confirmedCount &&
                                <CountUp end={confirmedCount} separator="," />}
                        </h1>
                        <p>New Confirmed</p>
                    </div>
                    <div className="newcase_card_text">
                        <h1>
                            {recoveredCount &&
                                <CountUp end={recoveredCount} separator="," />}
                        </h1>
                        <p>New Recovered</p>
                    </div>
                    <div className="newcase_card_text">
                        <h1>
                            {deathCount &&
                                <CountUp end={deathCount} separator="," />}
                        </h1>
                        <p>New Deaths</p>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default NewCasesCard
