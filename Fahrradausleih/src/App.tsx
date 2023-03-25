import Home from './pages/home';
import Jonas from './pages/Jonas';
import SignIn2 from './pages/SignIn2';
import SignUp2 from './pages/SignUp2';
import Ausleihe from './pages/Ausleihe';
import Rückgabe from './pages/Rückgabe';
import Impressum from './pages/Impressum';
import ThankYou from './pages/ThankYou';
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
            <Route path="/Jonas" element={<><Jonas /></>} />
            <Route path="/SignIn2" element={<><SignIn2 /></>} />
            <Route path="/SignUp2" element={<><SignUp2 /></>} />
            <Route path="/Ausleihe" element={<><Ausleihe /></>} />
            <Route path="/Rückgabe" element={<><Rückgabe /></>} />
            <Route path="/AGBs" element={<><AGBs /></>} />
            <Route path="/Impressum" element={<><Impressum /></>} />
            <Route path="/ThankYou" element={<><ThankYou /></>} />
        </Routes>
        
      </QueryClientProvider>
    </>
  )
}

export default App