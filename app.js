const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;
let WinningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', () => {
    if(!isGameOver) {
        if(p1Score !== WinningScore) {
        p1Score += 1;
            if(p1Score === WinningScore) {
            isGameOver = true;
            }
        p1Display.innerText = p1Score;
} 
    }
})

p2Button.addEventListener('click', () => {
    if(!isGameOver) {
        if(p2Score !== WinningScore) {
        p2Score += 1;
            if(p2Score === WinningScore) {
                isGameOver = true;
            }
        p2Display.innerText = p2Score;
}
    }
})