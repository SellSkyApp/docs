import React from 'react';
import './Endpoint.css';
import Body from './Body';
import NeedsAuthentication from './NeedsAuthentication'

function tcha (arg){
    return({
        __html: arg
    })
}
const Endpoint = (props) => (
    <div className="endpoint" >
        <NeedsAuthentication data={props.data.authentication}/>
        <span className="name" dangerouslySetInnerHTML={tcha(props.data.name)}>
        </span>

        <div className="description" dangerouslySetInnerHTML={tcha(props.data.description)}>
        </div>

        <div className="method_and_path centered_green">
            <span className="method" dangerouslySetInnerHTML={tcha(props.data.method)}></span>  
            <span dangerouslySetInnerHTML={tcha(props.data.path)}></span>
        </div>

        <div className="subtitle">Request body</div>
            <Body data={props.data.body}/>

            <div className="subtitle">Response</div>
            <div className="centered_green" dangerouslySetInnerHTML={tcha(props.data.response_success)}>
            </div>
                
            <div className="response_error" dangerouslySetInnerHTML={tcha(props.data.response_error)}>
            </div>
    </div> 
)

export default Endpoint;