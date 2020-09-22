import React from 'react'
import './RecoveredChart.css';
import { Chart } from 'react-charts';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(3),
            width: 'inherit',
            padding: theme.spacing(2)
        },
    },
}));

function RecoveredChart({ countries }) {
    const classes = useStyles();
    const data = React.useMemo(
        () => [
            {
                label: 'Total Recovered',
                data: countries.sort(({ TotalRecovered: previousID }, { TotalRecovered: currentID }) => previousID - currentID)
                    .map(country => ({
                        x: country.CountryCode, y: country.TotalRecovered,
                        c: country.Country
                    })).reverse().slice(0, 9).reverse()
            }
        ],
        []
    )
    const axes = React.useMemo(
        () => [
            { primary: true, type: 'ordinal', position: 'bottom' },
            { position: 'left', type: 'linear', stacked: true, show: false }
        ],
        []
    )
    const series = React.useMemo(
        () => ({
            showPoints: true
        }),
        []
    )
    const tooltip = React.useMemo(
        () => ({
            render: ({ datum, primaryAxis, getStyle }) => {
                return (<div className="recoveredChart_tooltip">
                    <h3>{datum?.originalDatum?.c}</h3>
                    <br />
                    <h4>Total Recovered:  <strong>{datum?.originalDatum?.y}</strong></h4>
                </div>)
            }
        }),
        []
    )
    return (
        <div className="recoveredChart">
            <div className={classes.root}>
                <Paper>
                    <h5>Top 10 Countries Recovered Cases</h5>
                    <div
                        style={{
                            width: '300px',
                            height: '200px'
                        }}
                    >  {countries &&
                        <Chart data={data} series={series} axes={axes}
                            className="recoveredChart_custom"
                            tooltip={tooltip}
                            primaryCursor
                            secondaryCursor
                        />}
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default RecoveredChart
