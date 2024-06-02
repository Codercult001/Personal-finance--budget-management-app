import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BudgetForm from './components/BudgetForm';
import BudgetList from './components/BudgetList';
import ShepherdTour from './components/ShepherdTour';
import DataExport from './components/DataExport';
import ExpenseChart from './components/ExpenseChart';
import BudgetInsights from './components/BudgetInsights';
import Settings from './components/Settings';
import './components/styles.css';
import './components/ExpenseForm.css';
import './components/Settings.css';
import Dashboard from './components/Dashboard';

const App = () => {
    const [expenses, setExpenses] = useState([]);
    const [budgets, setBudgets] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [categories, setCategories] = useState(['Food', 'Transport', 'Utilities']);

    const handleAddExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const handleAddBudget = (budget) => {
        setBudgets([...budgets, budget]);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    const handleThemeChange = (theme) => {
        setDarkMode(theme === 'dark');
        document.body.classList.toggle('dark-mode', theme === 'dark');
    };

    const handleAddCategory = (category) => {
        setCategories([...categories, category]);
    };

    return (
        <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
            <header>
                <h1>Personal Finance Manager</h1>
                <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
                    {darkMode ? '🌞 Light Mode' : '🌜 Dark Mode'}
                </button>
            </header>
            <ExpenseForm onAddExpense={handleAddExpense} />
            <ExpenseList expenses={expenses} />
            <ExpenseChart expenses={expenses} />
            <BudgetForm onAddBudget={handleAddBudget} />
            <BudgetList budgets={budgets} />
            <BudgetInsights expenses={expenses} budgets={budgets} />
            <DataExport data={expenses} />
            <Settings
                onThemeChange={handleThemeChange}
                onCategoryAdd={handleAddCategory}
                categories={categories}
            />
            <ShepherdTour />
        </div>
    );
};


export default App;






