import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Outlet, Route, Routes} from 'react-router-dom';
import {authApi, baseApi, usersApi} from './api';
import Header from './components/Header/Header';
import Images from './components/Images/Images';
import Loader from './components/Loader/Loader';
import PendingImages from './components/PendingImagesPagination.tsx/PendingImages';
import Toaster from './components/Toaster/Toaster';
import UploadStepOne from './components/Upload/UploadStepOne';
import UploadStepTwo from './components/Upload/UploadStepTwo';
import UserImages from './components/User/UserImages';
import Watermarks from './components/Watermarks/Watermarks';
import {CommonLayout, WithSideBarLayout} from './layouts';
import {DetailPage, HomePage, NotFoundPage, RegisterPage, UserPage} from './Pages';
import AdminPagePendingUsers from './Pages/AdminPage/AdminPagePendingUsers';
import AdminPageUsers from './Pages/AdminPage/AdminPageUsers';
import {AdminRoute, OnlyPublicRoute, PrivateRoute} from './RouteGuards/RouteGuards';
import {authSlice} from './store/slices/auth.slice';
import {statisticSlice} from './store/slices/statistics.slice';
import {isAdmin} from './utilities/helper';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeUser = async (token: string) => {
      try {
        const {data} = await authApi.me(token);
        baseApi.updateHeader(token);
        dispatch(authSlice.actions.login({token, ...data}));
        if (isAdmin(data.role)) {
          const {data: statistics} = await usersApi.getStats(token);
          dispatch(statisticSlice.actions.setStatistics({...statistics}));
        }
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
              <Route path="/admin-page/pending-images" element={<AdminRoute component={PendingImages} />} />
              <Route path="/admin-page/watermarks" element={<AdminRoute component={Watermarks} />} />
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
