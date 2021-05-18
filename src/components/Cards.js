import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Wonderful WaterFalls!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/niagra.jpg'
              text='Niagra Waterfall'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/bangioc.jpg'
              text='Bangioc WaterFall'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/palouse.jpg'
              text='Palouse WaterFall'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/selijalandsfoss.jpg'
              text='Selijalandsfoss WaterFalls'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/virginia.jpg'
              text='Virginia WaterFalls'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
