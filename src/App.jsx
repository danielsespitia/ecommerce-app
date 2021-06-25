import { Component } from 'react';
import './App.css';
import { CardList } from './components/molecules/CardList';

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
      .then((users) => this.setState({ monsters: users }));
  }

  handleSearchField(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          aria-label="search-field"
          plaheholder="Search Monsters"
          value={this.state.searchField}
          onChange={this.handleSearchField}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
