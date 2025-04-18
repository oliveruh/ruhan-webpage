import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import CvRedirect from './pages/CurriculumRedirect';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cv" element={<CvRedirect />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
