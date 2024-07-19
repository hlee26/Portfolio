import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ProjectCards() {
  return (
    <div className='cards'>
      <h1>Work Experience</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/civic.jpg'
              text='Designed a project to assess urban walkability in downtown South Bend, using wearable sensors to monitor pedestrian heart rates 
Analyzed biometric and location data using Python Pandas, and TensorFlow to create a machine learning model to evaluate pedestrian stress levels and  improve urban walkability in downtown South Bend
'
              label='Lucy Civic Innovation Lab Intern'
              path='/services'
            />
            <CardItem
              src='images/res.jpeg'
              text='Conducted tests to measure thermal deformations of machine tools
Analyzed data using MATLAB and compiled weekly reports on findings
'
              label='Research Assistant at Notre Dame'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/paint.jpeg'
              text='Painted multiple summers taking on increasing responsibilities each year
Was responsible for driving the truck to job sites and managing my own crew for part of the summer
Led and organized team members to efficiently paint entire houses, successfully completing over fifty houses in one summer
'
              label='Painter for Tom Dits and Sons LLC'
              path='/services'
            />
            <CardItem
              src='images/trinity.png'
              text='Set up new computers for student use at my old high school
Installed software and performed tech maintenance on computers
'
              label='Technician at Trinity School'
              path='/products'
            />
            <CardItem
              src='images/quark.jpg'
              text='Conducted summer physics research at Notre Dame as part of the QuarkNet Program'
              label='QuarkNet Intern'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
