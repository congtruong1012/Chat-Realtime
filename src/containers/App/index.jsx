import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import CheckToken from '../Features/CheckToken';
import PrivateRoute from '../Features/PrivateRoute';
import Login from '../Pages/Login';
import Messages from '../Pages/Messages';
import Register from '../Pages/Register';
import { checkToken, selectIsLoading } from './appSlice';

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!['/register'].includes(pathname)) dispatch(checkToken());
  }, []);

  return (
    <div>
      <div>
        {isLoading ? (
          <div className="h-25 flex justify-center items-center">
            <div className="loader" />
          </div>
        ) : (
          <Switch>
            <PrivateRoute path="/" component={Messages} exact />
            <CheckToken path="/login" component={Login} />
          </Switch>
        )}
      </div>
      <Route path="/register" component={Register} />
    </div>
  );
}

export default App;
