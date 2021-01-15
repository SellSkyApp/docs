import React, { Component } from 'react';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { red } from '@material-ui/core/colors';

export default class NeedsAuthentication extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        if (this.props.data == null) {
            return (null)
        }

        else if (this.props.data == "admin") {
            return (
            <VpnKeyIcon style={{ fontSize: 30, color: "red" }} />
            )
        }

        else {
            return (
                <VpnKeyIcon style={{ fontSize: 30, color: "rgb(113, 154, 89)" }} />
            );
        }

    }
}