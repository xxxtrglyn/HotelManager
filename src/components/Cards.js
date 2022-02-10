import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>ROOM</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Room 1'
              label='Free'
              path='/room1'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Room 2'
              label='Free'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Room 3'
              label='Hired'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Room 6'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Room 7'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Room 8'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Room 11'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Room 12'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Room 13'
              label='Luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
