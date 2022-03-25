import React, { useReducer } from 'react';
import './style.css';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
};

function reduser(state, { type, payload }) {}

export default function App() {
  const [{ currentOperant, previousOperant, operation }] = useReducer(
    reduser,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous">
          {previousOperant} {operation}{' '}
        </div>
        <div className="current">{currentOperant}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  );
}
