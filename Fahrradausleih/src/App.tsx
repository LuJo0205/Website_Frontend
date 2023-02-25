import Home from './pages/home';
import Jonas from './pages/Jonas';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import { Route, Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import "./App.css"


const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      
        <Routes>
            <Route path="/" element={<><Home /></>} />
            <Route path="/Jonas" element={<><Jonas /></>} />
            <Route path="/SignIn" element={<><SignIn /></>} />
            <Route path="/SignUp" element={<><SignUp /></>} />
            
        </Routes>
        
      </QueryClientProvider>
    </>
  )
}

export default App