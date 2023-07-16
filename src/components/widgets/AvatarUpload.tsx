import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface Props {
  onFileUpload: (file: File) => void;
  accept?: any;
  maxSize?: number;
}

const AvatarUpload: React.FC<Props> = ({ onFileUpload, accept = '', maxSize = 5242880 }) => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      if (selectedFile.size <= maxSize) {
        setFile(selectedFile);
        onFileUpload(selectedFile);
      }
    }
  }, [maxSize, onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept, multiple: false });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here...</p>
      ) : (
        <>
          <div className='bg-slate-300 w-fit px-5 py-3 mx-auto md:mt-4 rounded-md cursor-pointer hover:bg-slate-200'>Upload your avatar</div>
          {/* {file && <p>Selected file: {file.name}</p>} */}
        </>
      )}
    </div>
  );
};

export default AvatarUpload;