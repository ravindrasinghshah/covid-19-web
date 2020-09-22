import React from 'react';
import './App.css';
import PaperCard from './Components/PaperCard';
import NewCasesCard from './Components/NewCasesCard';
import SummaryChart from './Components/SummaryChart';
import DeathChart from './Components/DeathChart';
import DataNotFound from './Components/DataNotFound';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { covidService } from './Services/Service';
import Header from './Components/Header';
import AppLoading from './Components/AppLoading';
import RecoveredChart from './Components/RecoveredChart';
import AppShare from './Components/AppShare';
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
      // console.log(response)
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
        {this.state.isLoaded ?
          this.state.store.summary.global.TotalConfirmed > 0 ?
            (<><div className="app_banner">
              <div className="app_banner_cards">
                <PaperCard title="Confirmed" count={this.state.store.summary.global.TotalConfirmed}
                  Icon={SentimentDissatisfiedIcon} paperClass="confirm_cases" />
                <PaperCard title="Recovered" count={this.state.store.summary.global.TotalRecovered}
                  Icon={InsertEmoticonIcon} paperClass="recover_cases" />
                <PaperCard title="Deaths" count={this.state.store.summary.global.TotalDeaths}
                  Icon={SentimentVeryDissatisfiedIcon} paperClass="death_cases" />

              </div>
              <div className="app_banner_cards">
                <NewCasesCard
                  confirmedCount={this.state.store.summary.global.NewConfirmed}
                  recoveredCount={this.state.store.summary.global.NewRecovered}
                  deathCount={this.state.store.summary.global.NewDeaths} />
              </div>
              <div className="app_summary_charts">
                {this.state.store.summary.countries &&
                  this.state.store.summary.countries.length > 0
                  && <>
                    <SummaryChart countries={this.state.store.summary.countries} />
                    <RecoveredChart countries={this.state.store.summary.countries} />
                    <DeathChart countries={this.state.store.summary.countries} />
                  </>
                }
                {/** Other charts */}
              </div>

            </div>
              <AppShare />
            </>)
            : <DataNotFound />
          : <AppLoading />
        }

      </div>
    )
  }
}

export default App;
