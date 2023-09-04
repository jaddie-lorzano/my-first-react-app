// import style from './App.module.scss';
import { Route, Switch } from 'react-router-dom';
import { AllMeetupsPage, NewMeetupPage, FavoritesPage } from './pages';
import { Layout } from './components/layout'
import AboutPage from './pages/about.page';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllMeetupsPage />
          </Route>
          <Route path='/new-meetup'>
            <NewMeetupPage />
          </Route>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
