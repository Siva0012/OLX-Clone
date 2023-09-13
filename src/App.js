import React , {useEffect , useContext} from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Header from './Components/Header/Header';
import SignupPage from './Pages/Signup'
import LoginPage from './Pages/Login'
import ViewPost from './Pages/ViewPost';
import Post from './Store/PostContext ';

import Context, { AuthContext, FirebaseContext } from './Store/Context';
import Create from './Components/Create/Create';


function App() {

  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(() =>{
    // console.log(user);
    firebase.auth().onAuthStateChanged((user) =>{
      setUser(user)
    })
  })
  return (
    <div>

      <Post>
        <Router>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/signup'>
            <SignupPage />
          </Route>
          <Route exact path='/login'>
            <LoginPage />
          </Route>
          <Route exact path='/create' >
            <Create />
          </Route>
          <Route exact path='/view'>
            <ViewPost />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
