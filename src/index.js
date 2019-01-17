export default class JsDash {
  constructor (selector) {
    const js = {
      dash: {}
    };

    const $scope = selector ? document.querySelector(selector) : document.body;

    ;((cb) => {
      if (document.readyState !== 'loading') {
        cb(js.dash);
      } else {
        document.addEventListener('DOMContentLoaded', () => {
          cb(js.dash);
        });
      }
    })((methods) => {
      ;(function loop ($node) {
        let fns = [];
        if ($node.hasAttribute('class')) {
          for (let key in methods) {
            let method = methods[key];
            let classes = $node.getAttribute('class').split(' ');

            if (classes.indexOf(key) > -1) {
              fns.push(method);
            }
          }
        }

        if ($node.firstElementChild) {
          loop($node.firstElementChild)
        }

        if ($node.nextElementSibling) {
          loop($node.nextElementSibling)
        }

        fns.forEach((fn) => {
          try {
            fn.call(methods, $node);
          } catch (err) {
            console.error(err);
          }
        })

      })($scope);
    });
    
    return js
  }
}

if (window && window.JsDash === undefined) {
  window.JsDash = JsDash;
}