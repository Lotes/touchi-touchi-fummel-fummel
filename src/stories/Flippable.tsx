import React, { useState } from 'react';
import './Flippable.css';

export enum FlipAxis {
  XAxis,
  YAxis
}

export interface FlippableProps {
  axis?: FlipAxis;
  width: string | number;
  height: string | number;
  front: JSX.Element;
  back: JSX.Element;
  isFront?: boolean;
  timeToFlipInMilliseconds?: number;
  onFlip?: (isFront: boolean) => void;
}

export const Flippable: React.FC<FlippableProps> = ({
  axis = FlipAxis.YAxis,
  width,
  height,
  front,
  back,
  onFlip,
  isFront = true,
  timeToFlipInMilliseconds = 800
}) => {
  const [stateIsFront, setStateIsFront] = useState(isFront);
  return (
    <div className="flippable-container"
      onClick={() => {
        const newIsFront = !stateIsFront;
        setStateIsFront(newIsFront);
        onFlip && onFlip(newIsFront)
      }}
      style={{
        width: width,
        height: height,
      }}>
      <div className="flippable-inner" style={{
        transform: `${stateIsFront ? "" : "rotate" + (axis === FlipAxis.XAxis ? "X" : "Y") + "(180deg)"}`,
        transition: `transform ${timeToFlipInMilliseconds}ms`
      }}>
        <div className="flippable-front">{front}</div>
        <div className={`flippable-back flippable-back-axis-${axis === FlipAxis.XAxis ? "x" : "y"}`}>{back}</div>
      </div>
    </div >
  );
};
