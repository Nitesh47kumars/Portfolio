import React from 'react';
import styled from 'styled-components';

const ConnectButton = ({ icon, alt }) => {
  return (
    <StyledWrapper>
      <button className="btn" aria-label={alt}>
        {icon}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e3edf7;
    padding: 1em;
    border-radius: 10px;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
                0px 0px 10px -1px rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: transform 0.5s;
    width: 35px;
    height: 35px;
  }

  .btn:hover {
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
                inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
                -0.5px -0.5px 0px rgba(255, 255, 255, 1),
                0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
                0px 12px 10px -10px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transform: translateY(0.2em);
  }

  /* Image and SVG take full button size */
  .btn img{
    width: 100%;
    height: 100%;
    transform:scale(13);
    object-fit: cover;
    transition: transform 0.5s, filter 0.5s, fill 0.5s;
  }

  /* Hover effects */
  .btn:hover img {
    transform: scale(15);
  }

  .btn:hover svg {
    transform: scale(0.9);
    fill: #333333;
  }
`;

export default ConnectButton;
