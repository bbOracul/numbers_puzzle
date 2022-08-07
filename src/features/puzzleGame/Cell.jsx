import React from "react";
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';

import { clickCell } from './puzzleGameSlice.js';

export default function Cell(props) {
  const { value, color, active, last } = props.cell;
   
  const dispatch = useDispatch();

  const ref = useRef();

  useEffect(() => {
    function handleClick(event) {
      dispatch(clickCell(props.cell));
    }   
    const element = ref.current;
    element.addEventListener('click', handleClick);
    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, [props.cell,dispatch]);

  return (
    <div className="flex justify-center items-center w-10 h-10">
      <div ref={ref}
        className={`box-border rounded-lg text-center flex justify-center items-center text-2xl ${active ? "border-2 border-red-400 w-10 h-10" : value ? "border-2 border-black w-9 h-9" : "w-9 h-9"
          }`}
        style={{ backgroundColor: value ? color : 'rgba(255, 255, 255, 0)' }}
      >
        {value ? value : ''}{last ? '.' : ''}
      </div>
    </div>
  );
}