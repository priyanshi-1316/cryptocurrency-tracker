import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import { makeStyles } from 'tss-react/mui';

function App() {

  const useStyles=makeStyles()(()=>{
   return {
      App:{
        backgroundColor: "#14161a",
        color:"white",
        minHeight:"100vh",
      },
    };
});

  const {classes}=useStyles();

  return (
   <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Routes>
      <Route path="/" Component={Homepage} exact />
      <Route path="/coins/:id" Component={Coinpage}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
