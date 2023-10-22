import { Route,Routes } from 'react-router-dom';
import './App.css';
import SavedFiles from './pages/SavedFiles'
import Home from './pages/Home';

function App() {
  return (
    <Routes>
        <Route  path='*' element={<Home/>}/>
        <Route path='/saved' element={<SavedFiles />} />
    </Routes>
    
  );
}

export default App;
