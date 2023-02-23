import Home from './pages/home';
import Jonas from './pages/Jonas';
import { Route, Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import "./App.css"
import './NavBar.css'

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      
        <Routes>
            <Route path="/" element={<><Home /></>} />
            <Route path="/Jonas" element={<><Jonas /></>} />
        </Routes>
        
      </QueryClientProvider>
    </>
  )
}

export default App