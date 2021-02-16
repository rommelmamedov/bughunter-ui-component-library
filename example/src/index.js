import React from 'react'
import ReactDOM from 'react-dom'
//
import Bughunter from 'bughunter-ui-component-library'
import 'bughunter-ui-component-library/dist/index.css'

const { Button, Input } = Bughunter

const App = () => {
  console.log('🚀 ~ file: index.js ~ line 5 ~ Button', Bughunter)

  return (
    <div>
      <Button text='Create React Library Example 😄' />
      <Input text='Create React Library Example 😄' />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
