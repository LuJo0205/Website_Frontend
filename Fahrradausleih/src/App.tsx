import Home from './pages/home';
import Jonas from './pages/Jonas';
import SignIn2 from './pages/SignIn2';
import SignUp2 from './pages/SignUp2';
import Ausleihe from './pages/Ausleihe';
import Rückgabe from './pages/Rückgabe';
import { Route, Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.scss';



const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      
        <Routes>
            <Route path="/" element={<><Home /></>} />
            <Route path="/Jonas" element={<><Jonas /></>} />
            <Route path="/SignIn2" element={<><SignIn2 /></>} />
            <Route path="/SignUp2" element={<><SignUp2 /></>} />
            <Route path="/Ausleihe" element={<><Ausleihe /></>} />
            <Route path="/Rückgabe" element={<><Rückgabe /></>} />
        </Routes>
        
      </QueryClientProvider>
    </>
  )
}

export default App