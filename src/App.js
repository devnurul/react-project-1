import './App.css';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import Error_404 from './component/404/Error_404';

function App() {
 
  return (
    <>
      <Header></Header>
      <Router>
          <Switch>
              <Route exact path ="/">
                  <Shop></Shop>
              </Route>
              <Route path ="/shop">
                  <Shop></Shop>
              </Route>
              <Route path ="*">
                  <Error_404></Error_404>
              </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
