import React, { Component } from 'react';


function tcha(arg){
    return({
        __html: arg
    })
}

export default class Body extends Component {

    constructor(props) {
        super(props);
        
    }


    render() {
        if (this.props.data == null) {
            return (
                <div className="body">
                    This request has no body.
                </div>
            );
        }

        else {
            return (

                <div className="body">
                    <table>
                        <tr className="first_tr">
                            <th className="col_name">Attribute name</th>
                            <th className="col_desc">Description</th>    
                            <th className="col_req">Required</th>
                        </tr>
                    {this.props.data.map( (line, index) => {
                        return(
                            <tr>
                                <td className="col_name" dangerouslySetInnerHTML={tcha(line.name)}></td>
                                <td className="col_desc" dangerouslySetInnerHTML={tcha(line.description)}></td>
                                <td className="col_req" dangerouslySetInnerHTML={tcha(line.required ? '<b>Yes</b>' : 'No')}></td>    
                            </tr>
                            
                            );
                    })}
                    </table>
                </div>
            );
        }

    }
}