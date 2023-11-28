// Import des composants React nécessaires
import React from 'react';
import NavBarComponent from '../Components/Main/NavBar/NavBar';
import BarChartComponent from '../Components/Main/BarChart/BarChart';
import LineChartComponent from '../Components/Main/LineChart/LineChart';
import RadarChartComponent from '../Components/Main/RadarChart/RadarChart';
import PieChartComponent from '../Components/Main/PieChart/PieChart';

// Import des icônes et des données simulées depuis le module DataMock
import flameIcon from '../Assets/flame.png';
import chickenIcon from '../Assets/chicken.png';
import appleIcon from '../Assets/apple.png';
import burgerIcon from '../Assets/cheeseburger.png';
import { USER_ACTIVITY__MOCK, USER_AVERAGE_SESSIONS__MOCK, USER_PERFORMANCE__MOCK, USER_MAIN_DATA__MOCK } from "./DataMock";

// Définition du composant principal
export default function MainComponent(props) {
  // Extrait les informations de l'utilisateur simulé
  const user = {
    userId: USER_MAIN_DATA__MOCK[0].id, // Identifiant de l'utilisateur
    firstName: USER_MAIN_DATA__MOCK[0].userInfos.firstName, // Prénom de l'utilisateur
    lastName: USER_MAIN_DATA__MOCK[0].userInfos.lastName, // Nom de l'utilisateur
    age: USER_MAIN_DATA__MOCK[0].userInfos.age, // Âge de l'utilisateur
    todayScore: [
      { value: USER_MAIN_DATA__MOCK[0].score * 100 || USER_MAIN_DATA__MOCK[0].todayScore * 100 }, // Score quotidien (calculé en pourcentage)
      { value: (1 - USER_MAIN_DATA__MOCK[0].score) * 100 || (1 - USER_MAIN_DATA__MOCK[0].todayScore) * 100 } // Score quotidien complémentaire (calculé en pourcentage)
    ],
    keyData: {
      kCal: USER_MAIN_DATA__MOCK[0].keyData.calorieCount, // Nombre de calories
      protein: USER_MAIN_DATA__MOCK[0].keyData.proteinCount, // Quantité de protéines
      carbohydrate: USER_MAIN_DATA__MOCK[0].keyData.carbohydrateCount, // Quantité de glucides
      lipid: USER_MAIN_DATA__MOCK[0].keyData.lipidCount // Quantité de lipides
    },
    activity: USER_ACTIVITY__MOCK[0].sessions, // Données d'activité de l'utilisateur
    timesSessions: USER_AVERAGE_SESSIONS__MOCK[0].sessions, // Données sur la durée moyenne des sessions
    performance: USER_PERFORMANCE__MOCK[0].data // Données de performance
  };

  // Rendu JSX du composant
  return (
    <div className="main">
      {/* Section de la barre de navigation */}
      <div className="main__navBar">
        <NavBarComponent />
      </div>
      {/* Section principale de la page */}
      <div className="main__page">
        {/* Section de bienvenue */}
        <div className="main__page__welcome">
          <h2 className="main__page__welcome__title">
            Bonjour <span className="main__page__welcome__title__red">{user.firstName}</span>
          </h2>
          <p className="main__page__welcome__msg">Félicitations ! Vous avez atteint vos objectifs hier 👏</p>
        </div>
        {/* Section à côté de la section principale */}
        <div className="NextToMain">
          {/* Section des graphiques */}
          <div className="main__page__charts">
            {/* Utilisation des composants spécifiques pour chaque type de graphique */}
            <BarChartComponent activity={user.activity} />
            <LineChartComponent timesSessions={user.timesSessions} />
            <RadarChartComponent performance={user.performance} />
            <PieChartComponent todayScore={user.todayScore} />
          </div>
          {/* Section d'informations */}
          <div className="main__info">
            {/* Affichage des informations sur les calories, protéines, glucides et lipides */}
            <div className="main__info__cat">
              <img className="main__info__cat__figure main__info__cat__figure--kCal" src={flameIcon} alt="logo Calories" />
              <div className="main__info__cat__box">
                <p className="main__info__cat__box__value">{user.keyData.kCal}kCal</p>
                <p className="main__info__cat__box__type">Calories</p>
              </div>
            </div>
            <div className="main__info__cat">
              <img className="main__info__cat__figure main__info__cat__figure--prot" src={chickenIcon} alt="logo Protéines" />
              <div className="main__info__cat__box">
                <p className="main__info__cat__box__value">{user.keyData.protein}g</p>
                <p className="main__info__cat__box__type">Protéines</p>
              </div>
            </div>
            <div className="main__info__cat">
              <img className="main__info__cat__figure main__info__cat__figure--glu" src={appleIcon} alt="logo Glucides" />
              <div className="main__info__cat__box">
                <p className="main__info__cat__box__value">{user.keyData.carbohydrate}g</p>
                <p className="main__info__cat__box__type">Glucides</p>
              </div>
            </div>
            <div className="main__info__cat">
              <img className="main__info__cat__figure main__info__cat__figure--lip" src={burgerIcon} alt="logo Lipides" />
              <div className="main__info__cat__box">
                <p className="main__info__cat__box__value">{user.keyData.lipid}g</p>
                <p className="main__info__cat__box__type">Lipides</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
