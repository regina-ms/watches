import { useRef, useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Watches from './components/Watches/Watches';
import Watch from './components/Watch/Watch';


function App() {
  const [state, setState] = useState([]);
  const titleRef = useRef(null);
  const UTSRef = useRef(null);

  const handlerCLickAdd = () => {
    if (titleRef.current.value && UTSRef.current.value) {
      state.push({
        title: titleRef.current.value,
        UTS: UTSRef.current.value,
      })
      titleRef.current.value = "";
      UTSRef.current.value = "";
      setState([...state])
    } else {
      setState([])
    }
  }

  const handlerCLickRemove = (el) => {
    state.splice(state.indexOf(el), 1);
    setState([...state])
  }

  return (
    <div className='App'>
      <div className='app-header'>
        <Input title={'Название'} inputRef={titleRef} />
        <Input title={'Временная зона'} inputRef={UTSRef} />
        <button onClick={handlerCLickAdd}>Добавить</button>
      </div>
      <Watches>
        {state.map((el, index) => <Watch {...el} remove={() => handlerCLickRemove(el)} key={index} />)}
      </Watches>

    </div>
  );
}

export default App;
