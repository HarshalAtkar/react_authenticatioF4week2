import React from 'react';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'; 
import Login from './components/login'; 
import Profile from './components/profiles'; 

const App = () => {
  return (
   <>
   <Login></Login>
    <Router>
      <Routes> 
        <Route path="/profiles" element={<Profile />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;