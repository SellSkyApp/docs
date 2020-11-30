import React, { Component } from 'react';
import './Endpoint.css';
import Body from './Body'
export default class Endpoint extends Component {

    constructor(props){
        super(props);
    }


    render() {
        console.log("CA VA CA : ");
        console.log( this.props.data.body)
        return (
            <div className="endpoint">
                <div className="name">
                    {this.props.data.name}
                </div>

                <div className="description">
                    {this.props.data.description}
                </div>

                <div className="method_and_path centered_green">
                    <span className="method">{this.props.data.method}</span>  {this.props.data.path}
                </div>



                
                <div className="subtitle">Corps de la requête</div>
                <Body data={this.props.data.body}/>

                <div className="subtitle">Réponse</div>
                <div className="centered_green">
                    {this.props.data.response_success}
                </div>
                
                <div className="response_error">
                    {this.props.data.response_error}
                </div>
                
            </div> 
        );
    }
}