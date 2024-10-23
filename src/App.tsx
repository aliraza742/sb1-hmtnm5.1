import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Horoscope } from './pages/Horoscope';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="horoscope" element={<Horoscope />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;