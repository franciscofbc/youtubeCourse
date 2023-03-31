import './App.css';

import { createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const AppContext = createContext()

function App() {
  const client = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })

  return (
    <div className="App">

    </div >
  );
}

export default App;

