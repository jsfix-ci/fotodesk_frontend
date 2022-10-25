import React, {CSSProperties, useState} from 'react';
import {useEffect} from 'react';
import {useDropzone} from 'react-dropzone';

export default function Upload({handleSubmit}: any) {
  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  };

  function Previews(props: any) {
    const [files, setFiles] = useState<any>([]);
    const toggleProceed = files.length ? 'd-flex m-auto' : 'd-none';
    const {getRootProps, getInputProps} = useDropzone({
      accept: {
        'image/*': [],
      },
      multiple: true,

      onDrop: (acceptedFiles: any) => {
        setFiles((prev: any) => [
          ...prev,
          ...acceptedFiles.map((file: any) =>
            Object.assign(
              {file, tags: ''},
              {
                preview: URL.createObjectURL(file),
              }
            )
          ),
        ]);
      },
    });

    const handleClick = (e: any) => {
      e.preventDefault();
      handleSubmit(files);
    };

    const removeFile = (e: any, fileName: string) => {
      e.preventDefault();
      e.stopPropagation();
      const newFiles = files.filter((file: any) => file.preview !== fileName);

      setFiles(newFiles);
    };

    useEffect(() => {
      return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
      <section className="container">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <aside style={thumbsContainer as CSSProperties}>
            <Thumbs files={files} removeFile={removeFile} />
          </aside>
        </div>

        <button className={`proceed ${toggleProceed}`} type="submit" onClick={handleClick}>
          Proceed
        </button>
      </section>
    );
  }

  return <Previews />;
}
const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  marginBottom: 8,
  marginRight: 8,
  height: 150,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: '100%',
  height: 'auto',
};
const Thumbs = ({files, removeFile}: any) =>
  files.map((file: any) => (
    <div className="thumb" style={thumb as CSSProperties} key={file.preview}>
      <div style={thumbInner}>
        <button onClick={(e) => removeFile(e, file.preview)} className="remove bg-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
          </svg>
        </button>

        <img
          src={file.preview}
          style={img}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt="preview"
        />
      </div>
    </div>
  ));
