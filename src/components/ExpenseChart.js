import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ExpenseChart = ({ expenses }) => {
    const categories = [...new Set(expenses.map(expense => expense.category))];
    const data = {
        labels: categories,
        datasets: [
            {
                label: 'Expenses',
                data: categories.map(category =>
                    expenses.filter(expense => expense.category === category).reduce((acc, expense) => acc + expense.amount, 0)
                ),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return (
        <div>
            <h2>Expenses by Category</h2>
            <Bar data={data} />
        </div>
    );
};

export default ExpenseChart;
