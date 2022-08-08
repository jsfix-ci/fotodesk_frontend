import React from 'react';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import {HomePage, AdminPage, DetailPage, NotFoundPage, RegisterPage, UserPage} from './Pages';
import SideBar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="row p-2 px-2">
        <SideBar isAdmin={true} />
        <div className="col-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin-page" element={<AdminPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/details/:id" element={<DetailPage />} />
            <Route path="/users/:id" element={<UserPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
