import React, { Component } from 'react';

export default class Body extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.data)
        if (this.props.data == null) {
            return (
                <div className="body">
                    Il n'y a pas de corps pour cette requête.
                </div>
            );
        }

        else {
            return (

                <div className="body">
                    <table>
                        <tr className="first_tr">
                            <th className="col_name">Nom de l'attribut</th>
                            <th className="col_desc">Description</th>    
                            <th className="col_req">Requis</th>
                        </tr>
                    {this.props.data.map( (line, index) => {
                        return(
                            <tr>
                                <td className="col_name">{line.name}</td>
                                <td className="col_desc">{line.description}</td>
                                <td className="col_req">{line.required ? 'Oui' : 'Non'}</td>    
                            </tr>
                            
                            );
                    })}
                    </table>
                </div>
            );
        }

    }
}