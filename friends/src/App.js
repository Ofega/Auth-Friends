import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// import axios from "axios";
// import styled from "styled-components";
// import { axiosWithAuth } from './utils/axiosWithAuth';


const App = ({ location }) => {

  const [ isLoading, setLoadingIndicator ] = useState(false); //Loading Indicator
  const [ isModalOpen, setModalOpen ] = useState(false); //Modal Toggle
  const [ isAuthenticated, setIsAuthenticated ] = useState(false); //Is User Authenticated (for private routes)

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
      <Switch location={location}>
        <Route 
          path="/login" 
          render={(props) => <Login 
            isLoading={isLoading}
            toggleLoading={toggleLoading}
            {...props} 
          />}
        />

        <Route path="/" render={
            props => (
                <Dashboard
                  {...props}
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



