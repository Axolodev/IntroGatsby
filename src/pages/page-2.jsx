import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const StyledHeader = styled('h1')({
  color: 'darkgreen',
});

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <StyledHeader>Hi from the second page</StyledHeader>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
