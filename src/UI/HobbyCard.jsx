import React from 'react';
import styled from 'styled-components';

const HobbyCard = () => {
  const hobbiesData = [
    {
      playingGame:[
        {
          name:"GTA 5",
          image:"/Hobbies_Icon/GTA_5.jpg",
        },
        {
          name:"God of War",
          image:"/Hobbies_Icon/God_of_War.jpg",
        },
        {
          name:"God of War",
          image:"/Hobbies_Icon/Pubg.jpg",
        },
      ]
    }
  ]
  return (
    <StyledWrapper>
      {hobbiesData.map((curr,idx)=>{
        const {playingGame} = curr;
        return <div key={idx} className='hobbycard'>
          {playingGame.map((icon,i)=>{
              return <div className='w-full h-[120%] flex justify-around'>
                <img
                  key={i}
                  src={icon.image}
                  alt={icon.name}
                  className='w-full h-full object-cover rotate-10'/>
              </div>
            }
          )}
          <div className='hobbycard-content'>
            <h1 className='hobbycard-title'>Playing Game</h1>
            <p className='hobbycard-body'>I enjoy playing video games as a way to relax and challenge my strategic thinking. It helps improve my problem-solving skills, teamwork, and quick decision-making under pressure.</p>
          </div>
        </div>
      })}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .hobbycard {
    position: relative;
    width: 300px;
    height: 108px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);

  }

  .hobbycard:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .hobbycard-content {
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    box-sizing: border-box;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .hobbycard:hover .hobbycard-content {
    top:50%;
    opacity: 1;
  }

  .hobbycard-title {
    margin: 0;
    font-size: 20px;
    color:black;
    text-align: center;
    font-weight: 700;
  }

  .hobbycard-body {
    margin: 2px 0 0;
    font-size: 14px;
    color: #444;
    line-height: 1.2;
  }

  .hobbycard:hover svg {
    scale: 0;
  }`;

export default HobbyCard;
