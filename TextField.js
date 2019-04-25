/* eslint-disable indent */
/**
 *
 * TextField
 *
 */
// NOTE
// To create a date selector with an initial placeHolder text message, use as="input" type="text" which will initially create a text field.
// Then use onFocus={this.switchToDate} to switch the field to a date selector field when the user clicks on it.
// Use onBlur={this.switchToText} to switch it back to a text field with placeHolder text if the user leaves the field without entering a date.

// NOTE Set marginTop/mt on the child component instead of in the Styled Component to keep the top margin from being placed between the label and the TextField.

// NOTE Example:

// <TextField
// marginTop='20px'
// placeHolder="Start Date"
// type="date"
// onFocus={this.switchToDate}
// onBlur={this.switchToText}
// />

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Box } from 'rebass';

const RebassTextfield = styled(Card)`
  outline: none;
  border-radius: 4px;
  font-family: inherit;
  height: 56px;
  padding: 15px;
  transition: border-color 0.1s linear;

  :hover {
    border: solid 1px black;
    ::placeholder {
      color: black;
      opacity: 1;
    }
  }
  :focus {
    border: 1.5px solid #2e66ff;
    ::placeholder {
      opacity: 0;
    }
  }
`;

class TextField extends React.PureComponent {
  state = {
    opacity: '1',
    type: 'text',
  };

  componentDidMount() {
    if (this.props.value === '' || this.props.value === null) {
      this.setState({ opacity: '0' });
    }
  }

  switchToDate = e => {
    const { id } = e.target;
    const x = document.getElementById(id);
    if (this.props.type === 'date') {
      x.type = 'date';
      this.setState({ opacity: '1', type: 'date' });
    }
    this.setState({ opacity: '1' });
  };

  switchToText = e => {
    const { id, value } = e.target;
    const x = document.getElementById(id);
    if (this.props.type === 'date' && value === '') {
      x.type = 'text';
      this.setState({ opacity: '0' });
      document.activeElement.blur();
    }
    if (value === '') {
      this.setState({ opacity: '0' });
    }
  };

  render() {
    const { ...props } = this.props;
    return (
      <Box margin={props.margin} marginTop={props.marginTop}>
        <legend
          style={{
            fontSize: '12px',
            opacity: `${this.state.opacity}`,
            transition: 'opacity .25s ease-in-out',
            marginTop: '-18px',
          }}
        >
          {props.label}
        </legend>
        <RebassTextfield
          {...props}
          type={
            props.type === 'date' && props.value === ''
              ? this.state.type
              : this.props.type
          }
          margin="0"
          marginTop="0"
          as="input"
          id={props.name}
          width={props.width ? props.width : '180px'}
          fontSize={2}
          border={!props.border ? '1px solid #909090' : props.border}
          onFocus={this.switchToDate}
          onBlur={this.switchToText}
        />
      </Box>
    );
  }
}

TextField.propTypes = { name: PropTypes.node.isRequired };

export default TextField;
