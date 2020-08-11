import React from 'react';
import Navigation from '../Navigation';
import  { FirebaseContext } from '../Firebase';
import '../css/styles.css';

const TestComponent = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      return (
        <div class="wrapper">
          <header class="header">
            <Navigation />
          </header>
         {/* <div class="main">
            center
          </div> */}
          <aside class="aside">Aside 1</aside>
          <aside class="aside">Aside 2</aside>
          <footer class="footer">Footer</footer>
        </div>
      );
    }}
  </FirebaseContext.Consumer>
);

export default TestComponent;
