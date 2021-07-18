import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Switch,Route,NavLink} from 'react-router-dom';
import About from './About';
import Department from './Department';
import EmployeeData from './EmployeeData';


function App() {
  return (
    <Router>
      <div>
    <div className="App">
      
      <ul>
      <li><NavLink activeStyle={{color:"purple"}}to='/' exact>About</NavLink></li>
        <li><NavLink activeStyle={{color:"purple"}} to='/EmployeeData'>Employee</NavLink></li>
        <li><NavLink activeStyle={{color:"purple"}}to='/Department'>Department</NavLink></li>
        
      </ul>
      </div>
<Switch>
      <Route exact path='/' component={About}></Route>
      <Route path='/EmployeeData' component={EmployeeData}></Route>
      <Route path='/Department' component={Department}></Route>
      </Switch>
     </div>
     </Router>
  );
}

export default App;
