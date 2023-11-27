
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

export default function BarChartComponent(props) {
    const data = props.activity;

    // Calcul des valeurs maximales et minimales pour l'axe Y
    const maxKg = Math.max(...data.map(item => item.kilogram));
    const minKg = Math.min(...data.map(item => item.kilogram));
    const maxKcal = Math.max(...data.map(item => item.calories));

    // Composant de tooltip personnalisé
    const CustomTooltip = ({ active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className="barChart__label">
                    <p className="barChart__label__cat">{`${payload[0].value}kg`}</p>
                    <p className="barChart__label__cat">{`${payload[1].value}Kcal`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='barChart'>
            <div className='barChart__info'>
                <h3 className='barChart__info__title'>Activité quotidienne</h3>
                <div className='nextTo'>
                    <div className='barChart__info__color barChart__info__color--kg'></div>
                    <p className='barChart__info__legend'> Poids(kg)</p>
                    <div className='barChart__info__color barChart__info__color--kcal'></div>
                    <p className='barChart__info__legend'> Calories brûlées (kCal)</p>
                </div>
            </div>

            {/* Utilisation de ResponsiveContainer pour un graphique réactif */}
            <ResponsiveContainer width="100%" height="85%">
                <BarChart width={500} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" tickLine={false} axisLine={{ stroke: '#DEDEDE' }} tick={{ fill: '#9B9EAC' }} />
                    
                    {/* Axe Y pour le poids (kg) */}
                    <YAxis
                        yAxisId="kg"
                        orientation='right'
                        domain={[minKg - 1, maxKg + 1]}
                        ticks={[minKg - 1, (maxKg + minKg) / 2, maxKg + 1]}
                        allowDataOverflow={true}
                        axisLine={false}
                        tickLine={false}
                    />

                    {/* Axe Y caché pour les calories (kcal) */}
                    <YAxis
                        yAxisId="kcal"
                        hide
                        allowDataOverflow={true}
                        domain={[0, maxKcal + 100]}
                    />

                    {/* Tooltip personnalisé */}
                    <Tooltip content={<CustomTooltip />} />

                    {/* Barres pour le poids (kg) */}
                    <Bar dataKey="kilogram" fill="#282D30" yAxisId="kg" barSize={10} radius={[20, 20, 0, 0]} />

                    {/* Barres pour les calories (kcal) */}
                    <Bar dataKey="calories" fill='#E60000' yAxisId="kcal" barSize={10} radius={[20, 20, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
