const resultList = document.querySelector('#results');

new URLSearchParams(window.location.search).forEach((value,name) => {
    if(name === "birthdate") {
        createElement(name, (new Date(Date.parse(value))).toLocaleString());
    }
    else {
        createElement(name, value);
    }
})

function createElement(name, value) {
    resultList.append(`${name} : ${value}`);
    resultList.append(document.createElement('br'));
}