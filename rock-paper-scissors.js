let varii, vall;
let compData;
let winCount = 0, loseCount = 0, tieCount = 0;

function show(varii) {
    let computerPick = Math.random();
    console.log(computerPick)

    if (computerPick < 1 / 3 && computerPick > 0) {
        compData = 'Rock';
        result(varii);
    }
    else if (computerPick < 2 / 3 && computerPick > 1 / 3) {
        compData = 'Paper';
        result(varii);
    }
    else if (computerPick < 1 && computerPick > 2 / 3) {
        compData = 'Scissors';
        result(varii);
    }
}
function result(vall) {
    if (compData === vall) {
        console.log('Tie.');
        document.querySelector('.result').innerHTML = `You Choose ${vall} and Computer Choose ${compData}, Tie.`;
        tieCount++;
        count();

    }
    else if (compData === 'Rock' && vall === 'Scissors') {
        console.log('You Lose.');
        document.querySelector('.result').innerHTML = `You Choose ${vall} and Computer Choose ${compData}, You Lose.`;
        loseCount++;
        count();
    }
    else if (compData === 'Paper' && vall === 'Scissors') {
        console.log('You Win.');
        document.querySelector('.result').innerHTML = `You Choose ${vall} and Computer Choose ${compData}, You Win.`;
        winCount++;
        count();
    }
    else if (compData === 'Rock' && vall === 'Paper') {
        console.log('You Win.');
        document.querySelector('.result').innerHTML = `You Choose ${vall} and Computer Choose ${compData}, You Win.`;
        winCount++;
        count();
    }
    else if (compData === 'Scissors' && vall === 'Paper') {
        console.log('You Lose.');
        document.querySelector('.result').innerHTML = `You Choose ${vall} and Computer Choose ${compData}, You Lose.`;
        loseCount++;
        count();
    }
    else if (compData === 'Paper' && vall === 'Rock') {
        console.log('You Lose.');
        document.querySelector('.result').innerHTML = `You Choose ${vall} and Computer Choose ${compData}, You Lose.`;
        loseCount++;
        count();
    }
    else if (compData === 'Scissors' && vall === 'Rock') {
        console.log('You Win.');
        document.querySelector('.result').innerHTML = `You Choose ${vall} and Computer Choose ${compData}, You Win.`;
        winCount++;
        count();
    }
}

function count() {
    document.querySelector('.winCount').innerHTML = `Win = ${winCount}`;
    document.querySelector('.loseCount').innerHTML = `Lose = ${loseCount}`;
    document.querySelector('.tieCount').innerHTML = `Tie = ${tieCount}.`;
}