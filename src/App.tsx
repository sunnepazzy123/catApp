import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Cats from './pages/Cat/Cats';
import Breed from './pages/Breed/Breed';
import Favorites from './pages/Favorite/Favorites';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 6, display: 'flex' }}>
            <Routes>
              <Route path='/'>
                <Route index element={<Cats />} />
              </Route>
              <Route path='/breeds'>
                <Route index element={<Breed />} />
              </Route>
              <Route path='/favorites'>
                <Route index element={<Favorites />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
