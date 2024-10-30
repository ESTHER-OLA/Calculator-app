/* advanceMath.js file */
import { multiply } from './basicMath.js';

export function square(a) {
  return multiply(a, a);
}

export function cube(a) {
  return multiply(a, multiply(a, a));
}
