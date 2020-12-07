import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const ThirdPage: React.FC<{}> = () => {
  return (
    <Layout>
      <h1>ThirdPage TypeScript</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default ThirdPage;
