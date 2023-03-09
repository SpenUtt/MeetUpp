// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from "./NumberOfEvents";
import { WarningAlert } from './Alert';
//import { mockData } from './mock-data';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import WelcomeScreen from './WelcomeScreen';
import {
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import EventGenre from './EventGenre';

class App extends Component {
  state = {
    events: [],
    locations: [], 
    numberOfEvents: 32,
    selectedLocation: "all",
    showWelcomeScreen: undefined
  };

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location).slice(0, this.state.numberOfEvents);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
        }); 
      }
    });
  }; 

  updateNumberOfEvents(number) { 
    this.setState({
      numberOfEvents: number,
    });
    this.updateEvents(this.state.selectedLocation);
  }

  updateCitySearch(location) { 
    this.setState({
      selectedLocation: location,
    });
    this.updateEvents(location);
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ?
      false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  /*render() { 
    if (this.state.showWelcomeScreen === undefined) return <div
      className="App" />

    const offlineMessage = navigator.onLine
      ? ''
      : 'The app has no connection to the internet. The information displayed may not be up-to-date.';
    return (
      <div className="App">
        <div className="filters">
          <CitySearch   
            locations={this.state.locations} 
            updateEvents={(loc) => this.updateCitySearch(loc)} 
          />
          <NumberOfEvents 
            num={this.state.numberOfEvents} 
            updateNumberOfEvents={(num) => this.updateNumberOfEvents(num)}
          />
          <WarningAlert text={offlineMessage}></WarningAlert>
        </div>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }old code from task 4.9*/
  render() {
    const { locations, numberOfEvents, events } = this.state;
    if (this.state.showWelcomeScreen === undefined) return <div
      className="App" />

    const offlineMessage = navigator.onLine
      ? ''
      : 'The app has no connection to the internet. The information displayed may not be up-to-date.';
    
    return (
      <div className="App">
        <div className='filters'>
          <h1>Meet Upp</h1>
          <h4>Choose your nearest city</h4>
          <CitySearch 
            updateEvents={this.updateEvents} 
            locations={locations} 
          />
          <NumberOfEvents
            updateEvents={this.updateEvents}
            numberOfEvents={numberOfEvents}
          />
          <div className='data-vis-wrapper'>
            <h4>Events in each city</h4>
            <EventGenre events={this.state.events} />
            <ResponsiveContainer 
              height={400}
              style={{ display: "flex", justifyContent: "center" }} 
            >
              <ScatterChart
                margin={{
                  top: 20, right: 20, bottom: 20, left: 20,
                }}
              >
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="city" />
                <YAxis 
                  allowDecimals={false}
                  type="number" 
                  dataKey="number" 
                  name="number of events" 
                />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>       
          <WarningAlert text={offlineMessage}></WarningAlert>
        </div>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} /> 
      </div>
    );
  }
}


export default App;
