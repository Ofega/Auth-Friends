import React, { useState } from 'react';
import styled from "styled-components";
import onboardingBG from '../img/onboarding-bg.jpg';
import  PlantsList  from "../components/PlantsList";
import AddPlantsModal from '../components/AddPlantsModal';
import LoadingIndicator from '../components/LoadingIndicator';


const Dashboard = props => {

    const { friends, addFriend, toggleLoading, deleteFriend, showModal, isLoading, isModalOpen } = props

    return (
        <MainContainer>
            <header>
                <img src={onboardingBG} alt="Header Background" />
                <div className="header-content">
                    <h1>Welcome!!!</h1>
                   
                    <button onClick={showModal}>
                        +
                    </button>
                </div>
            </header>
            <PlantsList friends={friends} deleteFriend={deleteFriend} />
            <AddPlantsModal 
                showModal={showModal}
                isModalOpen={isModalOpen}
                addFriend={addFriend}
                toggleLoading={toggleLoading}
            />   
            
            { isLoading ? <LoadingIndicator /> : null }
        </MainContainer>
    );
}

export default Dashboard;

const MainContainer = styled.div`
    min-height: 100vh;

    header {
        height: 27vh;
        background: rgba(0, 0, 0, .5);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            position: relative;
            max-width: 1140px;
            margin: 0 auto 1rem;
            width: 100%;
            padding: 0 2rem;

            h1 {
                position: relative;
                color: #fff;
                font-size: 2.3rem;
                margin: 0;

                @media (min-width: 500px) {
                    font-size: 3rem;
                }
            }

            button {
                color: #fff;
                font-size: 3rem;
                font-weight: 600;
                outline: 0;
                border: none;
                background: #419BA0 none;
                text-align: center;
                border-radius: 50%;
                box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
                user-select: none;
                transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
                -webkit-tap-highlight-color: transparent;
                position: absolute;
                right: 2rem;
                bottom: -40px;
                width: 70px;
                height: 70px;
    
                &:hover {
                    background-color: #63ADB1;
                    background-image: none;
                    -webkit-box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
                    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
                    color: rgba(255, 255, 255, .8);
                }
            }
        }
    }
`