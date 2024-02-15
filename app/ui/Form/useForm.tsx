import { useState } from "react";

export const useForm = () => {
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");

  const handleSubmit = () => {
    setTitle("");
    setMemo("");
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(e.target.value);
  };
  return { title, memo, handleSubmit, handleChangeTitle, handleChangeMemo };
};
