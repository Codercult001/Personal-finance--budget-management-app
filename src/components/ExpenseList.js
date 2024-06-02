import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
    const [reportType, setReportType] = useState('category');
    const [reportData, setReportData] = useState([]);

    useEffect(() => {
        setReportData(generateReport());
    }, [expenses, reportType]);

    const generateReport = () => {
        let report = {};

        if (reportType === 'category') {
            report = expenses.reduce((acc, expense) => {
                if (!acc[expense.category]) {
                    acc[expense.category] = 0;
                }
                acc[expense.category] += expense.amount;
                return acc;
            }, {});
        } else if (reportType === 'date') {
            report = expenses.reduce((acc, expense) => {
                const date = new Date(expense.date).toDateString();
                if (!acc[date]) {
                    acc[date] = 0;
                }
                acc[date] += expense.amount;
                return acc;
            }, {});
        }

        return Object.entries(report).map(([key, value]) => [key, value]);
    };

    const handleReportTypeChange = (e) => {
        setReportType(e.target.value);
    };

    return (
        <div>
            <h2>Expenses</h2>
            <label>
                Report Type:
                <select value={reportType} onChange={handleReportTypeChange}>
                    <option value="category">Category</option>
                    <option value="date">Date</option>
                </select>
            </label>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.description}: ${expense.amount}
                        <button onClick={() => onDeleteExpense(index)} aria-label={`Delete ${expense.description}`}>
                            Delete
                        </button>
                        <button onClick={() => onEditExpense(index)} aria-label={`Edit ${expense.description}`}>
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
            <h3>Expense Insights</h3>
            <Chart
                chartType="PieChart"
                data={[['Category', 'Amount'], ...reportData]}
                width="100%"
                height="400px"
                legendToggle
            />
        </div>
    );
};

export default ExpenseList;


