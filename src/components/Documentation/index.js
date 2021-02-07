import React from "react";
import { Grid } from "@material-ui/core";

import "./style.css";

import Endpoint from "./Endpoint";
import DataStructure from "./DataStructure";

export default function Documentation({ source }){
  let API = require("../../constants/data_api/" + source);
  let data = {
    title: API[0],
    data_structure: API[1],
    content: API[2],
    current_file: source,
  };
  return (
    <Grid>
      <div className="title">{data.title}</div>
      <div className="data_structure">
        <span className="data_structure_title">{data.data_structure[0]}</span>
        <DataStructure data={data.data_structure} />
      </div>
      <div className="documentation">
        {data.content.map((line) => (
          <Endpoint data={line} />
        ))}
      </div>
    </Grid>
  );
}
