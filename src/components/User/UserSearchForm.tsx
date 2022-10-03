import React from 'react';

interface IUserSearchForm {
  search: string;
  handleSearch: (...args: any) => void;
  findUser: (...args: any) => void;
  showHide: (...args: any) => void;
}
export function UserSearchForm({search, handleSearch, findUser, showHide}: IUserSearchForm) {
  return (
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
  );
}
