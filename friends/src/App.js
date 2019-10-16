import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { axiosWithAuth } from './utils/axiosWithAuth';


const App = ({ location }) => {

  const [ friends, setFriends ] = useState([])
  const [ isLoading, setLoadingIndicator ] = useState(false);
  const [ isModalOpen, setModalOpen ] = useState(false);
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  const toggleAuthenticated = () => {
    setIsAuthenticated(!isAuthenticated)
  }

  const toggleLoading = (bool) => {
    setLoadingIndicator(bool);
  }

  const showModal = (e) => {
    e.preventDefault();
    setModalOpen(!isModalOpen);
  }

  const addFriend = ( obj ) => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends/", obj)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const deleteFriend = (id) => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends`)
      .then(res => {
        setFriends(res.data);
        toggleLoading(false);
      })
      .catch(err => {
        toggleLoading(false); 
      })
  }, [])

  return ( 
      <Switch location={location}>
        <Route 
          path="/login" 
          render={(props) => <Login 
            isLoading={isLoading}
            toggleLoading={toggleLoading}
            toggleAuthenticated={toggleAuthenticated}
            {...props} 
          />}
        />

        <Route path="/" render={
            props => (
                <Dashboard
                  {...props}
                  friends={friends}
                  addFriend={addFriend}
                  deleteFriend={deleteFriend}
                  isLoading={isLoading}
                  toggleLoading={toggleLoading}
                  isModalOpen={isModalOpen}
                  showModal={showModal}
                />
              )
          }
        />
      </Switch>
  );
}

export default withRouter(App);



