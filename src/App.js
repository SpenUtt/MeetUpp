// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from "./NumberOfEvents";
//import { mockData } from './mock-data';
import { getEvents, extractLocations } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [], 
    numberOfEvents: 32,
    selectedLocation: "all",
  };

  updateEvents = (location) => {
    console.log(location, this.state.selectedLocation, this.state.numberOfEvents)
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location).slice(0, this.state.numberOfEvents);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents),
      });
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

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.numberOfEvents), 
          locations: extractLocations(events) 
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() { 
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
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}


export default App;
