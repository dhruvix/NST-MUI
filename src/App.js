import React,{useReducer} from 'react';
import './App.css';
import ButtonAppBar from './components/header/Header';
import TextFields from './components/form/Form';
import ImageZone from './components/imagezone/ImageZone';
import ResultImg from './components/dialog/ResultImg';
import Instructions from './components/dialog/Instructions';
import {reducer, INITIAL_STATE} from './global/Reducer';
import { ThemeProvider } from '@material-ui/core/styles';
import { lighttheme,darktheme } from './global/Material';


export const AppContext = React.createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ThemeProvider theme={state.darkMode? darktheme: lighttheme}>
    <AppContext.Provider value={{state,dispatch}}>
      <div className="App">
        <ButtonAppBar />
        <TextFields />
        <ImageZone />
        <ResultImg />
        <Instructions />
      </div>
    </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
