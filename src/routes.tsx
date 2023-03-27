import { Waves } from '@mui/icons-material';
import { Component, useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { AuthContext } from './auth/auth.context';
import { AppTopBar } from './components/appBar';
import { SideBar } from './components/sideBar';
import { CompaniesPage } from './pages/AdminPages/companies';
import { SuppliersPage } from './pages/AdminPages/suppliers';
import { UsersPage } from './pages/AdminPages/users';
import { LogInPage } from './pages/login';
import { SingUpPage } from './pages/singup';
import { ViewInvoicePage } from './pages/viewInvoice';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const {isAuthenticated, role} = useContext(AuthContext)
  console.log(isAuthenticated)
  return (
    <Route {...rest} render={props => (
        isAuthenticated ? (
    <>

    <AppTopBar />
    <SideBar role={role}/>
    <Component {...props} />
    </>
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )
  )} />
  )
};

export default PrivateRoute;

export const AppRoutes = () => (
  <div>
  <Switch>
    <Route exact path={["/login", "/"]} component={LogInPage} />
    <Route exact path="/signup" component={SingUpPage} />
    <PrivateRoute path='/users' component={UsersPage} />
    <PrivateRoute path='/companies' component={CompaniesPage} />
    <PrivateRoute path='/suppliers' component={SuppliersPage} />
    <PrivateRoute path='/releases' component={ViewInvoicePage} />
  </Switch>
</div>
  );
