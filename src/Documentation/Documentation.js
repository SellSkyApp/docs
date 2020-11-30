import React, { Component } from 'react';
import './Documentation.css';
import Endpoint from './Endpoint/Endpoint';
import API from '../API.json'


export default class Documentation extends Component {

    render() {
        return (
            <div className="documentation">
               {API[0].map( (line, index) => {
                   return(
                        <Endpoint data={line} />
                   )
               })}
            </div> 
        );
    }
}