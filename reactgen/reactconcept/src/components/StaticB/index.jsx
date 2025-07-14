import React from 'react';
import './index.css';

function StaticB() {
  return (
    <div>
      <header>React</header>
      <img src="/logo192.png" alt="React Logo" width="100" />
      <navigator>
         <li>Home</li>
         <li>Contact</li>
         <li>about</li>
      </navigator>
      <nav>
        <h1>Static B Component</h1>
        <p>This is a static component styled with CSS.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <ol>
          <li>Ordered Item 1</li>
          <li>Ordered Item 2</li>
          <li>Ordered Item 3</li>
        </ol>
      </nav>
    </div>
  );
}

export default StaticB;
