import React from 'react';
import { Route } from 'react-router-dom';
import ReviewForm from '../components/auth/ReviewForm'
const App = () => {
  return (
    <>
      <Route component={ReviewForm} path="/review" />
    </>
  );
};

export default App;