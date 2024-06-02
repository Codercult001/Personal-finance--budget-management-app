import React, { useState } from 'react';

const BudgetForm = ({ onAddBudget, onAddRecurringBudget }) => {
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [isRecurring, setIsRecurring] = useState(false);
    const [frequency, setFrequency] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (category.trim() !== '' && amount.trim() !== '') {
            if (isRecurring && frequency.trim() !== '' && duration.trim() !== '') {
                onAddRecurringBudget({ category, amount: parseFloat(amount), frequency, duration });
            } else {
                onAddBudget({ category, amount: parseFloat(amount) });
            }
            setCategory('');
            setAmount('');
            setIsRecurring(false);
            setFrequency('');
            setDuration('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)} />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} />
            <label>
                Recurring Budget:
                <input
                    type="checkbox"
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)} />
            </label>
            {isRecurring && (
                <div>
                    <input
                        type="text"
                        placeholder="Frequency (e.g., weekly, monthly)"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)} />
                    <input
                        type="text"
                        placeholder="Duration (e.g., 3 months)"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)} />
                </div>
            )}
            <button type="submit">Add Budget</button>
        </form>
    );
};

export default BudgetForm;

