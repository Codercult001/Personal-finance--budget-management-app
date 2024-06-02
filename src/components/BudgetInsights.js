import React from 'react';

const BudgetInsights = ({ expenses, budgets }) => {
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const totalBudget = budgets.reduce((acc, budget) => acc + budget.amount, 0);

    return (
        <div>
            <h2>Budget Insights</h2>
            <p>Total Expenses: ${totalExpenses}</p>
            <p>Total Budget: ${totalBudget}</p>
            <p>{totalBudget - totalExpenses < 0 ? 'You are over budget!' : 'You are within budget.'}</p>
        </div>
    );
};

export default BudgetInsights;
