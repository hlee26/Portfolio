import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ProjectCards() {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/irishsat.png'
              text='Brainstormed for Floating Dragon challenge sent out by NASA and am in the middle of trying to create a prototype in collaboration 
              with a variety of different college of engineering majors Worked on assembling and problem shooting how the payload in the 
              project would be deployed Wrote code for deployment of node based on certain altitude'
              label='IrishSAT Computing Team'
              path='/services'
            />
            <CardItem
              src='images/burnout.png'
              text='Collaborated with a team to make a MATLAB app that visualized a large data set about Med student burnout'
              label='Engineering Computing Project'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
