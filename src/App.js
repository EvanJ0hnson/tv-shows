import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddShow from './AddShow/AddShow';
import OnAir from './OnAir/OnAir';

import './App.css';

const getShows = async () => {
  let shows = [];

  try {
    shows = JSON.parse(localStorage.getItem('shows'));
  } finally {
    if (!shows) {
      const response = await fetch('https://api.tvmaze.com/shows');
      shows = await response.json();

      shows = shows.map(({ image, ...show }) => ({
        ...show,
        image: {
          medium: image.medium.replace('http://', 'https://'),
          original: image.original.replace('http://', 'https://'),
        },
      }));
    
      localStorage.setItem('shows', JSON.stringify(shows))
    }
  }

  return shows;
}

class App extends Component {
  state = {
    shows: [],
  }

  async componentDidMount() {
    const shows = await getShows();

    this.setState(() => ({ shows }));
  }

  render() {
    return (
      <div>
        <header>
          <h1>TV Shows</h1>
        </header>

        <main>
          <OnAir items={this.props.myShows} />
          <AddShow items={this.state.shows} />
        </main>

        <footer>
          <h6>Ivan Gerasimov, <a href="https://gerasimov.pw">gerasimov.pw</a></h6>  
        </footer>
      </div>
    );
  }
}

export default connect(
  state => ({ myShows: state.data })
)(App);
