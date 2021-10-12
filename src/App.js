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
import Footer from './component/Footer/Footer';
import SingleProduct from './component/SingleProduct/SingleProduct';

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
              <Route path ="/checkOut">
                  
              </Route>
              <Route path ="/review">
                  
              </Route>
              <Route path ="/inventory">
                  
              </Route>
              <Route path="/product/:productKey">
                <SingleProduct></SingleProduct>
              </Route>

              <Route path ="*">
                  <Error_404></Error_404>
              </Route>
          </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
