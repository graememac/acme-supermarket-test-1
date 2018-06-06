import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

const root = document.getElementById("root")

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      FR1: 3.11,
      SR1: 5,
      CF1: 11.23
    };
  }

  countOccurencesOfItem (itemType, array) {
    let itemCount = 0

    array.forEach(item => {
      if (item === itemType) {
        itemCount++
      }
    })

    return itemCount
  }

  applyFruitTeaOffer(items, total) {

    let noOfTeas = this.countOccurencesOfItem('FR1', items)
    let discount = Math.floor(noOfTeas/2) * this.state.FR1
    let newTotal = total - discount

    return newTotal
  }

  applyStrawberriesOffer(items, total){

    let noOfStrawberries = this.countOccurencesOfItem('SR1', items)
    let discount = 0
    if (noOfStrawberries >= 3) {
      discount = (this.state.SR1 - 4.5) * noOfStrawberries
    }
    let newTotal = total - discount

    return newTotal
  }

  total (items) {
    let total = 0
    items.forEach(item => {
      total += this.state[item]
    })

    total = this.applyFruitTeaOffer(items, total)
    total = this.applyStrawberriesOffer(items, total)

    return total
  }

  render () {
    return (
      <Fragment>
        <p>
          Basket: FR1, SR1, FR1, CF1<br />
          Total price expected: £{this.total(['FR1', 'SR1', 'FR1', 'CF1'])}
        </p>

        <p>
          Basket: FR1, FR1<br />
          Total price expected: £{this.total(['FR1', 'FR1'])}
        </p>

        <p>
          Basket: SR1, SR1, FR1, SR1<br />
          Total price expected: £{this.total(['SR1', 'SR1', 'FR1', 'SR1'])}
        </p>
      </Fragment>
    )
  }
};

render(
  <App />,
  root
)