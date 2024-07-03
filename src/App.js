import logo from './logo.svg';
import './App.css';
import routes from './routes'
import {useRoutes} from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
function App() {
  let router=useRoutes(routes)
  return (
    <div className="App">
      <Topbar/>
     {router}
    </div>
  );
}

export default App;
