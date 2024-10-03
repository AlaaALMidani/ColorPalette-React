import React, { useState } from "react";
import { ColorRectangle } from "./ColorRectangle";
import { ColorPaletteGenerator } from "../logic/logic";
import { Color } from "../logic/logic";
import { State } from "../logic/logic";
import Undo from "./undo-left.svg";
import Doo from "./undo-right.svg";
export const ColorPalette = () => {
  const [state, setState] = useState({ logic: new ColorPaletteGenerator() });
  let lockToggling = (id) => {
    state.logic.lockToggling(id);
    setState({ logic: state.logic });
  };
  const handleKeyDown = (event) => {
    if (event.key == " ") {
      event.preventDefault();
      state.logic.generatePallette();
      setState({ logic: state.logic });
    }
  };
  const undo = () => {
    state.logic.undo();
    setState({ logic: state.logic });
  };
  const doo = () => {
    state.logic.doo();
    setState({ logic: state.logic });
  };
  console.log(state.logic.currentState.colors);
  return (
    <div className="flex " onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="z-30 w-52 h-20 flex justify-around items-center bg-white bg-opacity-10 rounded-3xl absolute top-28 left-1/2">
        <div onClick={undo}>
          <img src={Undo} className="w-12 h-12 m-auto" />
        </div>
        <div onClick={doo}>
          <img src={Doo} className="w-12 h-12 m-auto" />
        </div>
        
      </div>
      {state.logic.currentState.colors.map((e) => {
        return (
          <ColorRectangle color={e} lockToggling={() => lockToggling(e.id)} />
        );
      })}
    </div>
  );
};
