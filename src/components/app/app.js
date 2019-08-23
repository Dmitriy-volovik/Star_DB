import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ItemDetails, { Record } from "../item-details/item-details";
import F from "../item-list";
import ItemList from "../item-list";

export default class App extends Component {
  swapiService = new SwapiService();
  state = { hasError: false, showRandomPlanet: true };

  toggleRandomPlanet = () => {};

  componentDidCatch() {
    this.setState({
      hasError: true
    });
    console.log("didCatch");
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople
    } = this.swapiService;
    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender " />
        <Record field="eyeColor" label="Eye Color " />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model " />
        <Record field="length" label="Length " />
        <Record field="costInCredits" label="Cost  " />
      </ItemDetails>
    );

    return (
      <div className="stardb-app">
        <Header />
        {/* <RandomPlanet /> */}
        <ErrorButton />
        <ItemList getData={getAllPeople}>
          {name => <span>{name}</span>}
        </ItemList>
        <Row left={personDetails} right={starshipDetails} />
      </div>
    );
  }
}
