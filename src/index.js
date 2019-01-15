export default class {
  constructor () {
    const methods = {};
    if (document.readyState !== 'loading') {
      console.log(methods);
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        console.log(methods);
      });
    }
    return methods
  }
}