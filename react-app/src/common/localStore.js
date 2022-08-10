export const getItem = (name) => {
    return window.localStorage.getItem(name);
}
export const setItem = (name, value) => {
    return window.localStorage.setItem(name, value);
}