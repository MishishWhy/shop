import React from "react";
import { Routes, Route } from 'react-router-dom'
import Header from "./components/header"
import Footer from "./components/footer"
import Items from "./components/items"
import Main from "./components/main";


class App extends React.Component {
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
}

export default App;
