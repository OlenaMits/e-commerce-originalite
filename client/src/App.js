import { ThemeProvider } from '@mui/material/styles';

import AppRoutes from './routes';
import theme from './theme';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ResponsiveAppBar from './components/Header/NewHeader';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<ResponsiveAppBar />
			<AppRoutes />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
