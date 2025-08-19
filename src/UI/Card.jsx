import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <p><span>Box-1</span></p>
        <p><span>Box-2</span></p>
        <p><span>Box-3</span></p>
        <p><span>Box-4</span></p>
        <p><span>Box-5</span></p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 350px;
    height: 350px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow: hidden;
  }

  .card p {
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 2px;
    transition: 0.8s;
    background:rgba(225,225,225,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .card p:hover {
    flex: 4;
  }

  .card p span {
    padding: 0.2em;
    text-align: center;
    transition: transform 0.5s;
    text-transform: uppercase;
    color: #00ffeb;
    font-weight: "bold";
    letter-spacing: 0.1em;
    position: relative;
    z-index: 1;
  }

  .card p:hover span {
    transform: rotate(0);
  }

  .card p::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    z-index: 0;
    transition: opacity 0.5s;
    pointer-events: none;
    opacity: 0;
  }

  .card p:hover::before {
    opacity: 1;
  }`;

export default Card;
