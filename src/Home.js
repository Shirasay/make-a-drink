import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Bartender from './Barman/BarmanMenu'
import Klient from './Klient/KlientMenu'

function Home() {
  return <>
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='home_container'>
            <a href='/barman'>Barman</a>
            <a href='/klient'>Klient</a>
          </div> 
        </Route>
        <Route path='/barman' component={Bartender}/>
        <Route path='/klient' component={Klient}/>
      </Switch>
    </Router>
  </>
}

export default Home;
