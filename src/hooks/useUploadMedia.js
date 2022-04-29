import { useState } from "react";
import uploadFile from "../services/uploadFile";

export default function useUploadMedia(fileObject) {
  const [loading, setLoading] = useState(false);
  //   Status can be notStarted, inProgress, Completed
  const [status, setStatus] = useState("notStarted");
  const [error, setError] = useState(null);
  // const [mediaURL, setMediaURL] = useState(null);

  const uploadFileFun = (fileObject) => {
    setLoading(true);
    return uploadFile(fileObject)
      .then((downloadUrl) => {
        setStatus("completed");
        // setMediaURL(downloadUrl);
        return downloadUrl;
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => setLoading(false));
  };

  return [uploadFileFun, loading, status, error];
}
