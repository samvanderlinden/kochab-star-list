import React, { Component } from 'react';
class Introduction extends Component {
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
            }
        };
    }


    render() {
        return (
            <p>
                This is the star list!
        </p>
        );
    }
}

export default Introduction;
