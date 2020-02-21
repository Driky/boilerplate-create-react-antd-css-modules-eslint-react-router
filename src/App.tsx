import React, { FunctionComponent, useState } from 'react';
import { Button, Menu, Icon } from 'antd';
import styles from './App.module.less';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App: FunctionComponent<{ initialKey?: string }> = ({ initialKey = 'home' }): JSX.Element => {
  const [currentKey, setCurrentKey] = useState(initialKey);

  const handleClick = (e: any) => {
    console.log('click ', e);
    setCurrentKey(e.key);
  };

  return (
    <Router>
      <div>
        <Menu onClick={handleClick} selectedKeys={[currentKey]} mode="horizontal">
          <Menu.Item key="home">
            <a href="./home" target="_blank" rel="noopener noreferrer">
              <Icon type="home" />
              Home
            </a>
          </Menu.Item>
          <Menu.Item key="about">
            <a href="./about" target="_blank" rel="noopener noreferrer">
              <Icon type="question" />
              About
            </a>
          </Menu.Item>
        </Menu>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function Home(): JSX.Element {
  return (
    <main className={styles.app}>
      <Button type="primary">Hello, Ant Design!</Button>
      <a href="About">I'm a link. Click me, please!</a>
    </main>
  );
}

function About(): JSX.Element {
  return <h2>About</h2>;
}

export default App;
