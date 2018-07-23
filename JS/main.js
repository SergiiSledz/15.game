let boxes = Array.from(document.getElementsByClassName('box'));
const start_button = document.getElementById('start_button');

let boxCoordinates = ['box_1', 'box_2', 'box_3', 'box_4', 'box_5', 'box_6', 'box_7', 'box_8', 'box_9','box_10', 'box_11', 'box_12', 'box_13', 'box_14', 'box_15'];
let activeBox;


start_button.addEventListener('click', function(){ boxPosition(boxes, individualRandomNumbers())});
document.addEventListener('keydown', function(e){ 
    let activePosition = activeBox ? Number.parseInt(activeBox.classList[1].substring(4)): undefined;

    switch(e.keyCode){
        case 38: //38 = up btn keyCode
        activePosition -= 4;
        break;
        case  39: //39 = right btn keyCode
        activePosition++;
        break;
        case 40: //40 = down btn keyCode
        activePosition += 4;
        break;
        case 37: //37 = left btn keyCode
        activePosition--;
        break;
    }


    let freePlace = boxes.some(box => box.classList.contains(`box_${activePosition}`));

    if(!freePlace && (activePosition < 17 && activePosition > 0)){
        activeBox.classList.replace(activeBox.classList[1], `box_${activePosition}`);
    }

    console.log(e.keyCode, activeBox, activePosition, freePlace);
    e.preventDefault();
});

boxes.forEach(box => box.addEventListener('click', function(){
    boxes.forEach(box => box.classList.remove('active'));
    
    activeBox = this;
    
    activeBox.classList.add('active');
}))


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

        return box.classList.replace(box.classList[1], `box_${positionNumber[i]}`);
    })
}

