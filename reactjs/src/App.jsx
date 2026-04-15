import react from 'react'
import StringProp from './components/StringProp';
import NumberState from './components/NumberState';
import StringState from './components/StringState';
import BooleanState from './components/BooleanState';
import InputState from './components/InputState';
import HomeWork from './components/HomeWork';
import RenderList from './components/list-array/RenderList';
import ObjectList from './components/list-array/ObjectList';
import ListWork from './components/list-array/ListWork';

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
    <hr />
    <RenderList />
    <ObjectList />
    <hr />
    <hr />
    <ListWork />
    </>
  )
}

export default App;