import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

//Importacion de paginas
import Landing from '../../pages/landing/landing';
import NotFound from '../../pages/not_found/not_found';

const AppRoutes = (props:any) => {
    console.log(props);
    return <Router>
        <Switch>
            <Route path="/" component={Landing} />
            <Route path="/not_found" component={NotFound} exact />
        </Switch>
    </Router>
}

export default AppRoutes;