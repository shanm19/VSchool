import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import CompanyInfo from "../components/landingPage";
import Shop from "../components/shop";
import Wrapper from "../containers/wrapper";

let routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Wrapper}>
            <IndexRoute component={CompanyInfo} />
            <Route path="shop" component={Shop}>
                <IndexRoute component={Shop}/>
                <Route path="secret" component={CompanyInfo}/>
            </Route>
        </Route>
    </Router>
);

export default routes;