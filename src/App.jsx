import { Component } from 'react';
import './App.css';
import { CardList } from './components/molecules';
import { SearchField } from './components/atoms';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    this.handleSearchField = this.handleSearchField.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ monsters: data });
      });
  }

  handleSearchField(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <div className="search-container">
          <SearchField
            placeholder="Search Monsters"
            handleSearchField={this.handleSearchField}
          />
        </div>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
