import { useState } from "react";

const useTextInput = (initialValue) => {
  const [value, setValue] = useState("");
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return { value: value, onChange: onChangeHandler };
};

export default useTextInput;
