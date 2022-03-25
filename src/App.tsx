import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import JobDetails from './pages/job/JobDetails';
import Skill from './pages/Skill/Skill';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/job/:jobId' element={<JobDetails />} />
        <Route path='/skill/:skillId' element={<Skill />} />
      </Routes>
    </>
  );
}

export default App;
