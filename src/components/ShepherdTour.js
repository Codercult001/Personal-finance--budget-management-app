import React, { useEffect } from 'react';
import Shepherd from 'shepherd.js';

const ShepherdTour = () => {
    useEffect(() => {
        const tour = new Shepherd.Tour({
            defaultStepOptions: {
                classes: 'shepherd-theme-default',
            },
        });

        tour.addStep({
            id: 'step1',
            text: 'Welcome to the Personal Finance Manager! Click "Next" to add your first expense.',
            attachTo: {
                element: '.expense-form',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next,
                },
            ],
        });

        tour.start();
    }, []);

    return null;
};

export default ShepherdTour;
