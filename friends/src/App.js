import React, { useState, useEffect } from 'react';
import { combineReducers, createStore  } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { axiosWithAuth } from './utils/axiosWithAuth';
import { useLocalStorage } from './hooks/useLocalStorage';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import axios from "axios";
import styled from "styled-components";
import * as reducers from './state/reducers';

const rootReducer = combineReducers({
  friends: reducers.friendsReducer
})

const store = createStore(rootReducer);


const App = ({ location }) => {

  const [ plants, setPlants ] = useState([]); //All the plants for the user
  const [ isLoading, setLoadingIndicator ] = useState(false); //Loading Indicator
  const [ isModalOpen, setModalOpen ] = useState(false); //Modal Toggle
  const [ isAuthenticated, setIsAuthenticated ] = useLocalStorage('isAuthenticated', false); //Is User Authenticated (for private routes)
  const [ currentUser, setCurrentUser ] = useLocalStorage('username', ''); //Current Logged In User
  const [ currentUserID, setCurrentUserID ] = useState(''); //UserID for current loggedIn user. Used to post requests
  const [ token, setToken ] = useLocalStorage('token', ''); //User Token. Set to local storage during log in
  const [ newPlant, setNewPlant ] = useState(null); //Object to detect if a new plant is added and what should happen after


  const addCurrentUser = (user) => {
    setCurrentUser(user);
  }

  const addToken = (token) => {
    setToken(token);
  }

  const toggleAuthentication = () => {
    setIsAuthenticated(!isAuthenticated)
  }

  const toggleLoading = (bool) => {
    setLoadingIndicator(bool);
  }

  const showModal = (e) => {
    e.preventDefault();
    setModalOpen(!isModalOpen);
  }

  const addPlant = ( newPlantObj ) => {
    axiosWithAuth()
      .post("plants/plant", newPlantObj)
      .then(res => {
        setNewPlant(res.data);
        toggleLoading(false);
      })
      .catch(err => {
        toggleLoading(false); 
      })
  }

  const deletePlant = (plantid, plantObj) => {
    toggleLoading(true);
    axiosWithAuth()
      .delete(`plants/plant/${plantid}`)
      .then(res => {
        setNewPlant(plantObj);
        toggleLoading(false);
      })
      .catch(err => {
        toggleLoading(false); 
      })
  }


  useEffect(() => {
    if(currentUser !== '') {
      axios
        .get(`https://nchampag-watermyplants.herokuapp.com/getuser/${currentUser}`)
        .then(res => {
          setCurrentUserID(res.data.userid);
          setPlants(res.data.plants);
          toggleLoading(false);
        })
        .catch(err => {
          toggleLoading(false); 
        })
    }
  }, [currentUser, newPlant])

  return ( 
    <Provider store={store}>
      <Switch location={location}>
        <Route path="/login" component={Login} />
        <Route path="/" render={
              props => isAuthenticated ? (
                  <Dashboard
                    {...props}
                    plants={plants}
                    addPlant={addPlant}
                    deletePlant={deletePlant}
                    currentUser={currentUser}
                    currentUserID={currentUserID}
                    isLoading={isLoading}
                    toggleLoading={toggleLoading}
                    isModalOpen={isModalOpen}
                    showModal={showModal}
                    toggleAuthentication={toggleAuthentication}
                  />
                ) : (
                  <Redirect to={{ pathname: "/login" }} />
                )
            }
          />
      </Switch>
    </Provider>
  );
}

export default withRouter(App);

