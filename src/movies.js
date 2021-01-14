// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArr) {
    let directorsArr = moviesArr.map((movies => {
        return movies.director
    }))
    return directorsArr
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {
    if (moviesArr === 0) {
        return 0
    }
    let stevenArr = moviesArr.filter((movies => {
        if (movies.director == "Steven Spielberg") {
            return true
        }else {
            return false
        }   
    }))
    return stevenArr.length
}

let 

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr) {
    if (moviesArr.length == 0){
        return 0
    }
    let total = moviesArr.reduce((acc, movies) => {
        if (movies.rate) {
            return acc + movies.rate
        }
        else {
            return acc
        }
    }, 0)
    return total/moviesArr.length
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr) {
     if (moviesArr.length == 0) {
         return 0
     }
     let total = moviesArr.reduce((acc, movies) => {
         if (movies.rate && movies.genre.includes("Drama")) {
             return acc + movies.rate
         }
         else {
             return acc
         }
     }, 0)
     return total/moviesArr.length
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {

    let filteredMovies = movies.filter((movies) => {
        return movies.year
    })

    let oderedYear = filteredMovies.sort((year1, year2) => {
        if (year1 > year2) {
            return 1
        }
        else if (year1 < year2) {
            return -1
        }
        else {
            return 0
        }
    })
    return orderedYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArr) {
    
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
