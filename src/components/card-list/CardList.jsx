import React, {Component} from "react";
import Card from "../card-container/Card";
import "./cardList.css";

export default class CardList extends Component {
  render() {
    // console.log(this.props);
    // console.log("render from Cardlist");
    const {monsters} = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const {id} = monster;
          return <Card monster={monster} key={id} />;
        })}
      </div>
    );
  }
}
