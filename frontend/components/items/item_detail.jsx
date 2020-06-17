import React from 'react'

const ItemDetail = (props) => (
  <div className="item-details">
    <ul>
      <li>
        { props.item.name }
      </li>
      <li>
        { props.item.price }
      </li>
      <li>
        { props.item.happiness }
      </li>
    </ul>
  </div>
);

export default ItemDetail;
