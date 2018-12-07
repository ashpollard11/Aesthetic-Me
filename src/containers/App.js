import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem, addItem } from '../actions';

import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Loader from './Loader';

const App = ({ data, items, cart, add, remove, itemCount }) => (
  <main>
    <Router basename={'/'}>
      <div className="App">
      <header>
        <h1>
          <Link to={`${process.env.PUBLIC_URL}/`}>Aesthetic Me</Link>
        </h1>
        <nav>
          <Link to={`${process.env.PUBLIC_URL}/shop`} >Vibez</Link>
          <Link to={`${process.env.PUBLIC_URL}/cart`} >Cart ( {itemCount} )</Link>
        </nav>
      </header>
        {/* <header className="App-header">
          <img src={logo} className="logo" alt="Duke Cannon" />
        </header> */}
        {/* <nav className="App-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link> ( {itemCount} )
            </li>
          </ul>
        </nav> */}
        <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => <Home data={data} />} />
        <Route path={`${process.env.PUBLIC_URL}/shop`} render={() => <Shop items={items} add={add} />} />
        <Route path={`${process.env.PUBLIC_URL}/cart`} render={() => <Cart cart={cart} remove={remove} />} />
        <footer>
          <p>All Vibes Reserved. &copy; {(new Date().getFullYear())}</p>
        </footer>
      </div>

    </Router>
    <Loader />
  </main>
);

const mapStateToProps = state => ({
  data: state.configuration.data,
  itemCount: state.configuration.itemCount,
  cart: state.configuration.cart,
  items: state.configuration.items,
});

const mapDispatchToProps = (dispatch, props) => ({
  add: item => dispatch(addItem(item)),
  remove: item => dispatch(removeItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// window.addEventListener("scroll", function(e){
//   if (document.body.scrollTop > 50) {

//   }
//  });
