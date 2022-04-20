import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../layout/Footer';
import Nav from '../layout/Nav';
import {isAuthenticated} from './index'

const UserDashboard = ({history}) => {
    // const {user:{name,email}}=isAuthenticated()
  return <>
  <Nav/>
  {/* <h1>Name:{name}</h1>
  <h2>Email:{email}</h2> */}
  <Footer/>
  </>;
};

export default withRouter(UserDashboard);
