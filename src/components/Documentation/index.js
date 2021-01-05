import React, { Component } from 'react';
import { Grid } from '@material-ui/core'

import './style.css';
import Endpoint from './Endpoint/Endpoint';

export default class Documentation extends Component {


    constructor(props){
        let path = '../../constants/data_api/';
        super(props)
        let API = require('../../constants/data_api/' + props.source)
        this.state ={
           content: API[1],
           title: API[0]
        } 
    }

    render(){
        return(
            <Grid>
            <div className="title">{this.state.title}</div>
            <div className="documentation">
                {
                    this.state.content.map( (line, index) => (
                        <Endpoint data={line} />
                    ))
                }
            </div> 
        </Grid>
        )
    }
}
