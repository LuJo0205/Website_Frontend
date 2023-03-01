import Home from './pages/home';
import Jonas from './pages/Jonas';
import SignIn from './pages/SignIn';
import SignUp2 from './pages/SignUp2';
import { Route, Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';



const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      
        <Routes>
            <Route path="/" element={<><Home /></>} />
            <Route path="/Jonas" element={<><Jonas /></>} />
            <Route path="/SignIn" element={<><SignIn /></>} />
            <Route path="/SignUp2" element={<><SignUp2 /></>} />
            
        </Routes>
        
      </QueryClientProvider>
    </>
  )
}

export default App