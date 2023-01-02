import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>My name is Zaki.</p>

        <p>My favorite foods are:</p>
        <ul>
          <li>Pizza</li>
          <li>Ice Cream</li>
          <li>Donuts</li>
        </ul>

        <p>My favorite movies are:</p>
        <ol>
          <li>Star Wars</li>
          <li>Lord of the Rings</li>
          <li>Indiana Jones</li>
        </ol>
      </div>
    );
  }
}

export default MyComponent;
