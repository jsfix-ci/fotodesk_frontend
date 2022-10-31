import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, Route, Routes} from 'react-router-dom';
import {authApi, baseApi, usersApi, watermarksApi} from './api';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Toaster from './components/Toaster/Toaster';
import {CommonLayout, WithSideBarLayout} from './layouts';
import {DetailPage, HomePage, NotFoundPage, RegisterPage, UserPage} from './Pages';
import AdminPage from './Pages/AdminPage/AdminPage';
import AdminPageDetailsEdit from './Pages/AdminPage/AdminPageDetailsEdit';
import AdminPageImages from './Pages/AdminPage/AdminPageImages';
import AdminPagePendingImages from './Pages/AdminPage/AdminPagePendingImages';
import AdminPagePendingUsers from './Pages/AdminPage/AdminPagePendingUsers';
import AdminPageUploadWatermarksStepOne from './Pages/AdminPage/AdminPageUploadWatermarksStepOne';
import AdminPageUploadWatermarksStepTwo from './Pages/AdminPage/AdminPageUploadWatermarksStepTwo';
import AdminPageUsers from './Pages/AdminPage/AdminPageUsers';
import AdminPageWaterMark from './Pages/AdminPage/AdminPageWaterMark';
import LogoutPage from './Pages/LogoutPage/LogoutPage';
import UploadImagesPageStepOne from './Pages/UploadImagesPage/UploadImagesPageStepOne';
import UploadImagesPageStepTwo from './Pages/UploadImagesPage/UploadImagesPageStepTwo';
import UserPageImages from './Pages/UserPage/UserPageImages';
import {AdminRoute, OnlyPublicRoute, PrivateRoute} from './RouteGuards/RouteGuards';
import {RootState} from './store';
import {authSlice} from './store/slices/auth.slice';
import {statisticSlice} from './store/slices/statistics.slice';
import {watermarkSlice} from './store/slices/watermark.slice';
import {isAdmin} from './utilities/helper';

function App() {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.auth);
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

  useEffect(() => {
    const getStatistics = async () => {
      if (user.token && isAdmin(user.role!)) {
        const {data: statistics} = await usersApi.getStats(user.token!);
        dispatch(statisticSlice.actions.setStatistics({...statistics}));
        const {data: watermarks} = await watermarksApi.getWatermarks(user.token!);
        dispatch(watermarkSlice.actions.setWatermarks(watermarks));
      }
    };
    getStatistics();
  }, [user.token, user.role, dispatch]);

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
              <Route path="/admin-page/pending-users" element={<AdminRoute component={AdminPagePendingUsers} />} />
              <Route path="/profile" element={<PrivateRoute component={UserPage} />} />
              <Route path="/profile/images" element={<PrivateRoute component={UserPageImages} />} />
              <Route path="/admin-page/images" element={<AdminRoute component={AdminPageImages} />} />
              <Route path="/admin-page/profile" element={<AdminRoute component={AdminPage} />} />
              <Route path="/images/upload/step-1" element={<PrivateRoute component={UploadImagesPageStepOne} />} />
              <Route path="/images/upload/step-2" element={<PrivateRoute component={UploadImagesPageStepTwo} />} />
              <Route path="/admin-page/pending-images" element={<AdminRoute component={AdminPagePendingImages} />} />
              <Route path="/admin-page/watermarks" element={<AdminRoute component={AdminPageWaterMark} />} />
              <Route path="/admin-page/upload-watermarks/step-1" element={<AdminRoute component={AdminPageUploadWatermarksStepOne} />} />
              <Route path="/admin-page/upload-watermarks/step-2" element={<AdminRoute component={AdminPageUploadWatermarksStepTwo} />} />
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
              <Route path="/details/edit/:id" element={<AdminPageDetailsEdit />} />
              <Route path="/logout" element={<LogoutPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
