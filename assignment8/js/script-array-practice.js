//STEP 1 

let favMovies = ['Inside Out', 'Frozen', 'Ratarouille', 'Toy Story', 'Encanto']
console.log(favMovies[1]);

//STEP 2 

let movies = new Array(5)
movies[0] = 'Inside Out'
movies[1] = 'Frozen'
movies[2] = 'Ratarouille'
movies[3] = 'Toy Story'
movies[4] = 'Encanto'

console.log(movies[0]);

//STEP 3 

movies[2] = 'Titanic'
console.log(movies.length)


//STEP 4 

let movies1 = []
movies1[0] = '1917'
movies1[1] = 'Moonfall'
movies1[2] = 'City Lights'
movies1[3] = 'Under the Skin'
movies1[4] = 'Eternal Sunshine of the Spotless Mind'
deleteMovie = movies1.shift()
console.log(movies1)

//STEP 5 

let movies2 = []
movies2[0] = 'Superman'
movies2[1] = 'Badman'
movies2[2] = 'City Lights'
movies2[3] = 'Spider man'
movies2[4] = 'Eternal Sunshine of the Spotless Mind'
movies2[5] = 'The island'
movies2[6] = 'Toy Story'
for (let movie in movies2) {
    console.log(movies2[movie])
}


//STEP 6 

Array.prototype.myname = () => {}
for (let i of movies2) {
    console.log(i)
}


//STEP 7 

Array.prototype.myname = () => {}
console.log(movies2.sort())
for (let j of movies2) {
    console.log(j)
}


//STEP 8 
let leastFavMovies = []
leastFavMovies[0] = 'A Woman Under the Influence '
leastFavMovies[1] = 'Annie Hall'
leastFavMovies[2] = 'Aaging Bull'

console.log(`Movies I like `)
Array.prototype.myname = () => {}
for (let i of movies2) {
    console.log(i)
}

console.log(`Movies I regret watching \n`)
Array.prototype.myname = () => {}
for (let i of leastFavMovies) {
    console.log(i)
}

//STEP 9 

newMovieList = movies2.concat(leastFavMovies)
console.log(newMovieList)
revSortList = newMovieList.reverse()
console.log(revSortList)

//STEP 10 
lastItem = revSortList.pop()
console.log(lastItem)

//STEP 11 

firstItem = revSortList.shift()
console.log(firstItem)

//STEP 12

retrieveMovie = newMovieList.slice(6)
console.log(retrieveMovie)

//STEP 13
favMoviesRank = [
    ['Inside Out', 1],
    ['Frozen', 2],
    ['Ratarouille', 3],
    ['Toy Story', 4],
    ['Encanto', 5]
]
let onlyMovies = favMoviesRank.filter((item) => {
 
    return typeof item [0][1] === 'string' })
console.log(onlyMovies)

//STEP 14

let employees = []
employees[0] = 'ZAK'
employees[1] = 'JESSICA'
employees[2] = 'MARK'
employees[3] = 'FRED'
employees[4] = 'SALLY'
console.log(`Employees:`)
 function showEmployee() {
        employees.forEach((employees) => {
       
        console.log(`${employees}\n`)
    })
 }
 showEmployee()

//STEP 15

let filterValues = [58, '', 'abcd', true, null, false, 0]
let onlyName = filterValues.filter((item) => {
    return typeof item === 'string'
})
let onlyNum = filterValues.filter((item) => {
    return typeof item === 'number'
})

console.log(onlyName.concat(onlyNum))



//STEP 16

nummArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
randomNum = nummArray[(Math.floor(Math.random() * nummArray.length))]
console.log(randomNum)


//STEP 17

numArray = [2, 8, 6, 1, 4, 5, 7]
let larger = 0
let delElement;
Array.prototype.myname = () => {}
for (let i of numArray) {
    if(larger < i){
        larger = i
    } 
    console.log(larger)
}



