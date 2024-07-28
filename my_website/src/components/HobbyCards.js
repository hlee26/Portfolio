import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ProjectCards() {
  return (
    <div className='cards'>
      <h1>Hobbies</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/civic.jpg'
              text='I love training in the gym with both wieghts and cardio. '
              label='Weight Lifting'
              path='/services'
            />
            <CardItem
              src='images/res.jpeg'
              text='Conducted tests to measure thermal deformations of machine tools
Analyzed data using MATLAB and compiled weekly reports on findings
'
              label='Sports'
              path='/services'
            />
            <CardItem
              src='images/res.jpeg'
              text='Conducted tests to measure thermal deformations of machine tools
Analyzed data using MATLAB and compiled weekly reports on findings
'
              label='Woodworking'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;