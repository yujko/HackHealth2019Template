import {MDCSelect} from '@material/select';
import {MDCTextField} from '@material/textfield';


const zipcode = new MDCTextField(document.querySelector('.zipcode'));
const age = new MDCTextField(document.querySelector('.age'));
const income = new MDCTextField(document.querySelector('.income'));

const select = new MDCSelect(document.querySelector('.mdc-select'));

select.listen('MDCSelect:change', () => {
    // Possible: action apply change to the current webpage or sending ajax
});
