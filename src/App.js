import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Limelight from './containers/Limelight';
import Contact from './containers/Contact';
import Event from './containers/Events/Event';
import EventDetail from './containers/Events/EventDetail';

import NotFound from './components/NotFound';

import Layout from './HOC/Layout';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/events" component = {Event} />
        <Route exact path = "/events/:slug" component = {EventDetail} />
        <Route exact path = "/limelight" component = {Limelight} />
        <Route exact path = "/contact" component = {Contact} />
        <Route component = {NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
