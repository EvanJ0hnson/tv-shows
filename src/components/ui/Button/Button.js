/**
 * @module components/ui/Button
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/** @desc Styled button */
const SButton = styled.button`
  margin: 0;
  padding: 0;
  appearance: none;
  background: none;
  border: none;

  margin-top: .375rem;
  padding: .375rem .5rem;

  border-radius: var(--border-radius-m);

  cursor: pointer;

  color: white;
  background-color: var(--color-secondary);

  transition-property: background-color, box-shadow, opacity;
  transition-duration: var(--transition-duration);
  transition-timing-function: var(--transition-function);

  &:hover {
    background-color: #CE93D8;

    box-shadow: 0 1px 10px rgba(0, 0, 0, .15);
  }
  
  &:active {
    background-color: var(--color-border);
  }
  
  &:focus {
    outline-color: var(--color-border);
    outline-style: dotted;
    outline-width: 1px;
    outline-offset: 1px;
  }

  &:disabled {
    background-color: var(--color-secondary);
    opacity: .25;
    cursor: not-allowed;
  }

  & + & {
    margin-left: .25rem;
  }
`;

/**
 * @desc Button
 * @exports
 */
export const Button = ({
  type,
  ...props,
}) => (
  <SButton
    {...props}
    type={type}
  ></SButton>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button',
};

/**
 * @exports default
 */
export default Button;
