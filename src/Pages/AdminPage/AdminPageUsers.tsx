import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {usersApi} from '../../api';
import Register from '../../components/Register/Register';
import UsersList from '../../components/UsersList/UsersList';
import {RootState} from '../../store';
import {authSlice} from '../../store/slices/auth.slice';

export default function AdminPageUsers() {
  const [search, setSearch] = useState('');
  const registerFields = ['firstName', 'lastName', 'displayName', 'email', 'password', 'role'];

  const {users, user: admin} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  function showHide() {
    setModalOpen(!modalOpen);
  }
  useEffect(() => {
    const getUsers = async () => {
      try {
        const {data} = await usersApi.getUsers(admin.token!);

        dispatch(authSlice.actions.setUsers(data));
      } catch (error) {
        console.log(error);
      }
    };
    admin.token && getUsers();
  }, [dispatch, admin?.token]);

  async function handleSubmit(payload: any) {
    try {
      await usersApi.createUser({...payload, isApproved: true}, admin?.token!);
      setModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const findUser = async (e: any) => {
    try {
      e.preventDefault();

      const {data} = await usersApi.getUsers(admin?.token!, {search});
      dispatch(authSlice.actions.setUsers(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin">
      <div className="row">
        <div className="col-12 ">
          <div className="d-flex">
            <div className="input-group">
              <input
                type="text"
                aria-label="First name"
                className="form-control"
                placeholder="Email"
                name="email"
                value={search}
                onChange={handleSearch}
              />
            </div>

            <button className="upload" onClick={findUser}>
              Search
            </button>
            <button
              type="button"
              className="btn btn-primary ms-auto"
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@mdo"
              onClick={showHide}
            >
              Add
            </button>
          </div>

          {users?.data?.map((user) => (
            <UsersList key={user.id} user={user} admin={admin} />
          ))}
        </div>
      </div>
      {modalOpen && (
        <div
          className="modal fade bd-example-modal-xl show"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          style={{display: 'block', paddingRight: '15px'}}
          aria-modal="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <Register registerFields={registerFields} isAdmin={true} handleSubmit={handleSubmit} />

                <button onClick={showHide} type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="d-flex align-items-center"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
