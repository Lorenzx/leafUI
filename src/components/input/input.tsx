import { useState } from "react";
interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input: React.FC<InputProps> = ({ onChange }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  return (
    <>
      <input data-testid="input" onChange={handleChange} value={inputText} />
    </>
  );
};
