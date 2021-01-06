import React, { Component } from 'react';
import { Grid } from '@material-ui/core'

import './style.css';
import Endpoint from './Endpoint/Endpoint';
import DataStructure from './DataStructure/DataStructure'
export default class Documentation extends Component {


    constructor(props) {
        let path = '../../constants/data_api/';
        super(props)
        let API = require('../../constants/data_api/' + props.source)
        this.state = {
            title: API[0],
            data_structure: API[1],
            content: API[2]
        }
    }

    render() {
        return (
            <Grid>
                <div className="title">{this.state.title}</div>
                <div className="data_structure">
                    <span className="data_structure_title">
                        {this.state.data_structure[0]}
                    </span>
                    <DataStructure data={this.state.data_structure[1]}/>
                </div>
                <div className="documentation">
                    {
                        this.state.content.map((line, index) => (
                            <Endpoint data={line} />
                        ))
                    }
                </div>
            </Grid>
        )
    }
}
