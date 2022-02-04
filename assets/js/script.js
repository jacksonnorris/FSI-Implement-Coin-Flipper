// TODO: Declare any global variables we need
let totalNum = 0
let totalHeads = 0
let totalTails = 0

let resultImg = document.querySelector('#penny-result-img')
let heads = document.querySelector('#heads')
let headsPercent = document.querySelector('#heads-percent')
let tails = document.querySelector('#tails')
let tailsPercent = document.querySelector('#tails-percent')
let resultContainer = document.querySelector('#result-container')


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#flip-penny-button').addEventListener('click', function() {
        let result = getRandomNum(2)
        // console.log(result)
        if (result == 1) { flipHeads() }
        else if (result == 2) { flipTails() }
        totalNum++
        updateTable()
    })
    document.querySelector('#clear-results-button').addEventListener('click',function() {
        totalNum = 0
        totalHeads = 0
        totalTails = 0
        updateTable()
    })
    document.querySelector('#flip-n-times').addEventListener('click', function() {
        let num = document.querySelector('#flip-num-times').value 
        let flip = document.querySelector('#flip-penny-button')
        for (let i = 0; i < num; i++) {
            flip.click()
        }
    })
        function getRandomNum(n) {
            return Math.ceil(Math.random() * n)
        }
        function flipHeads() {
            resultImg.src = 'assets/images/penny-heads.jpg'
            // resultImg.setAttribute('class', 'penny-result-img')
            resultImg.setAttribute('class', 'penny-result-img flipHead')
            totalHeads++
            resultContainer.innerHTML = "You Flipped Heads"
        }
        function flipTails() {
            resultImg.src = 'assets/images/penny-tails.jpg'
            // resultImg.setAttribute('class','penny-result-img')
            resultImg.setAttribute('class','penny-result-img flipTail')
            totalTails++
            resultContainer.innerHTML = "You Flipped Tails"
        }
        function updateTable() {
            heads.innerHTML = totalHeads
            tails.innerHTML = totalTails
            if (totalNum != 0) {
                headsPercent.innerHTML = Math.round(100*totalHeads/totalNum) + "%"
                tailsPercent.innerHTML = Math.round(100*totalTails/totalNum) + "%"
            }
            else {
                headsPercent.innerHTML = "0%"
                tailsPercent.innerHTML = "0%"
            }
        }
})