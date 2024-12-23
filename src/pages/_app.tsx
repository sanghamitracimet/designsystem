// src/pages/_app.tsx
import MainLayout from '../layouts/MainLayout';
import '../styles/globals.css';  // Ensure Tailwind's global styles are loaded

const App = ({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default App;
