import React, { Component } from 'react';

class App extends Component {
  render() {
    const { title, items } = this.props;
    return (
      <section>
        <header>
          <h2>{ title }</h2>  
        </header>
        <main>
          { items.map(x => `item ${x} `) }
        </main>
      </section>
    );
  }
}

export default App;
