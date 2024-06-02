import React from 'react';
import './Settings.css';

const Settings = () => {
    return (
        <div className="settings">
            <h2>Settings</h2>
            <div>
                <h3>Notification Preferences</h3>
                <label>
                    <input type="checkbox" />
                    Enable email notifications
                </label>
            </div>
            <div>
                <h3>Theme</h3>
                <label>
                    <input type="radio" name="theme" />
                    Light
                </label>
                <label>
                    <input type="radio" name="theme" />
                    Dark
                </label>
            </div>
            <div>
                <h3>Currency</h3>
                <input type="text" placeholder="Enter your preferred currency" />
            </div>
        </div>
    );
};

export default Settings;

