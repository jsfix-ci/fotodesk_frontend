import React from 'react';

interface IUserSearchForm {
  search: string;
  handleSearch: (...args: any) => void;
  findUser: (...args: any) => void;
  showHide: (...args: any) => void;
}
export function UserSearchForm({search, handleSearch, findUser, showHide}: IUserSearchForm) {
  return (
    <div className="card">
        <div className="card-body">

            <div className="row">
            <div className="col-8">
                <input
                    type="text"
                    aria-label="First name"
                    className="form-control w-100"
                    placeholder="Email"
                    name="email"
                    value={search}
                    onChange={handleSearch}
                />
            </div>

            <div className="col-4">
                <button className="btn btn-success me-2" onClick={(e) => findUser(e, search)}>
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

            </div>

    </div>
    </div>
  );
}
