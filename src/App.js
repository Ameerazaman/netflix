import NavBar from "./componants/Navbar/NavBar";
import './App.css';
import Banner from "./componants/Banner/Banner";
import RowPost from "./componants/RowPost/RowPost";
import {actions,drama,orginals} from './urls'
function App() {
  return (
    <div>
      <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={orginals} title='Netflix orginals'/>
        <RowPost url={actions} title='Action' isSmall/>
        <RowPost url={drama} title='Drama' isSmall/>
      </div>
    </div>
  );
}

export default App;
