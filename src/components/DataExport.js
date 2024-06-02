import React from 'react';
import { CSVLink } from 'react-csv';

const DataExport = ({ data }) => {
    const headers = [
        { label: 'Description', key: 'description' },
        { label: 'Amount', key: 'amount' },
        { label: 'Category', key: 'category' },
        { label: 'Date', key: 'date' },
    ];

    const csvReport = {
        data: data,
        headers: headers,
        filename: 'Expense_Report.csv'
    };

    return (
        <div>
            <button>
                <CSVLink {...csvReport} aria-label="Export data as CSV">
                    Export Data
                </CSVLink>
            </button>
        </div>
    );
};

export default DataExport;



