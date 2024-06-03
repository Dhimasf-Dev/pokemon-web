'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { store, persistor } from './redux/store';
import getQueryClient from './lib/getQueryClient';
import { PersistGate } from 'redux-persist/integration/react';

interface ProviderProps {
    children: React.ReactNode;
}

export const Providers: React.FC<ProviderProps> = ({ children }: { children: React.ReactNode }) => {
    const queryClient = getQueryClient();

    return (
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </QueryClientProvider>
    </Provider>
  )
}

