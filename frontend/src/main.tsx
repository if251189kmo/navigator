// libraries
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// logic
import { setupStore } from './redux/store';
import defaultTheme from './styles/theme/default';

// components
import ThemeProvider from './Components/ThemeProvider';
import AxiosInterceptor from './Components/AxiosInterceptor';
import App from './App';

// styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={setupStore()}>
      <ThemeProvider customTheme={defaultTheme}>
        <AxiosInterceptor>
          <App />
        </AxiosInterceptor>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);
