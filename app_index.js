
//form_open_close_mod_window

const closeForm = document.querySelector('.close');
const modalWindow = document.querySelector('.bg-modal');
const thankyou = document.querySelector('.thankyou');


//open_mod_window
function openMod(){

    modalWindow.style.display = 'flex';

}

//close_mod_window
closeForm.addEventListener('click', function(){

    modalWindow.style.display = 'none';
})

//close_thankyou_window
thankyou.addEventListener('click', function(){

    thankyou.style.display = 'none';
})
//close_out_mod_window
window.onclick = function (event) {

    if(event.target == modalWindow){

        modalWindow.style.display = 'none';
    }
}

//DATA VALIDATION 
const tel = document.getElementById('tel');
const form = document.getElementById('form');
const name = document.getElementById('name')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {

    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Пожалуйста, заполните Имя')
    }

    if (tel.value.length <=9) {
        messages.push('Пожалуйста, заполните номер (10 цифр и более')
    }
    if (messages.length >0) {
        e.preventDefault()  
        errorElement.innerText = messages.join('. ')
    }


   
});


//openNewUrl

  function openNewWin (url) {
    myWin = open (url)
  }


  //sentUserDataFromModalWindow

$(document).ready(function() {

    //E-mail Ajax Send
    $("#form").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        modalWindow.style.display = 'none';
        thankyou.style.display = 'flex';
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
    
    });
    

 
