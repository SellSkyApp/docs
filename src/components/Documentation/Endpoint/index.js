import React from "react";
import "./styles.css";
import Body from "./Body";
import NeedsAuthentication from "./NeedsAuthentication";

const tcha = (arg) => ({
    __html: arg,
})

const Endpoint = ({data}) => (
  <div className="endpoint">
    <NeedsAuthentication data={data.authentication} />
    <span
      className="name"
      dangerouslySetInnerHTML={tcha(data.name)}
    ></span>

    <div
      className="description"
      dangerouslySetInnerHTML={tcha(data.description)}
    ></div>

    <div className="method_and_path centered_green">
      <span
        className="method"
        dangerouslySetInnerHTML={tcha(data.method)}
      ></span>
      <span dangerouslySetInnerHTML={tcha(data.path)}></span>
    </div>

    <div className="subtitle">Request body</div>
    <Body data={data.body} />

    <div className="subtitle">Response</div>
    <div
      className="centered_green"
      dangerouslySetInnerHTML={tcha(data.response_success)}
    ></div>

    <div
      className="response_error"
      dangerouslySetInnerHTML={tcha(data.response_error)}
    ></div>
  </div>
);

export default Endpoint;
