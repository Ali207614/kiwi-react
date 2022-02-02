import Header from "./containers/Header/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/SingleProductPage"
import Filter from "./pages/FilterPage"
import NameRegister from './pages/Register Page/NameRegister'
import EmailRegister from "./pages/Register Page/EmailRegister";
import PhoneRegister from "./pages/Register Page/PhoneRegister";
import PasswordRegister from "./pages/Register Page/PasswordRegister";
import NewsPage from './pages/NewsPage'
import Order from "./pages/orederPages/Order";
import News from "./containers/News/news"
import Message from "./containers/Message/Message"
import "./assets/style/main.css"


function App() {


  return (
    <Router className="App ">
      <div className="container-inner ">

        {/* <Header/> */}
        <Switch>
          <Route exact path="/"  component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/name-register" component={NameRegister} />
          <Route path='/email-register' component={EmailRegister} />
          <Route path='/phone-register' component={PhoneRegister} />
          <Route path='/password-register' component={PasswordRegister} />
          <Route path="/filter" component={Filter} />
          <Route path="/newsPage" component={NewsPage} />
          <Route path="/Order" component={Order} />
          {/* <Route path="/message" component={Message} /> */}

      
     

        </Switch>

      </div>
    </Router>
  );
}

export default App;
