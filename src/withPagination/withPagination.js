import React, { Component } from 'react';

import Button from '../components/ui/Button';

/**
 * @desc HOC withPagination
 */
const withPagination = WrappedComponent => class Pagination extends Component {
  state = {
    itemTotal: this.props.items.length,
    pageSize: 10,
    pageNumber: 0,
    pageTotal: 0,
    firstPage: true,
    lastPage: false,
  }

  componentWillReceiveProps({ items }) {
    const itemTotal = items.length;
    const pageTotal = Math.floor(itemTotal / this.state.pageSize);

    this.setState(() => ({
      itemTotal,
      pageNumber: 0,
      pageTotal,
      firstPage: true,
      lastPage: !pageTotal,
    }));
  }

  nextPage = () => this.setState((prevState) => {
    const pageNumber = prevState.pageNumber + 1;

    return {
      pageNumber,
      firstPage: false,
      lastPage: pageNumber === prevState.pageTotal,
    };
  });

  prevPage = () => this.setState((prevState) => {
    const pageNumber = prevState.pageNumber - 1;

    return {
      pageNumber,
      firstPage: !pageNumber,
      lastPage: false,
    }
  });

  render() {
    const { pageSize, pageNumber } = this.state;
    const { items } = this.props;

    const from = pageNumber * pageSize;
    const to = from + pageSize;
    const visibleItems = items.slice(from, to)

    return (
      <div>
        <Button
          onClick={this.prevPage}
          disabled={this.state.firstPage}
        >← Prev</Button>
        <Button
          onClick={this.nextPage}
          disabled={this.state.lastPage}
        >Next →</Button>

        <WrappedComponent {...this.props} items={visibleItems} />
      </div>
    );
  }
};

/** @exports default */
export default withPagination;
