import React from 'react';

export default function AdminDetails({
  handleCopyUser,
  setEditedTags,
  isAdmin,
  handleWatermark,
  Tags,
  isDetailsEditPage,
  image,
  editedTags,
  saveChanges,
  imageSizes,
  data,
  user,
}: any) {
  return (
    <div className="col-3 text-start">
      <h4 className="fw-bold">Author</h4>
      <div className="input-group w-75">
        <input
          type="text"
          aria-label="First name"
          className="form-control"
          placeholder={image?.user?.displayName}
          onClick={() => handleCopyUser(image?.user?.displayName ?? '')}
          readOnly
        />
      </div>
      <h4 className="fw-bold mt-4">Keywords</h4>
      {!!isDetailsEditPage ? (
        <textarea
          className="w-75 mt-3"
          name="addTag"
          placeholder="Add tag"
          value={editedTags}
          onChange={(e) => setEditedTags(e.target.value)}
        ></textarea>
      ) : (
        <div className="w-50">
          <Tags tags={image.tags} />
        </div>
      )}
      {isAdmin && (
        <>
          <h4 className="fw-bold mt-4">Watermark</h4>
          <div className="form-check">
            {data.map((watermark: any, key: any) => {
              return (
                <label key={key} className="form-check-label w-100">
                  <input className="form-check-input" type="radio" name="watermark" onChange={() => handleWatermark(watermark)} />
                  {watermark.title}
                </label>
              );
            })}
          </div>
        </>
      )}

      {user?.token && (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle mt-3 w-75 p-2"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Download
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {imageSizes.map((imageSize: any) => (
              <li key={imageSize.value}>
                <a className="dropdown-item" href={image?.path!} data-value={imageSize.value} download target="_blank" rel="noreferrer">
                  {imageSize.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!!isDetailsEditPage && (
        <button className="btn btn-secondary mt-3 w-75 p-2" type="button" onClick={() => saveChanges()}>
          Save Changes
        </button>
      )}
    </div>
  );
}
