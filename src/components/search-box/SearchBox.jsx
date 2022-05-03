import React, {Component, Fragment} from "react";
import searchBox from "./searchBox.css";

export default class SearchBox extends Component {
  render() {
    const {onChangeHandler} = this.props;
    return (
      <Fragment>
        <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={onChangeHandler}
        />
      </Fragment>
    );
  }
}
