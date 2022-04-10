import { useState } from "react";
import uploadFile from "../services/uploadFile";

export const useUploadMedia = (fileObject) => {
  const [loading, setLoading] = useState(false);
  //   Status can be notStarted, inProgress, Completed
  const [status, setStatus] = useState("notStarted");
  const [error, setError] = useState(null);
  const [mediaURL, setMediaURL] = useState(null);

  const uploadFileFun = () => {
    setLoading(true);
    uploadFile(fileObject)
      .then((downloadUrl) => {
        setStatus("completed");
        setMediaURL(downloadUrl);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => setLoading(false));
  };

  return [mediaURL, loading, uploadFileFun, status, error];
};
