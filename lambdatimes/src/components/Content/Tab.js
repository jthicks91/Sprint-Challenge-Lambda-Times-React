import React from "react";
import PropTypes from "prop-types";

// determine tab matches prop by assinging/declaring new variable to what would be onClick event for props.selectTabHandler with the tab props before
// return statement;

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const selection = props.selectTabHandler(props.tab);
  return (
    <div
      className={props.selectedTab === props.tab ? "tab active-tab" : "tab"}
      onClick={selection}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

//using isRequired to make sure the correct data-type is always passed and a warning will be shown if not;

Tab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired
};

export default Tab;
