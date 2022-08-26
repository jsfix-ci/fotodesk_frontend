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
    <form className="images" onSubmit={handleSubmit}>
      <div className="keywords">
        <input
          type="text"
          aria-label="First name"
          placeholder="Keywords"
          name="keywords"
          onChange={handleChange}
          value={formData.keywords}
        />
      </div>

      <div className="col-7">
        <div className="row">
          <div className="author">
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

            <button className="search" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
