import React, { Component } from 'react'
import Item from './item'

const Items = () => {
  
  const array = [
    {
      id:1,
      title: 'Стол',
      img: 'table.png',
      desc: 'Крутой стол',
      price: '$21.99'
    },
    {
      id:2,
      title: 'Стул',
      img: 'chair.png',
      desc: 'Крутейший стул',
      price: '$9.99'
    },
    {
      id:3,
      title: 'Вешалка напольная',
      img: 'veshalka.png',
      desc: 'Неплохая вешалка',
      price: '$9.99'
    },
    {
      id:4,
      title: 'Полка настенная',
      img: 'shelf.png',
      desc: 'Чёткая полка',
      price: '$8.99'
    },
    {
      id:5,
      title: 'Фикус декоративный',
      img: 'fikus.png',
      desc: 'Этот фикус наполнит ваш дом жизнью',
      price: '$4.99'
    },
    {
      id:6,
      title: 'Подушка однотонная',
      img: 'podushka.png',
      desc: 'Подушка для одиноких волков-холостяков. Крутая',
      price: '$5.99'
    },
    {
      id:7,
      title: 'Подушка полосатая',
      img: 'podushka_polos.png',
      desc: 'Идеальный выбор, если Вы семьянин',
      price: '$7.99'
    },
    {
      id:8,
      title: 'Настольная лампа',
      img: 'Lamp.png',
      desc: 'Яркая лампа для уютных вечеров',
      price: '$12.99'
    },
    {
      id:9,
      title: 'Кровать',
      img: 'bed.png',
      desc: 'Без такой кровати вы не сможете с кайфом поспать',
      price: '$70.99'
    },
    {
      id:10,
      title: 'Диван',
      img: 'couch.png',
      desc: 'С этим крутым диваном вы сможете с кайфом полежать',
      price: '$69.99'
    }
  ]

    return (
      <main>
        {array.map(el => 
            <Item key={el.id} item={el}/>
        )}
      </main>
    )
}

export default Items