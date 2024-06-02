import { useEffect } from 'react';
import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';

const Onboarding = () => {
  useEffect(() => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true,
        },
        classes: 'shepherd-theme-arrows',
        scrollTo: { behavior: 'smooth', block: 'center' },
      },
      useModalOverlay: true,
    });

    tour.addStep({
      id: 'intro',
      text: 'Welcome to the Budget Management App! Let us give you a quick tour.',
      attachTo: {
        element: '.intro-element',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'theme-toggle',
      text: 'Use this button to toggle between light and dark mode for better readability.',
      attachTo: {
        element: '.theme-toggle-button',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'dashboard',
      text: 'This is your dashboard where you can manage your budgets, view analytics, and more.',
      attachTo: {
        element: '.dashboard-element',
        on: 'right',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'budget-insights',
      text: 'Here you can get insights about your spending patterns and budget allocations.',
      attachTo: {
        element: '.budget-insights-element',
        on: 'left',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'add-budget',
      text: 'Click this button to add a new budget.',
      attachTo: {
        element: '.add-budget-button',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'export-data',
      text: 'Use this option to export your budget data for further analysis or record-keeping.',
      attachTo: {
        element: '.export-data-element',
        on: 'top',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Finish',
          action: tour.complete,
        },
      ],
    });

    tour.start();
  }, []);

  return null;
};

export default Onboarding;
