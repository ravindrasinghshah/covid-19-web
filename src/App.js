import React from 'react';
import './App.css';
import PaperCard from './Components/PaperCard';
import NewCasesCard from './Components/NewCasesCard';
import SummaryChart from './Components/SummaryChart';
import ErrorIcon from '@material-ui/icons/Error';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import { covidService } from './Services/Service';
import Header from './Components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      store: {
        summary: {
          global: [],
          countries: []
        }
      }
    };
  }

  componentDidMount() {
    covidService.getGlobalResult().then(response => {
      this.setState({
        isLoaded: true,
        store: {
          summary: {
            global: response.Global,
            countries: response.Countries
          }
        }
      });
    });
  }
  render() {
    return (
      <div className="app">
        <Header />
        {this.state.isLoaded ? (<div className="app_banner">
          <div className="app_banner_cards">
            <PaperCard title="Total Confirmed" count={this.state.store.summary.global.TotalConfirmed}
              Icon={ErrorIcon} paperClass="confirm_cases" />
            <PaperCard title="Total Recovered" count={this.state.store.summary.global.TotalRecovered}
              Icon={ThumbUpIcon} paperClass="recover_cases" />
            <PaperCard title="Total Deaths" count={this.state.store.summary.global.TotalDeaths}
              Icon={ThumbDownIcon} paperClass="death_cases" />

          </div>
          <div className="app_banner_cards">
            <NewCasesCard
              confirmedCount={this.state.store.summary.global.NewConfirmed}
              recoveredCount={this.state.store.summary.global.NewRecovered}
              deathCount={this.state.store.summary.global.NewDeaths} />
          </div>
          <div className="app_summary_chart">
            {this.state.store.summary.countries &&
              this.state.store.summary.countries.length > 0
              && <SummaryChart countries={this.state.store.summary.countries} />}
          </div>
        </div>)
          : <h1>Loading...</h1>
        }

      </div>
    )
  }
}

export default App;
