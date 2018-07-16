let boxes = document.getElementsByClassName('box');
const start_button = document.getElementById('start_button');

let boxCoordinates = ['box_1', 'box_2', 'box_3', 'box_4', 'box_5', 'box_6', 'box_7', 'box_8', 'box_9','box_10', 'box_11', 'box_12', 'box_13', 'box_14', 'box_15'];


console.log(start_button);

start_button.addEventListener('click', function(){ boxPosition(boxes, individualRandomNumbers())});

// boxPosition(boxes, randomNumber());

//  --=== ALL FUNCTION ===--

function individualRandomNumbers(){
    let numbers = [];

    for(var i = 0; numbers.length < 15;i++){
        let numb = Math.floor((Math.random() * 16) + 1);

        if(!numbers.includes(numb)){
            numbers.push(numb);
        }
        continue;
    }

    return numbers;
}

function boxPosition(boxes, positionNumber){
    Array.from(boxes).forEach((box, i )=> {

        // console.log(box.classList[1]);

        return box.classList.replace(box.classList[1], `box_${positionNumber[i]}`);
    })
}

