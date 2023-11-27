// Importation des composants nécessaires de la bibliothèque Recharts
import { XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts';

// Définition du composant LineChart
export default function LineChartComponent(props) {
    // Extraction des données de la propriété timesSessions
    const data = props.timesSessions;

    // Ajout de points fictifs pour améliorer l'apparence du graphique
    const extendedData = [
        { day: 0, sessionLength: data[0].sessionLength },
        ...data,
        { day: 8, sessionLength: data[6].sessionLength },
    ];

    // Définition du composant de tooltip personnalisé
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="lineChart__label">
                    <p className="lineChart__label__time">{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    // Rendu du composant LineChart
    return (
        <div className='lineChart'>
            {/* Titre du graphique */}
            <h3 className='lineChart__title'>Durée moyenne des sessions</h3>

            {/* Conteneur du graphique Recharts */}
            <div className='lineChart__chart'>
                <LineChart width={354} height={175} data={extendedData} >
                    {/* Axe X */}
                    <XAxis dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#ffffff' }}
                        opacity={0.5}
                    />
                    {/* Axe Y (masqué) */}
                    <YAxis domain={[-5]} hide />
                    {/* Tooltip personnalisé */}
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    {/* Ligne du graphique */}
                    <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" strokeWidth={2} dot={false} activeDot={{ r: 7, stroke: "rgba(255,255,255,0.2)", strokeWidth: 16 }} />
                </LineChart>
            </div>

            {/* Élément pour le style du graphique */}
            <div className='lineChart__opacity'></div>
        </div>
    );
}
