import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

import './style.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { ComA } from './ComA';
import { ComB } from './ComB';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <RecoilRoot>
      <div>
        <ComA/>
        <ComB/>
      </div>
      </RecoilRoot>
    );
  }
}

render(<App />, document.getElementById('root'));
