import React from 'react';
import { createStore, compose, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { axiosWithAuth } from './utils/axiosWithAuth';
import { useLocalStorage } from './hooks/useLocalStorage';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import axios from "axios";
import styled from "styled-components";
import reducer from './state/reducers/index';


const store = createStore (
  reducer,
  compose (
    applyMiddleware(thunk)
  )
);


const App = ({ location }) => {
  // const addCurrentUser = (user) => {
  //   setCurrentUser(user);
  // }

  // const addToken = (token) => {
  //   setToken(token);
  // }

  // const toggleAuthentication = () => {
  //   setIsAuthenticated(!isAuthenticated)
  // }

  // const toggleLoading = (bool) => {
  //   setLoadingIndicator(bool);
  // }

  // const showModal = (e) => {
  //   e.preventDefault();
  //   setModalOpen(!isModalOpen);
  // }

  // const addPlant = ( newPlantObj ) => {
  //   axiosWithAuth()
  //     .post("plants/plant", newPlantObj)
  //     .then(res => {
  //       setNewPlant(res.data);
  //       toggleLoading(false);
  //     })
  //     .catch(err => {
  //       toggleLoading(false); 
  //     })
  // }

  // const deletePlant = (plantid, plantObj) => {
  //   toggleLoading(true);
  //   axiosWithAuth()
  //     .delete(`plants/plant/${plantid}`)
  //     .then(res => {
  //       setNewPlant(plantObj);
  //       toggleLoading(false);
  //     })
  //     .catch(err => {
  //       toggleLoading(false); 
  //     })
  // }


  // useEffect(() => {
  //   if(currentUser !== '') {
  //     axios
  //       .get(`https://nchampag-watermyplants.herokuapp.com/getuser/${currentUser}`)
  //       .then(res => {
  //         setCurrentUserID(res.data.userid);
  //         setPlants(res.data.plants);
  //         toggleLoading(false);
  //       })
  //       .catch(err => {
  //         toggleLoading(false); 
  //       })
  //   }
  // }, [currentUser, newPlant])

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

