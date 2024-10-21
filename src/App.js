import React from "react";
import { Routes, Route } from 'react-router-dom'
import Header from "./components/header"
import Footer from "./components/footer"
import Items from "./components/items"
import Main from "./components/main";

class App extends React.Component {
/*<Items items={this.state.items} />*/
  render () {
  return (
   <div className="wrapper">
     <Header />
     <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/items" element={<Items items={this.state.items}/>} />
     </Routes>
     <Footer />
   </div>
  );
  
}
constructor(props){
  super(props)
  this.state ={
    items: [
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
      },
    ]
  }
}
}

export default App;
