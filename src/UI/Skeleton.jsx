import React from 'react';
import styled from 'styled-components';

const Skeleton = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__skeleton card__description">       </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    padding: 1rem;
    text-align: center;
    border-radius: .8rem;
    background-color: #111111;
    border: 1px solid #505050;
  }

  .card__skeleton {
    background-image: linear-gradient(
  		90deg,
  		#ccc 0px,
  		rgb(229 229 229 / 90%) 40px,
  		#333 80px
  	);
    background-size: 300%;
    background-position: 100% 0;
    border-radius: inherit;
    animation: shimmer 1.5s infinite;
  }

  .card__description {
    width: 93%;
    min-height: 250px;
    height: 400px;
    margin: 0 2rem;
  }

  @keyframes shimmer {
    to {
      background-position: -100% 0;
    }
  }`;

export default Skeleton;
