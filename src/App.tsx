import React from 'react';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import {HomePage, AdminPage, DetailPage, NotFoundPage, RegisterPage, UserPage} from './Pages';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/details/:id" element={<DetailPage />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
