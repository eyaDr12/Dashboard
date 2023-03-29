import React from 'react'

function SubMenu({item}) {
  return (
    <div>
      {item.icon}
      <p>{item.name}</p>
    </div>
  )
}

export default SubMenu