import React, { Component } from 'react'

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class AdventureList extends Component {
  state = {
    items: [
      { id: uuid(), name: 'sword' },
      { id: uuid(), name: 'shield' },
      { id: uuid(), name: 'arrows' },
      { id: uuid(), name: 'bow' },
    ]
  }

  componentDidMount() {
    console.log(`about to fetch`)
    fetch('/api/items')
      .then(r => r.json())
      .then(result => {
        console.log(`Here is your result ${result.name}`)
      })
  }
  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color='dark'
          style={{ maringBotton: '2rem' }}
          onClick={() => {
            const name = prompt('enter item');
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
              }))
            }
          }}
        >Add Item</Button>
        <ListGroup color='dark'>
          <TransitionGroup>
            {items.map(({ id, name }) => {
              return (
                <CSSTransition key={id} timeout={500} classNames='fade'>
                  <ListGroupItem color="dark">
                    <Button
                      className="remove-btn"
                      color='danger'
                      size='sm'
                      onClick={() => {
                        this.setState(state => ({
                          items: state.items.filter(item => item.id !== id)
                        }))
                      }}
                    >
                      &times;</Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              )
            })}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

export default AdventureList;