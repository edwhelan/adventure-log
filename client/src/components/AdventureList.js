import React, { Component } from 'react'

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, addItems } from '../actions/itemActions';

import PropTypes from 'prop-types'

class AdventureList extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id)
  }

  render() {

    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup color='dark'>
          <TransitionGroup>
            {items.map(({ _id, name }) => {
              return (
                <CSSTransition key={_id} timeout={500} classNames='fade'>
                  <ListGroupItem color="dark">
                    <Button
                      className="remove-btn"
                      color='danger'
                      size='sm'
                      onClick={this.onDeleteClick.bind(this, _id)}
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
AdventureList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
})


export default connect(mapStateToProps, { getItems, deleteItem, addItems })(AdventureList);