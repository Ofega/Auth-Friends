import React, { useState } from 'react';
import styled from "styled-components";
import onboardingBG from '../img/onboarding-bg.jpg';
import  PlantsList  from "../components/PlantsList";
import AddPlantsModal from '../components/AddPlantsModal';
import LoadingIndicator from '../components/LoadingIndicator';


const Dashboard = props => {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    const { 
        plants, 
        addPlant, 
        deletePlant, 
        toggleAuthentication, 
        currentUser, 
        currentUserID, 
        isLoading,
        toggleLoading,
        isModalOpen, 
        showModal 
    } = props;

    return (
        <MainContainer>
            <nav>
                <div className="navigation">
                    <h1 className="logo">
                        Water My plants
                    </h1>
                    <ul className={isOpen ? 'open' : null}>
                        <li onClick={toggleNav}><button onClick={toggleAuthentication}>Logout</button></li>
                    </ul>
                </div>
            </nav>
            <header>
                <img src={onboardingBG} alt="Header Background" />
                <div className="header-content">
                    <h1>Welcome {currentUser[0].toUpperCase() + currentUser.slice(1)}!</h1>
                    
                    <button onClick={showModal}>
                        +
                    </button>
                </div>
            </header>
            <AddPlantsModal 
                isModalOpen={isModalOpen} 
                currentUser={currentUser} 
                currentUserID={currentUserID} 
                addPlant={addPlant} 
                showModal={showModal} 
                toggleLoading={toggleLoading}
            />   
            { isLoading ? <LoadingIndicator /> : null }
        </MainContainer>
    );
}

export default Dashboard;

const MainContainer = styled.div`
    min-height: 100vh;

    nav {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 6;

        .navigation {
            max-width: calc(1140px - 4rem);
            margin: 0 auto;
            width: 100%;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 40px;
            padding: 0 2rem;
            position: relative;

            .logo {
                max-width: 270px;
                width: 100%;
                font-size: 2.5rem;
                font-family: 'Indie Flower', cursive;
                display: flex;
                align-items: center;
            }

            ul {
                display: none;
                list-style-type: none;
                width: calc(100% - 200px);
                position: relative;
                flex-direction: row;
                top: 0;
                position: static;

                li {  
                    width: auto;
                    padding: 0 2rem;

                    a, button {
                        padding: 2rem 0;
                        font-size: 1.4rem;
                        color: rgba(0, 0, 0, .6);
                        text-decoration: none;
                        font-weight: 500;
                        background: none;
                        border: none;
                        outline: none;
                        border-bottom: none;
                        display: inline-block;

                        &.selected {
                            border-bottom: 3px solid #419BA0;
                            color: #419BA0;
                            font-weight: 600;
                        }
                    }
                        
                    &:last-of-type {
                        position: absolute;
                        right: 0;
                        padding-right: 0;

                        button {
                            padding-right: 2rem;
                        }
                    }
                }

                @media (min-width: 768px) {
                    display: flex;
                }

                @media (max-width: 768px){
                    &.open {
                        display: flex;
                        position: absolute;
                        background: white;
                        flex-direction: column;
                        top: 60px;
                        right: 0;
                        width: 100%;
                        text-align: end;
                        max-width: 320px;
                        border-radius: 5px;
                        margin-right: 1rem;
                        border: 1px solid #ddd;

                        &:before  {
                            content: ' ';
                            position: absolute;
                            border: solid 15px transparent;
                            border-top: solid 0px transparent;
                            border-width: 14px;
                            border-color: #fff transparent transparent transparent;
                            right: .8rem;
                            transform: rotate(180deg);
                            top: -28px;
                        }
    
                        li {
                            width: 100%;
        
                            a, button {
                                width: 100%;
                                border-bottom: 1px solid #ddd;
        
                                &.selected {
                                    border-bottom: 1px solid #419BA0;
                                    color: #419BA0;
                                    font-weight: 600;
                                }
        
                                &:hover {
                                    color: #419BA0;
                                }
                            }
        
                            &:last-of-type {
                                position: static;
    
                                button {
                                    width: 100%;
                                    text-align: right;
                                    border-bottom: none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

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