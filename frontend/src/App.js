import Collection from './components/Slide.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainBar from './components/NavBar.js'
import ShopNow from './components/Form.js'
// import Survey from './components/Survey.js'

function App() {
  return (
    <div className="App">
      <MainBar className='Navbar'/>
      <div>
        <h1 className='maintitle'>LOUIS VUITTON</h1>
        <h1 className='subtitle'>FALL/WINTER 2024</h1>
      </div>
      <div className='Collection'>
      <Collection/>
      <ShopNow className='Shop'/>
      </div>
      <div class="poll"></div>
    </div>
  );
}

export default App;
