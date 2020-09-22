import React from 'react';
import './DeathChart.css';
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
function DeathChart({ countries }) {
    const classes = useStyles();
    const data = React.useMemo(
        () => [
            {
                label: 'Total Deaths',
                data: countries.sort(({ TotalDeaths: previousID }, { TotalDeaths: currentID }) => previousID - currentID)
                    .map(country => ({
                        x: country.CountryCode, y: country.TotalDeaths,
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
                return (<div className="deathChart_tooltip">
                    <h3>{datum?.originalDatum?.c}</h3>
                    <br />
                    <h4>Total Confirmed:  <strong>{datum?.originalDatum?.y}</strong></h4>
                </div>)
            }
        }),
        []
    )
    return (
        <div className="deathChart">
              <div className={classes.root}>
                <Paper>
                    <h5>Top 10 Countries Death Cases</h5>
                    <div
                        style={{
                            width: '300px',
                            height: '200px'
                        }}
                    >  {countries &&
                        <Chart data={data} series={series} axes={axes}
                        className="deathChart_custom"
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

export default DeathChart
