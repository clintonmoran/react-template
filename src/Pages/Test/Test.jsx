import React from 'react';
import { Content } from '../../Components/Content/Content';
import { Codeblock } from '../../Components/CodeBlock/CodeBlock';

export const Test = () => {
  return (
    <div className="test-page-wrapper">
      <div>
        Test Page
      </div>
      <div className="main-content">
        <Content text={`Testing is an important part of any application. There are lots of techniques for testing the front end, but we are currently recommend sticking just with <a href="https://testing-library.com/docs/react-testing-library/intro" target="_blank">React Testing Library</a>.`} />
      </div>
      <div className="example">
        <Codeblock text={`//some code example\nfunction TestStuff() {\n//Test Some Stuff\n}`}></Codeblock>
      </div>
    </div>
  );
}