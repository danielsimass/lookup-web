import { Waves } from '@mui/icons-material';
import {Switch, Route} from 'react-router-dom'
import { AppTopBar } from './components/appBar';
import { LogInPage } from './pages/login';
import { SingUpPage } from './pages/singup';
import { ViewInvoicePage } from './pages/viewInvoice';

export const AppRoutes = () => (
  <div>
  <Switch>
    <Route exact path={["/login", "/"]} component={LogInPage} />
      {/* <LogInPage />
    </Route> */}
    <Route exact path="/signup" component={SingUpPage} />
      {/* <SingUpPage />
    </Route> */}
    {/* <Route path="*">
      <AppTopBar /> */}
      <Route path='/view' component={ViewInvoicePage} />
    {/* </Route> */}
  </Switch>
</div>
  );


const CoreRoutes = () => (
  <Switch>  
    <Route path='/view' component={ViewInvoicePage} />
  </Switch>
)