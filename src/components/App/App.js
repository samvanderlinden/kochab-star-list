//imported code from other libraries goes up top
import React, { Component } from 'react';
import axios from 'axios';

//imported files that we made goes after other libraries we imported
import Introduction from '../Introduction/Introduction';
import NewStar from '../NewStar/NewStar';
import List from '../List/List';
import NewStarForm from '../NewStarForm/NewStarForm';
import PlanetList from '../PlanetList/PlanetList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starList: [
        { name: 'Menkar', diameter: '17 km' },
        { name: 'Kochab', diameter: '10 km' },
        { name: 'Hadar', diameter: '8 km' },
      ],
      newStar: {
        name: '',
        diameter: '',
      },
      planetList: [],
    };
  }


  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      starList: [...this.state.starList, this.state.newStar],
      newStar: {
        name: '',
        diameter: '',
      }
    })
  }

  // this is basically our 'onReady'. We want the code below to run once the page has loaded
  componentDidMount = () => {
    this.getPlanets('https://swapi.co/api/planets/?format=json');
  }

  getPlanets = (nextUrl) => {
    if (nextUrl) {
      axios({
        method: 'GET',
        url: nextUrl,
      })
        .then((response) => {
          console.log(response.data);
          this.setState({
            planetList: [
              ...this.state.planetList,
              ...response.data.results,
            ]
          });
          if (response.data.next) {
            this.getPlanets(response.data.next)
          }
          console.log(this.state.planetList);
        })
        .catch((error) => {
          console.log('error on axios GET request', error);
        });
    }
  }



  render() {
    return (
      <div>
        <Introduction />
        <NewStar newStar={this.state.newStar} />
        <p>
          The first item in the array is: {this.state.starList[0].name};
        </p>
        <NewStarForm newStar={this.state.newStar}
          handleChangeForChild={this.handleChangeFor}
          handleSubmitForChild={this.handleSubmit}
        />
        <List currentState={this.state} />{/* 'currentState' must be the same as 'currentState' in List.js */}
        <PlanetList planetList={this.state.planetList} />
        {JSON.stringify(this.state.planetList)};
      </div>
    );
  }
}

export default App;
