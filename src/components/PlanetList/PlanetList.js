//imported code from other libraries goes up top
import React, { Component } from 'react';

//imported files that we made goes after other libraries we imported

class PlanetList extends Component {

  render() {
    return (
        <ul>
        {this.props.planetList.map(planetName => (<li key={planetName.name}>
          The star {planetName.name} diameter is {planetName.diameter}</li>))}
      </ul> 
    );
  }
}

export default PlanetList;
