import React from 'react';
import './styles/footer.scss'
import { useNavigate } from "react-router-dom";

export default function App() {

  const navigate = useNavigate();
  return (
    <div className="footer">
        <a onClick={() => {
                            navigate('/AGB', {replace: false});
                        }}>AGB</a>

            <a onClick={() => {
                            navigate('/Impressum', {replace: false});
                        }}>Impressum</a>

            <a onClick={() => {
                            navigate('/Kontakt', {replace: false});
                        }}>Kontakt</a>
    </div>
  );
}