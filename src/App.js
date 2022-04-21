import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Category from "./pages/Category";
import React from "react";
import Recipe from "./pages/Recepi";

export default function App() {
  return (
    <div>
      <Header />
      <main className="container content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contact} />
          <Route path="/category/:name" component={Category} />
          <Route path="/meal/:id" component={Recipe} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
