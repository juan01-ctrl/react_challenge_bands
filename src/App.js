import './App.css'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react'
import Home from './components/Home';
import OnSession from './components/OnSession';
import Loader from './components/Loader';


function App() {
const {isAuthenticated, isLoading} = useAuth0()

if(isLoading) return <Loader/>
else{

  return (
    <div className="App">
      {isAuthenticated ? <OnSession/> : <Home/>}
    </div>
);
}
    
}

export default App;
