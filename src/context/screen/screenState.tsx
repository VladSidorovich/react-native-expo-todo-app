// import React, { useReducer } from "react";
// import { CHANGE_SCREEN } from "../types";
// import { ScreenContext } from "./screenContext";
// import { screenReducer } from "./screenReducer";

// export const ScreenState = ({ children }: any) => {
//   const initState = {
//     id: null
//   };

//   const [state, dispatch] = useReducer(screenReducer, initState);

//   const changeScreen = (id: string) => dispatch({type: CHANGE_SCREEN, payload: id})

//   return (
//     <ScreenContext.Provider
//       value={{
//         changeScreen,
//         todoId: state
//       }}
//     >
//       {children}
//     </ScreenContext.Provider>
//   );
// };

import React, { useReducer } from 'react'
import { ScreenContext } from './screenContext'
import { screenReducer } from './screenReducer'
import { CHANGE_SCREEN } from '../types'

export const ScreenState = ({ children }: any) => {
  const [state, dispatch] = useReducer(screenReducer, null)

  const changeScreen = (id: any) => {
    dispatch({ type: CHANGE_SCREEN, payload: id })
  }

  return (
    <ScreenContext.Provider
      value={{
        changeScreen,
        todoId: state
      }}
    >
      {children}
    </ScreenContext.Provider>
  )
}