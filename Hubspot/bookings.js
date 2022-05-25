//Este código sirve para trackear cuando se completa un booking de hubspot

window.addEventListener('message', function(event) {
  if (event.data.meetingBookSucceeded) {
  	//conversion code
  }
});

//también puede usarse con Tag Manager enviando un custom event y utilizandolo como trigger

window.addEventListener('message', function(event) {
  if (event.data.meetingBookSucceeded) {
    window.dataLayer.push({
      'event': 'booking-complete'
    });
  }
});

