import React, { Component } from 'react';
import './DataStructure.css'

function tcha(arg){
    return({
        __html: arg
    })
}

export default class DataStructure extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.data.length == 1) {
            return (
                <div className="data_structure_body">
                    There is no specific data structure. Follow the different methods described below.
                </div>
            );
        }

        else {
            return (

                <div className="data_structure_body">
                    <table>
                        <tr className="first_tr">
                            <th className="col_name">Attribute name</th>
                            <th className="col_desc">Description</th>    
                            <th className="col_type">Type</th>
                            <th className="col_example">Example</th>
                        </tr>
                    {this.props.data[1].map( (line, index) => {
                        return(
                            <tr>
                                <td className="col_name" dangerouslySetInnerHTML={tcha(line.name)}></td>
                                <td className="col_desc" dangerouslySetInnerHTML={tcha(line.description)}></td>
                                <td className="col_type" dangerouslySetInnerHTML={tcha(line.type)}></td> 
                                <td className="col_example" dangerouslySetInnerHTML={tcha(line.example)}></td>    
                            </tr>
                            
                            );
                    })}
                    </table>
                </div>
            );
        }

    }
}