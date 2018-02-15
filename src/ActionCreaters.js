import ActionConstants from './ActionConstants'
const {
    UPDATE_NAME,
    ADD_PERSON,
    GET_PEOPLE,
    UPDATE_EXCITEMENT_LEVEL
} = ActionConstants

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        name //es6 shortcut for assigning a variable to an object with the same property name as the variable name
    }
}

export function addPerson(age, name) {
    return {
        type: ADD_PERSON,
        age,
        name
    }
}

export function updateExcitementLevel() {
    return {
        type: UPDATE_EXCITEMENT_LEVEL
    }
}