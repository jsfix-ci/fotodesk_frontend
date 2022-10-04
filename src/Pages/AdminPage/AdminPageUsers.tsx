// import React, {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {usersApi} from '../../api';
// import UserList from '../../components/User/UserList';
// import {UserModal} from '../../components/User/UserModal';
// import {UserSearchForm} from '../../components/User/UserSearchForm';
// import {RootState} from '../../store';
// import {authSlice} from '../../store/slices/auth.slice';

// export default function AdminPageUsers() {
//   const [search, setSearch] = useState('');

//   const {users, user: admin} = useSelector((state: RootState) => state.auth);
//   const dispatch = useDispatch();
//   const [modalOpen, setModalOpen] = useState(false);

//   function showHide() {
//     setModalOpen(!modalOpen);
//   }
//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const {data} = await usersApi.getUsers(admin.token!);

//         dispatch(authSlice.actions.setUsers(data));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     admin.token && getUsers();
//   }, [dispatch, admin?.token]);

//   async function handleSubmit(payload: any) {
//     try {
//       await usersApi.createUser({...payload, isApproved: true}, admin?.token!);
//       setModalOpen(false);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const handleSearch = (e: any) => {
//     setSearch(e.target.value);
//   };

//   const findUser = async (e: any) => {
//     try {
//       e.preventDefault();

//       const {data} = await usersApi.getUsers(admin?.token!, {search});
//       dispatch(authSlice.actions.setUsers(data));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="admin">
//       <div className="row">
//         <div className="col-12 ">
//           <UserSearchForm findUser={findUser} handleSearch={handleSearch} showHide={showHide} search={search} />

//           <UserList users={users?.data} admin={admin} />
//         </div>
//       </div>
//       <UserModal handleSubmit={handleSubmit} showHide={showHide} modalClosed={!modalOpen} />
//     </div>
//   );
// }

export {};
