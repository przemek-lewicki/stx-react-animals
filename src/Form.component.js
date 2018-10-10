import React, {Component} from 'react'

import './Form.css'

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      locked: false,
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    const data = new FormData(e.target)
    this.lock()
    this.submit(data)
  }

  lock() {
    this.setState({ disabled: true })
  }

  unlock() {
    this.setState({ disabled: false })
  }

  submit(data) {
 
    const amount = data.get('amount') 
    const type = data.get('type') !== 'random' ?
      data.get('type') : 
      this.selectType()
    
    // Shibe Api doesn't support CORS
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const url = `http://shibe.online/api/${type}?count=${amount}`

    fetch(proxyUrl + url)
      .then(res => res.json())
      .then(data => { 
        this.props.setAnimalsArr(data)
        this.unlock()
      })
      .catch(err => console.warn(err))

  }

  selectType() {
    const items = ['shibes', 'cats', 'birds']
    return items[Math.floor(Math.random()*items.length)]
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>

        <label htmlFor="amount">
          Wybierz ilość zdjęć
          <input id="amount" name="amount" type="number" min="1" max="10" defaultValue="1" required/>
        </label>

        <label htmlFor="type">
          Wybierz typ zwierzaka
          <select id="type" name="type">
            <option value="shibes">psy</option>
            <option value="cats">koty</option>
            <option value="birds">ptaki</option>
            <option value="random">losowe</option>
          </select>
        </label>

        <label>
          <input 
            type="submit" 
            value={!this.state.disabled ? "Szukaj" : "Ładowanie danych"}
            disabled={this.state.disabled}
          ></input>
        </label>

      </form>
    )
  }
}

export default Form