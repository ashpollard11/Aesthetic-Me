import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../components/Product';

class Shop extends Component {
  state = {
    items: this.props.items,
  };

  filterCategory(category) {
    const { items } = this.props;
    const filteredCategory =
      category === 'All' ? items : items.filter(item => item.category === category);
    this.setState({ items: filteredCategory });
  }

  render() {
    const { items } = this.state;
    const { add } = this.props;

    return (
      <section>
        <nav className="filter-nav">
          <span className="category-link" onClick={() => this.filterCategory('All')}>
            ALL
          </span>{' '}
          |{' '}
          <span className="category-link" onClick={() => this.filterCategory('Masc')}>
            Masc
          </span>{' '}
          |{' '}
          <span className="category-link" onClick={() => this.filterCategory('Femme')}>
            Femme
          </span>{' '}
          |{' '}
          <span className="category-link" onClick={() => this.filterCategory('Non-Binary')}>
            Non-Binary
          </span>
        </nav>
        <div className="product-container">
          {items.map((item, index) => {
            return <Product key={index} item={item} add={add} />;
          })}
        </div>
      </section>
    );
  }
}

Shop.propTypes = {
  items: PropTypes.array,
  add: PropTypes.func,
};

export default Shop;
