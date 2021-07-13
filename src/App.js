import React, {useState, useCallback} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './users/pages/auth';
import { AuthContext } from './shared/content/auth-content';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(()=> {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(()=> {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path = "/" exact> 
          <Users/>
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId" exact>
            <UpdatePlace />
        </Route>
        <Redirect to = "/"/>
      </Switch>
    );
  } else{
    routes=(
      <Switch>
        <Route path = "/" exact> 
          <Users/>
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Redirect to = "/auth"/>
      </Switch>
    );
  }
  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <Router>
        <MainNavigation />
        <main>
            {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  )
  
}

export default App;
