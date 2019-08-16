import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";

export default class ItemList extends Component {
  render() {
    // const listData = SwapiService.getAllPeople().then(people => {
    //   people.forEach(p => {
    //     console.log(p.name);
    //   });
    // });

    return (
      <div>
        <ul className="item-list list-group">
          <li className="list-group-item">Luke Skywalker</li>
          <li className="list-group-item">Darth Vader</li>
          <li className="list-group-item">R2-D2</li>
        </ul>
      </div>
    );
  }
}
