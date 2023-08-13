import throttle from 'lodash.throttle';

const DATE_FORM = "feedback-form-state";
const formFeedback = document.querySelector('.feedback-form');
// const btnSubmit = document.querySelector('button[type="submit"]');
const emailForm = document.querySelector('input[name="email"]');
const messageForm = document.querySelector('textarea[name="message"]');
// const saveData = localStorage.getItem(DATE_FORM);
let dataInputs = loadStateFromLocalStorage();
let serializedState;

formFeedback.addEventListener('input', throttle(onSaveData, 500));
formFeedback.addEventListener('submit', onCleanForm);

emailForm.value = dataInputs.email || '';
messageForm.value = dataInputs.message || '';

function loadStateFromLocalStorage() {
    const saveData = localStorage.getItem(DATE_FORM);
    if (saveData) {
        return JSON.parse(saveData);
    }
    return {};
}
// if (saveData) {
//     serializedState = JSON.parse(saveData);
//     emailForm.value = serializedState.email;
//     messageForm.value = serializedState.message;
// } else {
//     emailForm.value = '';
//     messageForm.value = '';
// }

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
    if (!emailForm.value || !messageForm.value) return alert('All fields must be filled in!');
    console.log(dataInputs);
    dataInputs = {};
     try {
        localStorage.removeItem(DATE_FORM);
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
    emailForm.value = '';
    messageForm.value = '';
}