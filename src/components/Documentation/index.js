import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import "./style.css";

import Endpoint from "./Endpoint/Endpoint";
import DataStructure from "./DataStructure/DataStructure";

export default class Documentation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let API = require("../../constants/data_api/" + this.props.source);
    let data = {
      title: API[0],
      data_structure: API[1],
      content: API[2],
      current_file: this.props.source
      
    }
    return (
      <Grid>
        <div className="title">{data.title}</div>
        <div className="data_structure">
          <span className="data_structure_title">
            {data.data_structure[0]}
          </span>
          <DataStructure data={data.data_structure} />
        </div>
        <div className="documentation">
          {data.content.map((line, index) => (
            <Endpoint data={line} />
          ))}
        </div>
      </Grid>
    );
  }
}
