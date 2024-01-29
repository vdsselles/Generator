

// const beforeChange = confirm('do you want to create SSN given after June 25, 2011 randomization?');

// const generate = [];
const textEl = document.querySelector(".textField");
const text = document.createElement("span");
text.className = "ssn"


const generatorEl = document.querySelector(".genarator");
const buttonElGen = document.createElement("button");
buttonElGen.className = "generate";
buttonElGen.innerText = "GENERATE"
const genbutt = {
    isClicked: false,
}


const copyEl = document.querySelector(".copyIMG");

const copybutt = {
    isClicked: false,
}

let ssn = '';
const digit = generateNumber();

generatorEl.appendChild(buttonElGen);



buttonElGen.addEventListener('click', () => {
    // debugger;
    genbutt.isClicked = true
    copyEl.style.opacity = '1'

    if (genbutt.isClicked) {

        text.innerText = '';
        ssn = '';

        let area = `${generateNumber()}${generateNumber()}${generateNumber()}`;
        let group = `${generateNumber()}${generateNumber()}`;
        let serial = `${generateNumber()}${generateNumber()}${generateNumber()}${generateNumber()}`

        area[2] = (+area[0] === 0 && +area[1] === 0 && +area[2] === 0) ? '1' : area[2];
        group[1] = (+group[0] === 0 && +group[1] === 0) ? '1' : +group[1];
        serial[3] = (+serial[0] === 0 && +serial[1] === 0 && +serial[2] === 0 && +serial[3] === 0) ? '1' : serial[3];

        genbutt.isClicked = true

        ssn += `${area}-${group}-${serial}`;
        text.innerText = ssn;
        textEl.appendChild(text);
        // copyEl.appendChild(buttonElCopy);
    }



});

copyEl.addEventListener('click', async () => {
    copybutt.isClicked = true
    copyEl.style.opacity = '0.4'
    navigator.clipboard.writeText(ssn)
});









function generateNumber() {
    return Math.round(Math.random() * 9)
}