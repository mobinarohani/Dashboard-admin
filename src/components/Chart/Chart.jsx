import React from 'react'
import { ResponsiveContainer, AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip } from 'recharts'
import './Chart.css'
export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div className='chart'>
            <h4 className="chartTitle">{title}</h4>
            <ResponsiveContainer width="100%" aspect={4}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="Sale" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#E7D37F" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#E7D37F" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    {grid && <CartesianGrid strokeDasharray="3 3" />}
                    <Tooltip />
                    <Area type="monotone" dataKey={dataKey} stroke="#E7D37F" fillOpacity={1} fill="url(#Sale)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
