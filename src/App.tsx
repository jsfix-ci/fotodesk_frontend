import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Outlet, Route, Routes} from 'react-router-dom';
import {authApi, baseApi} from './api';
import Header from './components/Header/Header';
import Images from './components/Images/Images';
import Loader from './components/Loader/Loader';
import Toaster from './components/Toaster/Toaster';
import UploadStepOne from './components/UploadStepOne/UploadStepOne';
import UploadStepTwo from './components/UploadStepTwo/UploadStepTwo';
import UserImages from './components/User/UserImages';
import {CommonLayout, WithSideBarLayout} from './layouts';
import {DetailPage, HomePage, NotFoundPage, RegisterPage, UserPage} from './Pages';
import AdminPagePendingUsers from './Pages/AdminPage/AdminPagePendingUsers';
import AdminPageUsers from './Pages/AdminPage/AdminPageUsers';
import {AdminRoute, OnlyPublicRoute, PrivateRoute} from './RouteGuards/RouteGuards';
import {authSlice} from './store/slices/auth.slice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeUser = async (token: string) => {
      try {
        const {data} = await authApi.me(token);
        baseApi.updateHeader(token);
        dispatch(authSlice.actions.login({token, ...data}));
      } catch {
        localStorage.removeItem('token');
      }
    };
    const token = localStorage.getItem('token');
    if (token) {
      initializeUser(token);
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Loader />
      <Toaster />
      <Header />
      <div className="container">
        <div className="row p-2">
          <Routes>
            <Route
              element={
                <WithSideBarLayout>
                  <Outlet />
                </WithSideBarLayout>
              }
            >
              <Route path="/admin-page/users" element={<AdminRoute component={AdminPageUsers} />} />
              <Route path="/profile" element={<PrivateRoute component={UserPage} />} />
              <Route path="/profile/images" element={<PrivateRoute component={UserImages} />} />
              <Route path="/admin-page/images" element={<AdminRoute component={Images} />} />
              <Route path="/images/upload/step-1" element={<PrivateRoute component={UploadStepOne} />} />
              <Route path="/admin-page/pending-images" element={<AdminRoute component={AdminPageUsers} />} />
              <Route path="/admin-page/watermarks" element={<AdminRoute component={AdminPageUsers} />} />
              <Route path="/admin-page/pending-users" element={<AdminRoute component={AdminPagePendingUsers} />} />
            </Route>
            <Route
              element={
                <CommonLayout>
                  <Outlet />
                </CommonLayout>
              }
            >
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<OnlyPublicRoute component={RegisterPage} />} />
              <Route path="/details/:id" element={<DetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/images/upload/step-2" element={<PrivateRoute component={UploadStepTwo} />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
