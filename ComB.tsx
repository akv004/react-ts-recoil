import * as React from 'react';
import { selector, useRecoilState, useRecoilValue } from 'recoil';
import { textState } from './store';

//A selector represents a piece of derived state. Derived state is a transformation of state. You can think of derived state as the output of passing state to a pure function that modifies the given state in some way:

const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export const ComB: React.FC = () => {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);
  return (
    <div>
      {text}
      <div>{count}</div>
    </div>
  );
};
