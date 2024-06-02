// Dashboard.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Dashboard = ({ totalExpenses, totalBudget, remainingBudget }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [{
                        label: 'Monthly Expenses',
                        data: [200, 300, 400, 500, 600, 700], // Example data, replace with actual data
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        tooltip: {
                            enabled: true,
                            callbacks: {
                                label: (context) => `Expense: $${context.parsed.y}`
                            }
                        }
                    }
                }
            });
        }
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <canvas ref={chartRef} width="400" height="200"></canvas>
            <div>Total Expenses: ${totalExpenses}</div>
            <div>Total Budget: ${totalBudget}</div>
            <div>Remaining Budget: ${remainingBudget}</div>
        </div>
    );
};

export default Dashboard;
