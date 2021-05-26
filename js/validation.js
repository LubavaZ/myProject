
var formElement = document.forms.info;
formElement.onsubmit = validateInfoForm;

function validateInfoForm() {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var borderMyPhone = document.getElementById('phone');
    var attentionForMyPhone = document.getElementById('attention_2');
    var valid = re.test(myPhone);

    var re_2 = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var borderMyMail = document.getElementById('email');
    var attentionForMyMail = document.getElementById('attention');
    var valid_2 = re_2.test(myMail);

    var myMessage = document.getElementById('message').value;
    var borderMyMessage = document.getElementById('message');
    var attentionForMyMessage = document.getElementById('attention_3');

    if (valid == false) {
        output = 'Номер телефона введен неправильно!';
        attentionForMyPhone.style.display = 'inline-block';
        attentionForMyPhone.innerHTML = output;
        borderMyPhone.style.boxShadow = "1px 1px 5px 2px rgba(195, 0, 0, 1)";
        return false;
    } else {
        attentionForMyPhone.style.display = 'none';
        borderMyPhone.style.boxShadow = 'none';
    }

    if (valid_2 == false) {
        output = 'Адрес электронной почты введен неправильно!';
        attentionForMyMail.style.display = 'inline-block';
        attentionForMyMail.innerHTML = output;
        borderMyMail.style.boxShadow = "1px 1px 5px 2px rgba(195, 0, 0, 1)";
        return false;
    } else {
        attentionForMyMail.style.display = 'none';
        borderMyMail.style.boxShadow = 'none';
    }
    if (!myMessage.length) {
        output = 'Обязательно для заполнения!';
        attentionForMyMessage.style.display = 'inline-block';
        attentionForMyMessage.innerHTML = output;
        borderMyMessage.style.boxShadow = "1px 1px 5px 2px rgba(195, 0, 0, 1)";
        return false;
    } else {
        attentionForMyMessage.style.display = 'none';
        borderMyMessage.style.boxShadow = 'none';
    }
    return true;
}