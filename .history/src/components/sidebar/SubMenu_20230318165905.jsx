import React from 'react'

function SubMenu({item}) {
  return (
    <div>
      {item.icon}
      <p>{item.}</p>
    </div>
  )
}

export default SubMenu