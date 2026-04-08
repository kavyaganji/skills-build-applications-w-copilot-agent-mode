import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light mb-4">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={process.env.PUBLIC_URL + '/octofitapp-small.svg'} alt="OctoFit Logo" className="App-logo" />
            OctoFit Tracker
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card text-center">
              <div className="card-header bg-primary text-white">
                <h1 className="display-4 mb-0">Welcome to OctoFit Tracker!</h1>
              </div>
              <div className="card-body">
                <p className="lead">Track your fitness, join teams, and compete on the leaderboard.</p>
                <a href="/activities" className="btn btn-success m-2">View Activities</a>
                <a href="/workouts" className="btn btn-info m-2">Explore Workouts</a>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
