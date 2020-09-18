import React from 'react';
import './App.css';
import PaperCard from './Components/PaperCard';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import ErrorIcon from '@material-ui/icons/Error';
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
        <Header/>
        <div className="app_banner">
          <div className="app_banner_cards">
            <PaperCard title="Total Confirmed" count={this.state.items.TotalConfirmed} Icon={ErrorIcon} paperClass="confirm_cases" />
            <PaperCard title="Total Recovered" count={this.state.items.TotalRecovered} Icon={CheckCircleIcon} paperClass="recover_cases" />
            <PaperCard title="Total Deaths" count={this.state.items.TotalDeaths} Icon={ArrowDropDownCircleIcon} paperClass="death_cases" />
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
