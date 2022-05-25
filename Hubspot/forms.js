//This code works even from embedded forms as not iframe forms.
window.addEventListener("message", function(event) {
    if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
      //tracking code
    }
});

//tracking a specific form

window.addEventListener("message", function(event) {
  if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
     const formId = 'asdlaksjlds21s32dasl';
     if(event.data.id === formId){
     	//conversion code
     }  
  }
});