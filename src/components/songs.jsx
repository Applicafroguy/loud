import React, { Component } from 'react';
import './App.css';
class Songs extends Component {

    constructor() {
        super();
        this.state = {
            songs: [{
                    title: 'Amabhodlela',
                    genre: 'Rap'
                },
                {
                    title: 'Tuig',
                    genre: 'Rap'
                },
                {
                    title: 'Bree',
                    genre: 'Rap'
                }
            ]
        }
    }

    // render   
    render() {
        return ( <
            div className = "App" >
            <
            About songs = { this.state.songs }
            / > < /
            div >
        );
    }
}

export default Songs;