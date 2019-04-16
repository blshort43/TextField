/* eslint-disable indent */
/**
 *
 * BassText
 *
 */
// NOTE
// To create a date selector with an initial placeholder text message, use as="input" type="text" which will initially create a text field.
// Then use onFocus={this.switchToDate} to switch the field to a date selector field when the user clicks on it.
// Use onBlur={this.switchToText} to switch it back to a text field with placeholder text if the user leaves the field without entering a date.

// NOTE Example:
// switchToDate = e => {
//   const x = document.getElementById(e.target.id);
//   x.type = 'date';
// };

// switchToText = e => {
//   const { id, value } = e.target;
//   const x = document.getElementById(id);
//   if (value === '') {
//     x.type = 'text';
//   }
// };

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
`;

const FieldSet = styled.fieldset`
  outline: none;
  border-radius: 4px;
  font-family: inherit;

  transition: border-color 0.1s linear;

  :hover {
    border: solid 1px black;
    ::placeholder {
      color: black;
      opacity: 1;
    }
  }
  /* :focus {
    border: 1.5px solid #3a71ff;
    ::placeholder {
      opacity: 0;
    }
  } */
  :focus-within {
    border: 1.5px solid #3a71ff;
    ::placeholder {
      opacity: 0;
    }
  }
`;

class TextField extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    return (
      <FieldSet
        name={this.props.name}
        id={this.props.name}
        border={
          !this.props.border
            ? {
                border: '1px solid #909090',
              }
            : {
                border: props.border,
              }
        }
        style={{
          width: '180px',
          margin: '0',
          borderRadius: '4px',
          padding: '0',
        }}
      >
        <legend
          style={{
            fontSize: '12px',
            marginBottom: '-9px',
            padding: '0',
            borderRadius: '4px',
            marginLeft: '6px',
          }}
        >
          Date
        </legend>
        <RebassTextfield
          {...props}
          as="input"
          width="180px"
          fontSize={2}
          rows={4}
        >
          {props.children}
        </RebassTextfield>
      </FieldSet>
    );
  }
}

TextField.propTypes = { children: PropTypes.node.isRequired };

export default TextField;
