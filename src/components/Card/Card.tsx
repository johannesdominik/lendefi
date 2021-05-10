import React, { ReactNode } from 'react';
import './Card.css';

interface Props {
  heading: string;
  children: ReactNode;
  button: ReactNode;
};

export default function Card({ heading, children, button }: Props) {
  return (
    <div className="card">
      <h3 className="card__heading">{ heading }</h3>
      { children }
      <div className="card__button-container">
        { button }
      </div>
    </div>
  );
};