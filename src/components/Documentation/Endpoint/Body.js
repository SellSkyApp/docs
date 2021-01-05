import React, { Component } from 'react';

export default class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tcha: function(arg){ return({
                __html: arg
            })}
        }
    }


    render() {
        console.log(this.props.data)
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
                                <td className="col_name" dangerouslySetInnerHTML={this.state.tcha(line.name)}></td>
                                <td className="col_desc" dangerouslySetInnerHTML={this.state.tcha(line.description)}></td>
                                <td className="col_req" dangerouslySetInnerHTML={this.state.tcha(line.required ? '<b>Oui</b>' : 'Non')}></td>    
                            </tr>
                            
                            );
                    })}
                    </table>
                </div>
            );
        }

    }
}