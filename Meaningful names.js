// Meaningless names for variables, functions, and classes

// bad 
function getScore(w, a){
    return w + (a * 5)
}

// good
function getScore(wins, averageKda){
    return wins + (averageKda * 5)
}