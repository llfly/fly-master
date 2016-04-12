import React, { Component } from 'react';

import {
  SimpleComponent,
  ComponentDemo,
  SpreadDemo,
  StyleDemo,
  StateDemo,
  PropsDemo,
  PropTypesDemo,
  LifeCycleDemo,
  DestroyComponent,
  HandleDOMComponent,
  HandleEvent,
  SelfCreateComponent,
  UseChildrenComponent,
  FormApp,
  FormTest,
  MixinDemo

} from '../components';

let data = {
  name: 'AlphaGo',
  type: 'robot'
};

class App extends Component {
  render(){
    return (
      <div>
        {
          /*
          <SimpleComponent />

          <ComponentDemo name="llfly" />
          <SpreadDemo {...data} />
          <StyleDemo />

          <StateDemo />
          <PropsDemo title="传入参数" title="第二次传入参数" name="fy"  {...data}/>
          <PropTypesDemo />

          <LifeCycleDemo />
          <DestroyComponent />

          <HandleDOMComponent />

          <HandleEvent />

          <SelfCreateComponent />
          <UseChildrenComponent />

          <FormApp />

          <MixinDemo />
           */
        }
        <FormTest />
      </div>
    )
  }
}

export default App;
