import ThemeToggle from '../components/ThemeToggle';
import Onboarding from '../components/Onboarding';

const Home = () => {
  return (
    <div>
      <h1 className="intro-element">Welcome to Budget Management App</h1>
      <ThemeToggle />
      <div className="dashboard-element">
        {/* Your dashboard content */}
        <div className="budget-insights-element">
          {/* Budget Insights Content */}
        </div>
        <button className="add-budget-button">Add Budget</button>
        <div className="export-data-element">
          {/* Export Data Content */}
        </div>
      </div>
      <Onboarding />
    </div>
  );
};

export default Home;

