import React from 'react';
import './App.css';
import PaperCard from './Components/PaperCard';
import NewCasesCard from './Components/NewCasesCard';

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
      items: []
    };
  }

  componentDidMount() {
    covidService.getGlobalResult().then(response => {
      console.log(response);
      this.setState({
        isLoaded: true,
        items: response.Global
      });
    });
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app_banner">
          <div className="app_banner_cards">
            <PaperCard title="Total Confirmed" count={this.state.items.TotalConfirmed} Icon={ErrorIcon} paperClass="confirm_cases" />
            <PaperCard title="Total Recovered" count={this.state.items.TotalRecovered} Icon={ThumbUpIcon} paperClass="recover_cases" />
            <PaperCard title="Total Deaths" count={this.state.items.TotalDeaths} Icon={ThumbDownIcon} paperClass="death_cases" />

          </div>
          <div className="app_banner_cards">
            <NewCasesCard confirmedCount={this.state.items.NewConfirmed}
              recoveredCount={this.state.items.NewRecovered} deathCount={this.state.items.NewDeaths} />
          </div>
          {/* Banner Component
            - total counts 
            - search bar
            */}
          {
            /* Top cases Component
             - top cases tile
             */
          }
        </div>
      </div>
    )
  }
}

export default App;
