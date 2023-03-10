import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import utils from './utils';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    
    const getData = () => {
        const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
        const data = genres.map((genre) => {
            const value = events.filter((event) =>
                event.summary.split(" ").includes(genre)
            ).length;
            return { name: genre, value };
        });
        return data;
    };
    useEffect(() => { 
        setData(() => 
        getData()); 
    }, [events]);
    
    return (
        <ResponsiveContainer height={400} >
            <PieChart width={400} height={400}>
                <Pie
                    data={getData}
                    cx={350}
                    cy={200}
                    labelLine={false}
                    outerRadius={100}
                    fill="8884d8"
                    dataKey="value"
                    label={({ name, percent }) => percent > 0 ? `${name} ${(percent * 100).toFixed(0)}%.` : "" }
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell ${index}`} fill={utils.colors[index]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default EventGenre;
