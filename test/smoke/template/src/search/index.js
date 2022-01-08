'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
// import '../../commons/index.js'
import largeNumber from 'my-large-number-xwy'



class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      Test: null
    }
  }
  loadComponent = ()=> {
    import('./test.js').then(com=> {
      this.setState({Test: com.default})
    })
  }
  render() {
    const { Test } = this.state
    const aa = largeNumber('222', '111')
    console.log(aa, '-------------')
    return <div onClick={this.loadComponent}>
        search test
        { aa }
        { Test ? <Test/> : null }
      </div>
  }
}

ReactDOM.render(
  <Search/>,
  document.getElementById('root')
)