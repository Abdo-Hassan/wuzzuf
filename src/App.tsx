import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import SkillOrJob from './pages/SkillOrJob/SkillOrJob';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/job/:jobId' element={<SkillOrJob />} />
        <Route path='/skill/:skillId' element={<SkillOrJob />} />
      </Routes>
    </>
  );
}

export default App;
