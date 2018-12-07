import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = ({ data }) => (
  <section>
    <div className="hero">
      <Link to={`${process.env.PUBLIC_URL}/shop`}>Explore Le Vibes</Link>
    </div>
    <section className="featured">
      <div className="cta-home">
        <Link to={`${process.env.PUBLIC_URL}/shop`}>Shop New Vibes</Link>
      </div>
      <blockquote>We cater to Millenials of all ages. You too, Gen Z teens. Find your ideal aesthetic to fit the current stress levels of your life.</blockquote>
    </section>
    <section className="feat-prod-section">
      <div className="feat-products">
        <Link to={`${process.env.PUBLIC_URL}/shop`}>Bulk Broz</Link>
      </div>
      <div className="feat-products">
        <Link to={`${process.env.PUBLIC_URL}/shop`}>Romanticized Nightlife</Link>
      </div>
      <div className="feat-products">
        <Link to={`${process.env.PUBLIC_URL}/shop`}>Nonbinary Vibes</Link>
      </div>
    </section>
  </section>

);

Home.propTypes = {
  data: PropTypes.array
};

export default Home;
