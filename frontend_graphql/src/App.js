import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Comptes from '../src/components/compte/Comptes';
import Transactions from '../src/components/transaction/Transactions';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('comptes');

  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-xl font-bold text-gray-700">Compte App</h1>
              <div className="space-x-4">
                <button
                  onClick={() => setActivePage('comptes')}
                  className={`px-4 py-2 rounded ${
                    activePage === 'comptes'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  Comptes
                </button>
                <button
                  onClick={() => setActivePage('transactions')}
                  className={`px-4 py-2 rounded ${
                    activePage === 'transactions'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  Transactions
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="p-6">
          {activePage === 'comptes' && <Comptes />}
          {activePage === 'transactions' && <Transactions />}
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
