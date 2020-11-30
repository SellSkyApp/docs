import React from 'react';

import { Grid } from '@material-ui/core'

import './style.css';
import Endpoint from './Endpoint/Endpoint';

import API from '../../API.json'


const Documentation = () => (
    <Grid>
        <div className="documentation">
            {
                API[0].map( (line, index) => (
                    <Endpoint data={line} />
                ))
            }
        </div> 
    </Grid>
)

export default Documentation;