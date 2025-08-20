import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="cards">
        <div className='card'>
          <h1>Creativity</h1>
          <ul>
            <li>Visual storytelling</li>
            <li>Thinking outside the box</li>
            <li>Generating innovative ideas</li>
          </ul>
        </div>
        <div className='card'>
          <h1>Adaptability</h1>
          <ul>
            <li>Quick learner</li>
            <li>Open to feedback</li>
            <li>Comfortable with change</li>
          </ul>
        </div>
        <div className='card'>
          <h1>Time Management</h1>
          <ul>
            <li>Prioritizing tasks</li>
            <li>Meeting deadlines</li>
            <li>Staying organized under pressure</li>
          </ul>
        </div>
        <div className='card'>
          <h1>Teamwork & Collaboration</h1>
          <ul>
            <li>Working effectively in teams</li>
            <li>Cross-functional collaboration</li>
            <li>Respect for diverse perspectives</li>
          </ul>
        </div>
        
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cards {
    width: 350px;
    height: 350px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow: hidden;
  }

  .card {
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 2px;
    transition: 0.8s;
    background:rgba(225,225,225,0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

  .card:hover {
    flex: 4;
  }

  .card h1{
    font-size: 1.3rem;
    color:white;
    text-shadow: 1px 1px 10px black;
  }

  .card li{
    padding: 0.2em;
    text-align: center;
    transition: transform 5s;
    color: #00ffeb;
    font-size: 0.9rem;
    position: relative;
    z-index: 1;
  }
    
  .card ul{
    height:0px;
    width:80%;
    transition:0.61s;
    position: relative;
    top:20px;
  }
    
  .card:hover ul{
    height: 100px;
  }`;

export default Card;
