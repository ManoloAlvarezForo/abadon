import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <Link to={routes.COUNTER}>to Counter</Link>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}
