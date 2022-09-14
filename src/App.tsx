import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import Images from './components/Images/Images';
import {Outlet, Route, Routes} from 'react-router-dom';
import {HomePage, AdminPage, DetailPage, NotFoundPage, UserPage} from './Pages';
import {CommonLayout, WithSideBarLayout} from './layouts';
import UploadStepTwo from './components/UploadStepTwo';
import UploadStep1 from './components/UploadStep1/UploadStep1';
import {PrivateRoute, AdminRoute, OnlyPublicRoute} from './components/RouteGuards/RouteGuards';
import Register from './components/Register/Register';
import {useDispatch} from 'react-redux';
import {authSlice} from './store/slices/auth.slice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      authSlice.actions.login({
        token: 'sasasasas',
        role: 'korisnik',
        id: 798,
        firstName: 'Mile',
        lastName: 'lemi',
        displayName: 'stosasas',
        email: 'a@a.com',
      })
    );
  }, []);
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
