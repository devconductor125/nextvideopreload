'use client';

import { ThemeProvider } from 'next-themes';
import { Provider as ReduxProvider } from 'react-redux';
import store from '~/store/store';

export interface ProvidersProps {
	children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
	<>
		<ReduxProvider store={store}>
			<ThemeProvider attribute="class" disableTransitionOnChange>
				{children}
			</ThemeProvider>
		</ReduxProvider>
	</>
);

export default Providers;
