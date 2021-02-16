import React from 'react'
import ReactDOM from 'react-dom'
//
import { Button } from 'bughunter-ui-component-library'
import { Input } from 'bughunter-ui-component-library'

const App = () => {
  return (
    <div>
      <Button text='Create React Library Example 😄' />
      <Input text='Create React Library Example 😄' />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
