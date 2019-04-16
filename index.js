/* eslint-disable indent */
/**
 *
 * TextField
 *
 */
// NOTE
// To create a date selector with an initial placeholder text message, use as="input" type="text" which will initially create a text field.
// Then use onFocus={this.switchToDate} to switch the field to a date selector field when the user clicks on it.
// Use onBlur={this.switchToText} to switch it back to a text field with placeholder text if the user leaves the field without entering a date.

// NOTE Example:

// <TextField
// placeholder="Start Date"
// type="date"
// onFocus={this.switchToDate}
// onBlur={this.switchToText}
// />

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from 'rebass';

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
    border: 1.5px solid #3a71ff;
    ::placeholder {
      opacity: 0;
    }
  }
`;

class TextField extends React.PureComponent {
  state = {
    opacity: '0',
    type: '',
  };

  componentDidMount() {
    if (this.props.value) {
      this.setState({ opacity: '1' });
    }
  }

  switchToDate = e => {
    const { id, value } = e.target;
    const x = document.getElementById(id);
    if (this.props.type === 'date' && value === '') {
      x.type = 'date';
      this.setState({ opacity: '1' });
    }
    this.setState({ opacity: '1' });
  };

  switchToText = e => {
    const { id, value } = e.target;
    const x = document.getElementById(id);
    if (this.props.type === 'date' && value === '') {
      x.type = 'text';
      this.setState({ opacity: '0' });
    }
    if (value === '') {
      this.setState({ opacity: '0' });
    }
  };

  render() {
    const { ...props } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 'fit-content',
        }}
      >
        <legend
          style={{
            fontSize: '12px',
            opacity: `${this.state.opacity}`,
            transition: 'opacity .25s ease-in-out',
          }}
        >
          {props.label}
        </legend>
        <RebassTextfield
          {...props}
          type={
            this.props.type === 'date' && this.props.value === ''
              ? this.state.type
              : this.props.type
          }
          as="input"
          name={this.props.name}
          id={this.props.name}
          width="180px"
          fontSize={2}
          rows={4}
          border={!this.props.border ? '1px solid #909090' : props.border}
          onFocus={this.switchToDate}
          onBlur={this.switchToText}
        >
          {props.children}
        </RebassTextfield>
      </div>
    );
  }
}

TextField.propTypes = { children: PropTypes.node.isRequired };

export default TextField;
