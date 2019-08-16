export default class SwapiService {
  _apiBase = "https://swapi.co/api";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    // res.ok = true only if status has value 200-299
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} recieved ${res.status}`);
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }
  async getPerson(id) {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }
  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarships);
  }
  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarships(starship);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/; // find number between last 2 slashes
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }
  _transformStarships(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    };
  }
  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    };
  }
}

const swapi = new SwapiService();

// swapi.getAllPeople().then(people => {
//   people.forEach(p => {
//     console.log(p.name);
//   });
// });

swapi.getPerson(3).then(person => {
  console.log(person);
  console.log(person.name);
});

// const getResource = async url => {};

// getResource("https://swapi.co/api/people/1/")
//   .then(body => {
//     console.log(body);
//   })
//   .catch(err => {
//     console.log("Could not fetch");
//   });
