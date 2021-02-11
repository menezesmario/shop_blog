import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Leia nosso blog</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Café no Supermercado: Como Comprar?'
              label='dicas'
              path='/'
            />
            <CardItem
              src='images/drinkingcoffee.jpg'
              text='Os Benefícios do Café no trabalho e nos estudos'
              label='dicas'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Conheça 4 maneiras de reutilizar a borra do café em casa'
              label='Café e Saúde'
              path='/'
            />
            <CardItem
              src='images/capuccino.jpg'
              text='Qual é a diferença do cappuccino italiano e do cappuccino tradicional?'
              label='Receitas'
              path='/'
            />
            <CardItem
              src='images/img-8.jpg'
              text='O clima está quente e não ajuda? Invista em cafés gelados!'
              label='Receitas'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
