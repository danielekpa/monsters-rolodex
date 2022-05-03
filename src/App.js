import {Component} from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
      title: "",
    };
    // console.log("1");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return {monsters: users};
        })
      );
    // console.log("3");
  }

  componentDidUpdate() {
    // console.log("Component just updated");
  }

  onSearchChange = (e) => {
    const searchString = e.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchString,
      };
    });
  };

  onTitleChange = (e) => {
    const title = e.target.value.toLowerCase();
    this.setState(() => {
      return {
        title,
      };
    });
  };

  render() {
    const {monsters, searchString, title} = this.state;
    const {onSearchChange, onTitleChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search monsters"
          className="monsters-search-box"
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
