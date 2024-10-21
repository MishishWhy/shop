import React, { PureComponent } from 'react'
import Item from './item'

export class Items extends PureComponent {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
            <Item key={el.id} item={el}/>
        ))}
      </main>
    )
  }
}

export default Items