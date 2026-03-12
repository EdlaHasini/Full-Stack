import React from 'react';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f0f4f8',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2d3748',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#718096',
  },
};

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Dashboard</h1>
      <p style={styles.subtitle}>
        Welcome to Version 2 of the Student Dashboard deployed automatically from GitHub.
      </p>
    </div>
  );
}

export default App;