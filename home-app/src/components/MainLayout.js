import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SafeComponent from "./SafeComponent";

import Header from "HomeApp/Header";
import Footer from "HomeApp/Footer";

import PdpContent from "PdpApp/PdpContent";
import HomeContent from "HomeApp/HomeContent";
import CartContent from "CartApp/CartContent";

export default function MainLayout() {
    return(
        <Router>
            <div className="text-3xl mx-auto max-w-6xl">
                <SafeComponent><Header /></SafeComponent>
                <div className="my-10">
                    <Switch>
                        <Route exact path="/" component={HomeContent} />
                        <Route path="/product/:id" component={PdpContent} />
                        <Route path="/cart" component={CartContent} />
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}