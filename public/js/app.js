$(function() {
  // This would normally be GET request from the database
  var firstName = '';
  var lastName = '';
  var email = '';

  // These would be pulled from database/order number
  var product1 = {name: "Game Console 2016",
  qty: 1, price: 500};
  var product2 = {name: "Platformer Bros 3d",
  qty: 1, price: 50};
  var order = [product1, product2];

  // Makes a toast, takes in String.
  function makeToast(msg) {
    Materialize.toast(msg, 4000);
  }

  // Removes basics form, shows shipping form.
  // Assigns first and last name to be used in CC form
  $('#basics-btn').on('click tap', function() {
    $('#shipping').toggleClass('visible');
    firstName = $('#first_name').val();
    lastName = $('#last_name').val();
    $('#basics').remove('#basics');
    makeToast('50% Done!');

  });

  // Removes shipping form, shows CC form.
  $('#shipping-btn').on('click tap', function() {
    $('#credit-card').toggleClass('visible');
    $('#frmNameCC').val(firstName + ' ' + lastName);
    $('#shipping').remove('#shipping');
    window.scrollTo(0, 0);
    makeToast('85% Done!');
  });

  // Makes the order summary
  $('#cc-btn').on('click tap', function() {
    $('#review').toggleClass('visible');
    $('#credit-card').remove('#credit-card');

    populateCard();
    makeToast('Success! Were Shipping It!');

  });

  // Refreshes page on click
  $('.done').on('click tap', function() {
    makeToast('Thanks for going through this! I\'m gonna refresh.');
    setTimeout(function(){
       location.reload();
     }, 4000);

  });



  // Makes a sentence out of the order for the summary
  function populateCard () {
    var total = 0;
    for (var i = 0; i < order.length + 1; i++) {
      if (i === 0) {
        var summary = $('<p>');
        var itemSummary = ['You have purchased ', order[i].qty, ' ', order[i].name, ' for ','$', order[i].price, ","].join('');
        total += order[i].price;
        summary.text(itemSummary);
        summary.appendTo('#order-summary');
      }

      else if (i === order.length) {
        var summary2 = $('<p>');
        var itemSummary2 = ['For a total of ','$', total].join('');

        summary2.text(itemSummary2);
        summary2.appendTo('#order-summary');
      }

      else {
        var summary3 = $('<p>');
        var itemSummary3 = [order[i].qty, ' ', order[i].name, ' for ','$', order[i].price].join('');
        total += order[i].price;
        summary3.text(itemSummary3);
        summary3.appendTo('#order-summary');
      }

    }


  }


});
