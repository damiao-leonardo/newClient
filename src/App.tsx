import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

import Routes from './routes/index';
import { ClientsProvider } from './hooks/useClients';

function App() {
  return (
    <>
      <ClientsProvider>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
        <GlobalStyle/>
      </ClientsProvider>
     </>
  );
}

export default App;
