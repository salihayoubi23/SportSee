// Importations nécessaires
import React, { useState, useEffect } from 'react';
import { useParams, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';
import Error from '../Components/Error/Error';
import { fetchUserData } from '../Service/Service';

// Définition du composant User
function User() {
  // Utilisation du hook useParams pour extraire les paramètres de l'URL
  const { id } = useParams();

  // Utilisation du hook useState pour gérer l'état des données utilisateur et des erreurs
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  // Utilisation du hook useEffect pour effectuer une action asynchrone lors du montage du composant
  useEffect(() => {
    // Définition de la fonction fetchData à l'intérieur du hook useEffect
    const fetchData = async () => {
      try {
        // Appel de la fonction fetchUserData avec l'ID d'utilisateur extrait de l'URL
        const data = await fetchUserData(id);
        // Mise à jour de l'état avec les données récupérées
        setUserData(data);
      } catch (error) {
        // Gestion des erreurs en cas d'échec de la récupération des données
        console.error(error);
        setError(error); // Mettez à jour l'état d'erreur
      }
    };

    // Appel initial de la fonction fetchData
    fetchData();
  }, [id]); // Utilisation de id comme dépendance pour que l'effet se déclenche lorsque l'ID change

  // Rendu conditionnel du composant en fonction de la présence d'une erreur
  if (error) {
    return <Error buttonMock={() => {}} />; // Utilisez le boutonMock pour réessayer la requête
  }

  // Rendu du composant avec le Header et le Main, passant les données utilisateur en tant que props
  return (
    <>
      <Header props={id} />
      <Routes>
        <Route path="/" element={<Main userData={userData} />} />
        {/* Ajoutez d'autres routes ici en fonction de vos besoins */}
        <Route
          path="activity"
          element={<Navigate to="/error" replace />}
        />
        <Route
          path="average-sessions"
          element={<Navigate to="/error" replace />}
        />
        <Route
          path="performance"
          element={<Navigate to="/error" replace />}
        />
      </Routes>
    </>
  );
}

// Exportation du composant User comme composant par défaut
export default User;
