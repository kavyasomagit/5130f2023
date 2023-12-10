import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Home, SingleHotel, SearchResults} from './pages'
import { AuthModal, Filter } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/hotels/:name/:address/:id/reserve" element = {<SingleHotel/>}/>
      <Route path="/hotels/:address" element={<SearchResults />} />
      {/* <Route path="/filters" element={<Filter/>} /> */}
      <Route path="/Auth" element= {<AuthModal/>} />
    </Routes>
    
  );
}

export default App;
