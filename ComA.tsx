import * as React from "react";
import { selector, useRecoilState } from "recoil";
import { textState } from "./store";


function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}


export const ComA: React.FC = () => {

    return (
      <div>
      <TextInput />
    </div>


    )

}