



const submitButton = document.getElementById('submit-button');


function cardGenerator() {
    const greetingMessage = document.getElementById('greeting-message').value;
    const eventSelection = document.getElementById('event-selection').value;
    const personalMessage = document.getElementById('personal-message').value;
    const fromSender = document.getElementById('from-sender').value;

    const cardGreeting = document.getElementById('card-greeting');
    const cardEvent = document.getElementById('card-event');
    const cardMessage = document.getElementById('card-message');
    const cardSender = document.getElementById('card-sender');

    cardGreeting.textContent = "Dear " + greetingMessage;
    cardEvent.textContent = eventSelection;
    cardMessage.textContent = personalMessage;
    cardSender.textContent = fromSender;

    document.getElementById('form-submit').style.display = "none";
    document.getElementById('form-result').style.display = "block";

}

submitButton.addEventListener('click', e => {
    e.preventDefault();
    cardGenerator();

})

