import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = props => {
  const [error, setError] = useState('');
  const { onFileUpload, className } = props;
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles[0] && acceptedFiles[0].name.split('.')[1] !== 'xlsx') {
      setError('Please choose an excel file with .xslx extension');
      return null;
    }
    onFileUpload(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    if (isDragActive) {
      setError('');
    }
  }, [isDragActive]);

  return (
    <div className={className} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive && !error ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Dropzone;
