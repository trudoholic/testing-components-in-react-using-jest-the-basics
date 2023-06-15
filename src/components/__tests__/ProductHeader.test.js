// describe('ProductHeader', () => {
//   it('passing test', () => {
//     expect(true).toBeTruthy();
//   })
//   it('failing test', () => {
//     expect(false).toBeTruthy();
//   })
// })

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
// import ProductsList from '../ProductsList';
import ProductHeader from "../ProductHeader";
describe('ProductHeader Component', () => {
  it('has an h2 tag', () => {
    const component = ReactTestUtils.renderIntoDocument(<ProductHeader/>);
    var h2 =
      ReactTestUtils.findRenderedDOMComponentWithTag(
      component, 'h2'
    );
  });

  it('is wrapped inside a title class', () => {
    const component = ReactTestUtils.renderIntoDocument(<ProductHeader/>);
    var node =
      ReactTestUtils.findRenderedDOMComponentWithClass(
      component, 'title'
    );
  })
})