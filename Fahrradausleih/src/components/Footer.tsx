import React from 'react';
import './styles/footer.scss'
import { useNavigate } from "react-router-dom";
import ScrollButton from "../components/ScrollButton";

export default function App() {

  const navigate = useNavigate();
  return (
    <div className="footer">
        <a onClick={() => {
                            navigate('/AGBs', {replace: false});
                        }}>AGB</a>

            <a onClick={() => {
                            navigate('/Impressum', {replace: false});
                        }}>Impressum</a>

            
            <ScrollButton />            
    </div>
  );
}