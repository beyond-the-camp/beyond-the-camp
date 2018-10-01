import { injectGlobal } from 'emotion';

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
  }
`;
