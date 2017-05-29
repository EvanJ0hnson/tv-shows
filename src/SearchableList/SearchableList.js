import React, { Component } from 'react';
import List from '../List/List'

class SearchableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
      emptyMessage: this.props.emptyMessage || 'No Items Found'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  searchItem(query) {
    return query.length
      ? this.props.items.filter(x => x.title.toLocaleLowerCase().indexOf(query) >= 0)
      : this.props.items;
  }

  handleChange(event) {
    const searchQuery = event.target.value.toLowerCase();

    this.setState({
      items: this.searchItem(searchQuery),
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          className="input"
          onChange={this.handleChange}
        />

        <List items={this.state.items} emptyMessage={this.state.emptyMessage} />
      </div>
    );
  }
}


export default SearchableList;
