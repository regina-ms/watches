import React from 'react'

export default function Input({title, inputRef}) {
  return (
    <div>
        <div className='title'>{title}</div>
        <input ref={inputRef}></input>
    </div>
  )
}
