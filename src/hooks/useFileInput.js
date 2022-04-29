import { useState } from "react";

export default function useFileInput(initialValue) {
  const [fileObject, setFileObject] = useState(initialValue);

  const onChange = (e) => {
    setFileObject(e.target.files[0]);
  };

  return [fileObject, onChange];
}
