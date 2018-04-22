var userForm = (function() {
  
    var module = {
      
      testExpr: function(el, re) {
        if(!re.test(el.value)){
          el.classList.add('is-invalid');
        } else {
          el.classList.remove('is-invalid');
        }
      },
      
      filterTest: function(e) {
        let re;
        switch (e.target.id) {
          case 'name':
            re = /^[a-zA-Z]{2,10}$/; // Only characters, min 2, max 10
            break;
          case 'zip':
            re = /^[0-9]{5}(-[0-9]{4})?$/; // 12345 - 12345-1234
            break;
          case 'email':
            re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; // a@a.es
            break;
          case 'phone':
            re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/; // 1231231234 - 123-123-1234 - 123.123.1234 - 123 123 1234 -  (123)1231234 - (123)-123-1234 - (123).123.1234 - (123) 123 1234
            break;
          default:
            console.log('No case');
            break;
        }
        if(re !== 'undefined') 
          module.testExpr(e.target, re);
      },
  
      addListeners: function() {
        document.getElementById('name').addEventListener('blur', module.filterTest);
        document.getElementById('zip').addEventListener('blur', module.filterTest);
        document.getElementById('email').addEventListener('blur', module.filterTest);
        document.getElementById('phone').addEventListener('blur', module.filterTest);
      },
  
      init: function() {
        module.addListeners();
        console.log('- userForm initialized');
      }
    };
  
    return {
      init: module.init
    };
  
  })();
  
  document.addEventListener('DOMContentLoaded', userForm.init());
  