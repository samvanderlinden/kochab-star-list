import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
         <ul>
            {this.props.currentState.starList.map(star => (<li key={star.name}>
              The star {star.name} diameter is {star.diameter}</li>))}
          </ul> 
        );
      }
    }
    
    export default List;