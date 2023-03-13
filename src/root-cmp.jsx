import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/styles/main.scss';

import { HomePage } from "./pages/HomePage";
import { WatcherIndex } from './pages/WatcherIndex';
import { MovieIndex } from './pages/MovieIndex';
import { MovieVideo } from './cmps/MovieVidoe';
import { UserProfile } from './cmps/UserProfile';



function App() {
  return (
    <Router>
      <div className="">
        <main >
          <Switch>
            <Route path="/movie/details" component={MovieVideo} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/movie" component={MovieIndex} />
            <Route path="/member" component={WatcherIndex} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>

      </div>
    </Router>

  );
}

export default App;
