import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
      props.cards.map(card => (
        <Card card={card} key={card.headline} />
      ))}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

//using isRequired to make sure the correct data-type is always passed and a warning will be shown if not;

Cards.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Cards;
