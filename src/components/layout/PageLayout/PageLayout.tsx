import React, { Component } from "react";
import style from "./style.module.css";
export class PageLayout extends Component {
  render() {
    return <div className={style.pageLayout}>{this.props.children}</div>;
  }
}
