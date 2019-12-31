import React from 'react';
import {Compone} from './compone';
import {Comptwo} from './comptwo';
import {Compthree} from './compthree';
import {Compfour} from './compfour';




export function App(props) {
  return (
    <div>
    <div> <Compone/> </div>
    <div> <Comptwo/> </div>
    <div>
    <div> <Compthree/> </div>
    <div> <Compfour/> </div>
    <div> <Compthree/> </div>
    </div>
    </div>
  )
}

export default App;