import { useState } from 'react';
import NavBarComponent from './NavBar/NavBar';
import BarChartComponent from './BarChart/BarChart'
import LineChartComponent from './LineChart/LineChart'
import RadarChartComponent from './RadarChart/RadarChart'
import PieChartComponent from './PieChart/PieChart'
import ErrorComponent from '../Error/Error'

import flameIcon from '../../Assets/flame.png'
import chickenIcon from '../../Assets/chicken.png'
import appleIcon from '../../Assets/apple.png'
import burgerIcon from '../../Assets/cheeseburger.png'

// Définition du composant principal
export default function MainComponent(props) {
    // Utilisation du hook useState pour gérer l'état de la simulation de données
    const [simulateData, setSimulateData] = useState(false);

    // Fonction pour activer la simulation de données
    const enableDataSimulation = () => {
        setSimulateData(true); 
    }

    // Vérifie si les données utilisateur existent
    if (props.userData !== null) {
        // Vérifie si les données ont été simulées ou si la simulation est activée
        if (!props.userData.simulatedData || simulateData) {
            // Extrait les informations de l'utilisateur
            const user = props.userData.user[0];

            // Retourne la structure JSX du composant
            return (
                <div className="main">
                    <div className='main__navBar'>
                        <NavBarComponent />
                    </div>
                    <div className='main__page'>
                        <div className='main__page__welcome'>
                            <h2 className="main__page__welcome__title">Bonjour <span className="main__page__welcome__title__red">{user.firstName}</span></h2>
                            <p className="main__page__welcome__msg">Félicitations ! Vous avez atteint vos objectifs hier 👏</p>
                        </div>
                        <div className='NextToMain'>
                            <div className='main__page__charts'>
                                {/* Utilisation des composants spécifiques pour chaque type de graphique */}
                                <BarChartComponent activity={user.activity} />
                    
                                <LineChartComponent timesSessions={user.timesSessions} />
                                <RadarChartComponent performance={user.performance} />
                                <PieChartComponent todayScore={user.todayScore} />
                               
                                
                            </div>
                            <div className='main__info'>
                                {/* Affichage des informations sur les calories, protéines, glucides et lipides */}
                                <div className='main__info__cat'>
                                    <img className='main__info__cat__figure main__info__cat__figure--kCal' src={flameIcon} alt="logo Calories" />
                                    <div className='main__info__cat__box'>
                                        <p className='main__info__cat__box__value'>{user.keyData.kCal}kCal</p>
                                        <p className='main__info__cat__box__type'>Calories</p>
                                    </div>
                                </div>
                                <div className='main__info__cat'>
                                    <img className='main__info__cat__figure main__info__cat__figure--prot' src={chickenIcon} alt="logo Protéines" />
                                    <div className='main__info__cat__box'>
                                        <p className='main__info__cat__box__value'>{user.keyData.protein}g</p>
                                        <p className='main__info__cat__box__type'>Protéines</p>
                                    </div>
                                </div>
                                <div className='main__info__cat'>
                                    <img className='main__info__cat__figure main__info__cat__figure--glu' src={appleIcon} alt="logo Glucides" />
                                    <div className='main__info__cat__box'>
                                        <p className='main__info__cat__box__value'>{user.keyData.carbohydrate}g</p>
                                        <p className='main__info__cat__box__type'>Glucides</p>
                                    </div>
                                </div>
                                <div className='main__info__cat'>
                                    <img className='main__info__cat__figure main__info__cat__figure--lip' src={burgerIcon} alt="logo Lipides" />
                                    <div className='main__info__cat__box'>
                                        <p className='main__info__cat__box__value'>{user.keyData.lipid}g</p>
                                        <p className='main__info__cat__box__type'>Lipides</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            // Retourne le composant d'erreur si les données sont simulées
            return (
                <div className="main">
                    <div className='main__navBar'>
                        <NavBarComponent />
                    </div>
                    <ErrorComponent enableDataSimulation={enableDataSimulation}/>
                </div>
            )
        }
    }
}
