import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorComponent({ buttonMock }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redirigez l'utilisateur vers la page d'accueil ou une autre page de votre choix
    navigate('/mocked-data');
  };

  return (
    <div className="error">
      <h2 className="error__title">404 Not Found</h2>
      <p className="error__text">L'utilisateur que vous cherchez n'existe pas</p>
      <button onClick={handleButtonClick} className="error__link">
        Utilisez les données simulées ?
      </button>
    </div>
  );
}

export default ErrorComponent;
