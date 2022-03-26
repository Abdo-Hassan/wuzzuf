import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import SkillOrJob from './pages/SkillOrJob/SkillOrJob';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* home page */}
        <Route path='/' element={<Home />} />
        {/* search page */}
        <Route path='/search' element={<Home />} />
        {/* job details page */}
        <Route path='/job/:jobId' element={<SkillOrJob />} />
        {/* skill details page */}
        <Route path='/skill/:skillId' element={<SkillOrJob />} />
      </Routes>
    </>
  );
}

export default App;
