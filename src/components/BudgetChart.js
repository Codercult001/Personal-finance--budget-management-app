import React from 'react';
import { Bar } from 'react-chartjs-2';

const BudgetChart = ({ budgets }) => {
    const data = {
        labels: budgets.map(budget => budget.category),
        datasets: [
            {
                label: 'Budget',
                data: budgets.map(budget => budget.amount),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return <Bar data={data} />;
};

export default BudgetChart;
