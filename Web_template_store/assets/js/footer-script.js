 
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email-input');
    const clearButton = document.querySelector('.clear-input');
    const subscriptionMessage = document.getElementById('subscription-message');
    const closeMessageButton = document.querySelector('.close-message');
    let messageTimeout;
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (emailInput.value) {
        showMessage();
        form.reset();
      }
    });
  
    emailInput.addEventListener('input', function() {
      clearButton.hidden = !this.value;
    });
  
    clearButton.addEventListener('click', function() {
      emailInput.value = '';
      clearButton.hidden = true;
      emailInput.focus();
    });
  
    closeMessageButton.addEventListener('click', hideMessage);
  
    function showMessage() {
      subscriptionMessage.hidden = false;
      subscriptionMessage.classList.add('show');
      clearTimeout(messageTimeout);
      messageTimeout = setTimeout(hideMessage, 6000);
    }
  
    function hideMessage() {
      subscriptionMessage.classList.remove('show');
      subscriptionMessage.classList.add('hide');
      setTimeout(() => {
        subscriptionMessage.hidden = true;
        subscriptionMessage.classList.remove('hide');
      }, 500);
    }
  });
