
let title = "";

const guessInput = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-button");
const hintButton = document.getElementById("hint-button");
        
const descriptionOutput = document.getElementById("description-output");
const hintOutput = document.getElementById("hint-output");    

const successAlert = document.getElementById('success-alert');
const failAlert = document.getElementById('fail-alert');

const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

function generateRandomMovie(movies) {
    index = Math.floor(Math.random()*movies.length)
    const movie = movies[index]
    movies.splice(index, 1)
    return movie
}

hintButton.addEventListener("click", () => { 

    hintOutput.classList.remove('hide'); 

});

submitButton.addEventListener("click", () => { 
    
    const guess = guessInput.value;
    if (guess == title) {
      this.showSuccessAlert(guess, random);
    } else {
      this.showFailAlert(guess, random);
    }

    initialize();
    guessInput.value = "";
    console.log("clicked");
    hintOutput.classList.add('hide');

});


function showSuccessAlert(guess, random) {
    successAlert.classList.remove('hide');
    failAlert.classList.add('hide');

    successAlert.innerHTML = 'You guessed ' + guess + ', which is correct!';
};

function showFailAlert(guess, random) {
    successAlert.classList.add('hide');
    failAlert.classList.remove('hide');

    if (guessInput.value == "") {
        failAlert.innerHTML = 'The correct answer was: ' + random.title;
    } else {
        failAlert.innerHTML = 'You guessed: ' + guess + ', but the answer actually is: ' + random.title;
    }
};

function initialize() {

    if (movies.length === 0) {
        descriptionOutput.innerHTML = "No more movies to guess!";
    } else {
        random = generateRandomMovie(movies);
        title = random.title;
        descriptionOutput.innerHTML = random.explanation;
        hintOutput.innerHTML = random.hint;
    }
    console.log(movies);
    console.log(movies.length);
}

initialize();



