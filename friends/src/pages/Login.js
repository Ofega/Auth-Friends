import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/Forms/LoginForm';
import LoadingIndicator from '../components/LoadingIndicator';
import onboardingBG from '../img/onboarding-bg.jpg';


const Login = props => {

  const { isLoading, toggleLoading } = props

  return (
      <>
        <Onboarding>
          <div className="hero-background"></div>
          <LoginForm 
            {...props} 
            toggleLoading={toggleLoading}
          />
        </Onboarding>
        { isLoading ? <LoadingIndicator /> : null }
      </>
  );
};

export default Login;

export const Onboarding = styled.main`
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  &:before {
    content: '';
    background: rgba(0, 0, 0, .5);
    display: block;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .hero-background {
    z-index: 1;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url(${onboardingBG});
  }
`