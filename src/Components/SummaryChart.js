import React from 'react';
import './SummaryChart.css';
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
function SummaryChart({ countries }) {
    const classes = useStyles();
    const data = React.useMemo(
        () => [
            {
                label: 'Total Confirmed',
                data: countries.sort(({ TotalConfirmed: previousID }, { TotalConfirmed: currentID }) => previousID - currentID)
                    .map(country => ({
                        x: country.CountryCode, y: country.TotalConfirmed,
                        c: country.Country
                    })).reverse().slice(0, 4).reverse()
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
                return (<div className="summary_chart_tooltip">
                    <h3>{datum?.originalDatum?.c}</h3>
                    <br />
                    <h4>Total Confirmed:  <strong>{datum?.originalDatum?.y}</strong></h4>
                </div>)
            }
        }),
        []
    )

    return (
        <div className="summaryChart">
            <div className={classes.root}>
                <Paper>
                    <h5>Top 5 Countries Confirmed Cases</h5>
                    <div
                        style={{
                            width: '250px',
                            height: '200px'
                        }}
                    >  {countries &&
                        <Chart data={data} series={series} axes={axes}
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

export default SummaryChart
