import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import Images from './components/Images/Images';
import {Outlet, Route, Routes} from 'react-router-dom';
import {HomePage, AdminPage, DetailPage, NotFoundPage, UserPage} from './Pages';
import {CommonLayout, WithSideBarLayout} from './layouts';
import UploadStepTwo from './components/UploadStepTwo';
import UploadStep1 from './components/UploadStep1/UploadStep1';
import {baseApi} from './api';
import {useSelector} from 'react-redux';
import {RootState} from './store';
import {AdminRoute, OnlyPublicRoute, PrivateRoute} from './RouteGuards/RouteGuards';
import Register from './components/Register/Register';

function App() {
  const {user} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (user.token) {
      baseApi.updateHeader(user.token);
    }
  }, [user]);

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
              <Route path="/admin-page/users" element={<AdminRoute component={AdminPage} />} />
              <Route path="/profile" element={<PrivateRoute component={UserPage} />} />
              <Route path="/admin-page/images" element={<Images />} />
              <Route path="/images/upload/step-1" element={<UploadStep1 />} />
            </Route>
            <Route
              element={
                <CommonLayout>
                  <Outlet />
                </CommonLayout>
              }
            >
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<OnlyPublicRoute component={Register} />} />
              <Route path="/details/:id" element={<DetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/images/upload/step-2" element={<UploadStepTwo />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
