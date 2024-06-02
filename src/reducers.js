// reducers.js
import { combineReducers } from 'redux';

const initialBudgetState = {
  budgets: [],
};

const budgetReducer = (state = initialBudgetState, action) => {
  switch (action.type) {
    case 'ADD_BUDGET':
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
      };
    default:
      return state;
  }
};

const initialExpenseState = {
  expenses: [],
};

const expenseReducer = (state = initialExpenseState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  budget: budgetReducer,
  expense: expenseReducer,
});

export default rootReducer;
