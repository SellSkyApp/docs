import React from "react";

const tcha = (arg) => ({
  __html: arg,
});

export default function Body({ data }) {
  if (data == null) {
    return <div className="body">This request has no body.</div>;
  } else {
    return (
      <div className="body">
        <table>
          <tr className="first_tr">
            <th className="col_name">Attribute name</th>
            <th className="col_desc">Description</th>
            <th className="col_req">Required</th>
          </tr>
          {data.map((line) => {
            return (
              <tr>
                <td
                  className="col_name"
                  dangerouslySetInnerHTML={tcha(line.name)}
                ></td>
                <td
                  className="col_desc"
                  dangerouslySetInnerHTML={tcha(line.description)}
                ></td>
                <td
                  className="col_req"
                  dangerouslySetInnerHTML={tcha(
                    line.required ? "<b>Yes</b>" : "No"
                  )}
                ></td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
