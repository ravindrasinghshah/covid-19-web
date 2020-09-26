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
import WorldChart from './Components/WorldChart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      store: {
        summary: {
          global: [],
          countries: []
        }
      }
    };
  }
  setStore(response) {
    this.setState({
      isLoaded: true,
      store: {
        summary: {
          global: response.Global,
          countries: response.Countries
        }
      }
    });
  }
  getData() {
    covidService.getGlobalResult().then(response => {
      this.setState({ isLoaded: true });
      if (response.Date !== "0001-01-01T00:00:00Z") {
        localStorage.setItem("covidapp-data", JSON.stringify(response));
        this.setStore(response);
      }
    });
  }
  componentDidMount() {
    var localData = localStorage.getItem("covidapp-data");
    if (localData != null) {
      var data = JSON.parse(localData);
      var date1 = new Date(data.Date);
      var date2 = new Date();
      if (new Date(date1.getFullYear(), date1.getMonth(), date1.getDay()).getTime()
        < new Date(date2.getFullYear(), date2.getMonth(), date2.getDay()).getTime()) {
        this.getData();
      }
      else {
        this.setStore(data);
      }
    }
    else {
      this.getData();
    }

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

              <div className="app_world_chart">
                <WorldChart countries={this.state.store.summary.countries} />
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
