/*$(document).ready ->
  $('#contact-form').submit (e) ->
    name = document.getElementById('inputName')
    email = document.getElementById('inputEmail')
    message = document.getElementById('inputMessage')
    if !name.value or !email.value or !message.value
      alertify.error 'Please check your entries'
      return false
    else
      $.ajax
        method: 'POST'
        url: '//formspree.io/madhugrfeb@gmail.com'
        data: $('#contact-form').serialize()
        datatype: 'json'
      e.preventDefault()
      $(this).get(0).reset()
      alertify.success 'Message sent'*/


$('#contact-form').submit(function (e) {
    var name = document.getElementById('inputName'),
        email = document.getElementById('inputEmail'),
        message = document.getElementById('inputMessage');

    if (!name.value || !email.value || !message.value) {
        alert('Please check your entries');
    } else {
       //var stringData = 'name='+name.value+'&email='+email.value+'&message='+message.value;
        var stringData ={
            name:name.value,
            email:email.value,
            message:message.value
        };
        console.log(stringData);
        alert('ok after else ');
        alert(stringData);
        $.ajax({
            url: 'https://formspree.io/madhugrfeb@gmail.com',
            method: 'POST',
            data: JSON.stringify(stringData),
            datatype: 'json',
            success: function (succ) {
                  alert('ok on scc');
                console.log(succ);
            },
            error: function (err) {
                console.log(err);
                  alert('ok on err');
                
              // e.preventDefault()
            }
        });
      //  e.preventDefault()
      //  $(this).get(0).reset()
      
    }
})


// Name and Email validation Function.
/*function validation() {
    var name = document.getElementById("inputName").value;
    var email = document.getElementById("inputEmail").value;
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if (name === '' || email === '') {
        alert("Please fill all fields...!!!!!!");
        return false;
    } else if (!(email).match(emailReg)) {
        alert("Invalid Email...!!!!!!");
        return false;
    } else {
        return true;
    }
    console.log($('#contact-form').serialize());
    alert("Invalid Email...!!!!!!");
    $.ajax({
        type: 'POST',
        data: $('#contact-form').serialize(),
        datatype: 'json',
        url: 'https://formspree.io/madhugrfeb@gmail.com',
        success: function (results) {
            alert("Invalid Email...!!!!!!");
            console.log('ok');
        },
        error: function (results) {
            alert("Invalid Email...!!!!!!");
            console.log('no');
        }
    });

}*/
