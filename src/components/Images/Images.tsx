import React, {useState} from 'react';

export default function Images() {
  const [formData, setFormData] = useState({
    keywords: '',
    author: '',
  });

  function handleChange(event: any) {
    const {name, value} = event.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  function handleSubmit(event: any) {
    event.preventDefault();

    return;
  }

  return (
    <form className="row justift-content-center align-items-center g-3 mt-4" onSubmit={handleSubmit}>
      <div className="col-5 m-0">
        <input
          className="form-control"
          type="text"
          aria-label="Keywords"
          placeholder="Keywords"
          name="keywords"
          onChange={handleChange}
          value={formData.keywords}
        />
      </div>

      <div className="col-5 m-0">
        <input
          className="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Author"
          name="author"
          onChange={handleChange}
          value={formData.author}
        />
        <datalist id="datalistOptions">
          <option value="San Francisco" />
          <option value="New York" />
          <option value="Seattle" />
          <option value="Los Angeles" />
          <option value="Chicago" />
        </datalist>
      </div>

      <div className='col-2 m-0'>
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}
