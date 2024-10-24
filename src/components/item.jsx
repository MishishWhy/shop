import React, { useState } from 'react'

const Item = (props) => {

  const [visible, setVisible] = useState(false)

  return (
      <div className='item'>
        <img src={"./img/" + props.item.img} />
        <h2>{props.item.title}</h2>
        <p>{props.item.desc}</p>
        <b>{props.item.price}</b>
        <button onClick={() => setVisible(!visible)} className='show_the_tovar'>Показать</button>
        <div className={visible? "popup" : "hidden"}></div>
      </div>
  )
}


export default Item