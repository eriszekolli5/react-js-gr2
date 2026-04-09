import react from 'react'
import StringProp from './components/StringProp';
import NumberState from './components/NumberState';
import StringState from './components/StringState';
import BooleanState from './components/BooleanState';
import InputState from './components/InputState';
import HomeWork from './components/HomeWork';

function App() {
  const firstName ="eris";
  const lastName ="zekolli";
  return (
    <>
    <StringProp firstName={firstName} lastName={lastName} />
    <NumberState />
    <StringState />
    <BooleanState />
    <InputState />
    <HomeWork />
    </>
  )
}

export default App;