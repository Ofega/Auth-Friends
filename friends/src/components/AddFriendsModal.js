import React from 'react';
import styled from "styled-components";
import AddFriendsForm from './Forms/AddFriendsForm';


const AddFriendsModal = props => {

  const { isModalOpen, showModal, toggleLoading, addFriend } = props;

  return (
    isModalOpen && (
      <MainContainer>
        <div className="hero-background"></div>
        <AddFriendsForm 
          showModal={showModal}
          addFriend={addFriend}
          toggleLoading={toggleLoading}
        />
      </MainContainer>
    )
  );
};

export default AddFriendsModal;

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    background: rgba(0, 0, 0, .9);
    width: 100%;
    top: 0;
    justify-content: center;
    height: 100%;
    z-index: 1000;
    padding: 2rem;
`
