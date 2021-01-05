import React from 'react';
import './Endpoint.css';
import Body from './Body';

const Endpoint = (props) => (
    <div className="endpoint">
        <div className="name">
            {props.data.name}
        </div>

        <div className="description">
            {props.data.description}
        </div>

        <div className="method_and_path centered_green">
            <span className="method">{props.data.method}</span>  {props.data.path}
        </div>

        <div className="subtitle">Request body</div>
            <Body data={props.data.body}/>

            <div className="subtitle">Response</div>
            <div className="centered_green">
                {props.data.response_success}
            </div>
                
            <div className="response_error">
                {props.data.response_error}
            </div>
    </div> 
)

export default Endpoint;