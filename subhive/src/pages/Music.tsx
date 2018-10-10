import * as React from "react";
import "./css/grid.css";
import "../index.css";

export interface Props {
  name: string;
}

class Music extends React.Component<Props> {
  componentDidMount() {
    console.log("hest"); /* Målet er at render min html, er den her "Mount" del relevant? */
  }
  render() {
    return (
      <div className="container-full music">
        <div className="container-12">
          <div className="header">
            <div className="title">Music</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Music;