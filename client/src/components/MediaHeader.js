import React from 'react';
import { Media } from 'reactstrap';
import bagOfHolding from '../images/bag-of-holding.png';

const MediaHeader = () => {
  return (
    <Media className='media-headerPlace' >
      <Media left href="www.edwhe.com">
        <Media className='media-image' object src={bagOfHolding} alt="bag of holding" />
      </Media>
      <Media body>
        <Media heading>
          Add items to your bottomless bag
        </Media>
        It's dangerous to go alone, take this! An app for budding adventurers to add items to a database. Future revisions will allow users to assign to a party member.
      </Media>
    </Media>
  );
};

export default MediaHeader;