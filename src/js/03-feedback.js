import throttle from 'lodash.throttle';

const DATE_FORM = "feedback-form-state";
let dataInputs = {};
const formFeedback = document.querySelector('.feedback-form');
// const btnSubmit = document.querySelector('button[type="submit"]');
const inputForm = document.querySelector('input[name="email"]');
const messageForm = document.querySelector('textarea[name="message"]');
const saveData = localStorage.getItem(DATE_FORM);
let serializedState;

formFeedback.addEventListener('input', throttle(onSaveData, 500));
formFeedback.addEventListener('submit', onCleanForm);

if (saveData) {
    serializedState = JSON.parse(saveData);
    inputForm.value = serializedState.email;
    messageForm.value = serializedState.message;
} else {
    inputForm.value = '';
    messageForm.value = '';
}

function onSaveData(event) {
    const { name, value } = event.target;
    dataInputs[name] = value;
     try {
        serializedState = JSON.stringify(dataInputs);
        localStorage.setItem(DATE_FORM, serializedState);
    } catch (error) {
        console.error("Set state error: ", error.message);
     }
}

function onCleanForm(event) {
    event.preventDefault();
    // const { email, message } = dataInputs;
    // if (!email || !message) return alert('All fields must be filled in!');
    if (!inputForm.value || !messageForm.value) return alert('All fields must be filled in!');
    console.log(dataInputs);
    dataInputs = {};
     try {
        localStorage.removeItem(DATE_FORM);
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
    inputForm.value = '';
    messageForm.value = '';
}