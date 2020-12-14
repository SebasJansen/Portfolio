import React, { Component } from 'react';
import Home from './views/Home';
import Blog from './views/Blog';
import Contact from './views/Contact';
import About from './views/About';
import Login from './views/Login';
import {Route} from 'react-router-dom';

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Home} exact />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
            </section>
        )
    }
}

export default Section
