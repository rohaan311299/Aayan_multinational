import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Products from "./Screens/Products";
import ProductScreen from "./Screens/ProductScreen";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";
import About from "./Components/About";

const App=()=> {
  return (
    <Router>
      <>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={Home} exact />
            <Route path="/products" component={Products} exact />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/about" component={About} />
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
