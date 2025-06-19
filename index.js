const userInputString = prompt("enter a list comma separated froyo flavors", 'vanilla,vanilla ,vanilla,strawberry, coffee, coffee');


function parseData(input) {
    untrimmedFlavour = input.split(",");
    let flavours = [];
    for (let name of untrimmedFlavour) {
        flavours.push(name.trim());
    }
    return flavours;
}

function listOfFlavour (flavours) {
    let countFlavour = {};
    for (let name of flavours) {
        if (!(name in countFlavour)) {
            countFlavour[name] = 1;
        }
        else {
            countFlavour[name] = countFlavour[name] + 1;
        }
    }
    return countFlavour;
}

let data = parseData(userInputString);
console.log("Different flavours that customer entered",listOfFlavour(data))
