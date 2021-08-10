import Header from './components/Header'
import SearchWord from './components/SearchWord'
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MainContainer from './components/MainContainer'
import Favorites from './components/Favorites'
import About from './components/About'
import {TotalProvider} from './components/totalContext/TotalContext'
function App() {
  return (
    <Router>
    <div className="container">
      <Header />
      <TotalProvider>
      <SearchWord />
      <Switch>
         <Route path="/" exact component={MainContainer} />
         <Route path="/cardList" component={Favorites} />
         <Route path='/about' component={About} />
      </Switch>
      </TotalProvider>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
