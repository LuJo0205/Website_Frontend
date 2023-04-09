import Home from './pages/home';
import SignIn2 from './pages/SignIn2';
import SignUp2 from './pages/SignUp2';
import Ausleihe from './pages/Ausleihe';
import Rückgabe from './pages/Rückgabe';
import Impressum from './pages/Impressum';
import ThankYouAusleihe from './pages/ThankYouAusleihe';
import ThankYouRückgabe from './pages/ThankYouRückgabe';
import AGBs from './pages/AGBs';
import { Route, Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.scss';
import CookiesNotification from './components/CookiesNotification';



const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CookiesNotification/>
      
        <Routes>
          <Route path="/" element={<><Home /></>} />
          <Route path="/SignIn2" element={<><SignIn2 /></>} />
          <Route path="/SignUp2" element={<><SignUp2 /></>} />
          <Route path="/Ausleihe" element={<><Ausleihe /></>} />
          <Route path="/Rückgabe" element={<><Rückgabe /></>} />
          <Route path="/AGBs" element={<><AGBs /></>} />
          <Route path="/Impressum" element={<><Impressum /></>} />
          <Route path="/ThankYouAusleihe" element={<><ThankYouAusleihe /></>} />
          <Route path="/ThankYouRückgabe" element={<><ThankYouRückgabe /></>} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App