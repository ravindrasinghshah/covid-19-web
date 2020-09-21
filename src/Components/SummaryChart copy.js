import React from 'react';
import './SummaryChart.css';

// import useChartConfig from 'hooks/useChartConfig';

import { Chart } from 'react-charts'
// const axes = React.useMemo(
//     () => [
//         { primary: true, type: 'ordinal', position: 'bottom' },
//         { position: 'left', type: 'linear', stacked: false }
//     ],
//     []
// )

class SummaryChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.countries.sort(({ TotalConfirmed: previousID }, { TotalConfirmed: currentID }) => previousID - currentID)
                .map(country => ({ x: country.CountryCode, y: country.NewDeaths })).reverse().slice(0, 9)
        };

        // ({ countries })
        // const GetData = () => {
        //     console.log('1')
        //     var da = countries.sort(({ TotalConfirmed: previousID }, { TotalConfirmed: currentID }) => previousID - currentID)
        //         .map(country => ({ x: country.CountryCode, y: country.NewDeaths })).reverse().slice(0, 9);
        //     var data = React.useMemo(
        //         () => [
        //             {
        //                 label: 'Series 1',
        //                 data: da
        //             }
        //         ],
        //         []
        //     );
        //     console.log(data)
        //     return data;
        // }

    }
    componentDidMount() {
        // var da = countries.sort(({ TotalConfirmed: previousID }, { TotalConfirmed: currentID }) => previousID - currentID)
        //     .map(country => ({ x: country.CountryCode, y: country.NewDeaths })).reverse().slice(0, 9);
        // this.state.data = da;
    }
    // var countriesData = countries.map(country => ({ x: country.CountryCode, y: country.NewDeaths }));
    // var countriesData = countries.sort(({ TotalConfirmed: previousID }, { TotalConfirmed: currentID }) => previousID - currentID)
    //     .map(country => ({
    //         x: country.CountryCode, y: country.NewDeaths
    //     })).reverse().slice(0, 9);

    // const data = React.useMemo(
    //     () => [
    //         {
    //             label: 'Series 1',
    //             data: countriesData
    //         }
    //     ],
    //     []
    // )

    render() {
        const axes = [
            { primary: true, type: 'ordinal', position: 'bottom' },
            { position: 'left', type: 'linear', stacked: false }
        ];

        return (
            <div className="summaryChart">
                <h1> Summary Chart</h1>
                {
                    this.state.data && this.state.data.length > 0 &&
                    <Chart data={this.props.countries.sort(({ TotalConfirmed: previousID }, { TotalConfirmed: currentID }) => previousID - currentID)
                        .map(country => ({ x: country.CountryCode, y: country.NewDeaths })).reverse().slice(0, 9)} 
                        
                        />
                }

                {/* {countries
                .sort(({ TotalConfirmed: previousID }, { TotalConfirmed: currentID }) => previousID - currentID)
                .map(({ TotalConfirmed, CountryCode }) => (
                    <p>
                        {CountryCode} - {TotalConfirmed}
                    </p>
                )).reverse().slice(0, 9)
            } */}
                <br />

            </div >
        )
    }

}

export default SummaryChart
