import React from 'react';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

export function PrivateRoute({component: Component, ...rest}: any) {
  const isLoggedIn = !!useSelector((state: any) => state.auth.user.token);
  if (isLoggedIn) return <Component {...rest} />;

  return <Navigate to={'/'} />;
}
export function AdminRoute({component: Component, ...rest}: any) {
  const isAdmin = useSelector((state: any) => state.auth.user.role === 'admin');
  const isLoggedIn = !!useSelector((state: any) => state.auth.user.token);

  if (isLoggedIn && isAdmin) {
    return <Component {...rest} />;
  }
  return <Navigate to={'/'} />;
}

export function OnlyPublicRoute({component: Component, ...rest}: any) {
  const isLoggedIn = !!useSelector((state: any) => state.auth.user.token);
  if (isLoggedIn) return <Navigate to={'/'} />;
  return <Component {...rest} />;
}
