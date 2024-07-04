import logo from './logo.svg';
import './App.css';
import routes from './routes'
import {useRoutes} from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
  let router=useRoutes(routes)
  return (
    <div className="App">
      <Topbar/>
      <div className='Maincontainer'>
        {router}
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
