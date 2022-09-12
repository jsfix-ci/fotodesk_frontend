import React from 'react';
import Header from './components/Header/Header';
import Images from './components/Images/Images';
import {Outlet, Route, Routes} from 'react-router-dom';
import {HomePage, AdminPage, DetailPage, NotFoundPage, RegisterPage, UserPage} from './Pages';
import {CommonLayout, WithSideBarLayout} from './layouts';
import UploadStepTwo from './components/UploadStepTwo';
import UploadStep1 from './components/UploadStep1/UploadStep1';

function App() {

  
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="row p-2 px-2">
          <Routes>
            <Route
              element={
                <WithSideBarLayout>
                  <Outlet />
                </WithSideBarLayout>
              }
            >
              <Route path="/admin-page/" element={<AdminPage />} />
              <Route path="/users/:id" element={<UserPage />} />
              <Route path="/admin-page/images" element={<Images />} />
              <Route path="/uploadstep1" element={<UploadStep1 />} />
            </Route>
            <Route
              element={
                <CommonLayout>
                  <Outlet />
                </CommonLayout>
              }
            >
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/details/:id" element={<DetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/image/upload/step-2" element={<UploadStepTwo />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
