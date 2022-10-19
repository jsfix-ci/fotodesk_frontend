import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, Route, Routes} from 'react-router-dom';
import {authApi, baseApi, usersApi} from './api';
import Header from './components/Header/Header';
import Images from './components/Images/Images';
import Loader from './components/Loader/Loader';
import Toaster from './components/Toaster/Toaster';
import UploadStepOne from './components/UploadImages/UploadStepOne';
import UploadStepTwo from './components/UploadImages/UploadStepTwo';
import UserImages from './components/User/UserImages';
import Watermarks from './components/Watermarks/Watermarks';
import {CommonLayout, WithSideBarLayout} from './layouts';
import {DetailPage, HomePage, NotFoundPage, RegisterPage, UserPage} from './Pages';
import AdminPagePendingImages from './Pages/AdminPage/AdminPagePendingImages';
import AdminPagePendingUsers from './Pages/AdminPage/AdminPagePendingUsers';
import AdminPageUploadWatermarks from './Pages/AdminPage/AdminPageUploadWatermarks';
import AdminPageUsers from './Pages/AdminPage/AdminPageUsers';
import DetailsEditPage from './Pages/DetailPage/DetailsEditPage';
import {AdminRoute, OnlyPublicRoute, PrivateRoute} from './RouteGuards/RouteGuards';
import {RootState} from './store';
import {authSlice} from './store/slices/auth.slice';
import {statisticSlice} from './store/slices/statistics.slice';
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
              <Route path="/profile" element={<PrivateRoute component={UserPage} />} />
              <Route path="/profile/images" element={<PrivateRoute component={UserImages} />} />
              <Route path="/admin-page/images" element={<AdminRoute component={Images} />} />
              <Route path="/images/upload/step-1" element={<PrivateRoute component={UploadStepOne} />} />
              <Route path="/admin-page/pending-images" element={<AdminRoute component={AdminPagePendingImages} />} />
              <Route path="/admin-page/watermarks" element={<AdminRoute component={Watermarks} />} />
              <Route path="/admin-page/upload-watermarks" element={<AdminRoute component={AdminPageUploadWatermarks} />} />
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
              <Route path="/details/edit/:id" element={<DetailsEditPage />} />
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
