/**
 * @flow
 */

import * as Analytics from './Analytics';

export default class XDLError extends Error {
  code: string;
  isXDLError: bool;

  constructor(code: string, message: string) {
    super(message);

    this.code = code;
    this.isXDLError = true;

    Analytics.logEvent('XDL Error', {
      code,
      message,
    });
  }
}
