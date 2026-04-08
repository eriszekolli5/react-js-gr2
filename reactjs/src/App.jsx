import react from 'react'
import StringProp from './components/StringProp';
import NumberState from './components/NumberState';
import StringState from './components/StringState';
import BooleanState from './components/BooleanState';
import inputState from './components/inputState';
import inputState1 from './components/inputState1';

function App() {
  const firstName ="eris";
  const lastName ="zekolli";
  return (
    <>
     <StringProp firstName={firstName} lastName={lastName} />
    <NumberState />
    <StringState />
     <BooleanState />
     <inputState />
     <inputState1 />
    </>
  )
}

export default App;