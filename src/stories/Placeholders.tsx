import React from 'react';
import './Placeholders.css';

export interface PlaceholderProps {
  text: string;
  color?: string;
  backgroundColor?: string;
  border?: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({
  text,
  color = "black",
  backgroundColor = "white",
  border = "1px black solid"
}) => {
  return (
    <div className="placeholder" style={{
      color,
      backgroundColor,
      outline: border
    }} >
      <div className="placeholder-text">{text}</div>
    </div >
  );
};

export const Front = () => (<Placeholder text="Front" backgroundColor="#FFEEEE" />)
export const Back = () => (<Placeholder text="Back" backgroundColor="#EEEEFF" />)
