// import style from "./App.module.scss";
import { Route, Switch } from "react-router-dom";
import { AllMeetupsPage, NewMeetupPage, FavoritesPage } from "./pages";
import { Layout } from './components/layout'

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
