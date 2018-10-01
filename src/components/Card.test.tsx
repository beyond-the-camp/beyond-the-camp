import * as React from 'react';

import { cleanup, render } from 'react-testing-library';

import { Card } from './Card';

afterEach(cleanup);

test('The list renders', () => {
  const { getByText } = render(<Card title="Card is here" />);

  expect(getByText('Card is here')).not.toBeNull();
});
