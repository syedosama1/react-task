import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import MemberShipList from './components/MemberShipList';
import MemberDashboard from './components/MemberDashboard';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/member" element={<MemberDashboard />} />
          <Route path="/dashboard" element={<MemberShipList />} /> 
      
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
