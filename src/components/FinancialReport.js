// FinancialReport.js
const FinancialReport = ({ expenses, budgets }) => {
    // Calculate total expenses
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

    // Calculate total budgets
    const totalBudgets = budgets.reduce((total, budget) => total + budget.amount, 0);

    // Calculate remaining budget
    const remainingBudget = totalBudgets - totalExpenses;

    // Generate financial report
    const generateReport = () => {
        // You can format the report as needed, e.g., a summary or detailed breakdown
        return `
            Financial Report
            -----------------
            Total Expenses: $${totalExpenses}
            Total Budgets: $${totalBudgets}
            Remaining Budget: $${remainingBudget}
        `;
    };

    return (
        <div>
            <h2>Financial Report</h2>
            <p>Total Expenses: ${totalExpenses}</p>
            <p>Total Budgets: ${totalBudgets}</p>
            <p>Remaining Budget: ${remainingBudget}</p>
            <button onClick={() => alert(generateReport())}>Generate Report</button>
        </div>
    );
};

export default FinancialReport;
