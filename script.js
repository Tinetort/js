let numberOfFilms

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    while (
        numberOfFilms == '' ||
        numberOfFilms == null ||
        isNaN(numberOfFilms)
    ) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
}
start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.privat)

function writeYourGenres(){
    for (let i = 1; i < 4; i++) {
        const a = prompt(`Vash lubimiy zanr pod nomerom ${i}`)
        if (
            a != null &&
            a.length != 0 &&
            a.length < 50
        ) {
            personalMovieDB.genres.push(a)
            console.log('done')
        } else {
            console.log('error')
            i--
        }
    }
}
writeYourGenres()

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько Вы его отцениваете', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько Вы его отцениваете', '')

// personalMovieDB.movies[a] = b
// personalMovieDB.movies[c] = d
// console.log(personalMovieDB)

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
            b = prompt('На сколько Вы его отцениваете', '').trim()

        if (
            a != null &&
            b != null &&
            a.length != 0 &&
            b.length != 0 &&
            a.length < 50
        ) {
            personalMovieDB.movies[a] = b
            console.log('done')
        } else {
            console.log('error')
            i--
        }
    }
}
rememberMyFilms()
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Prosmotrenno malo filmov')
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log('Vi klasicheskiy zritel')
    } else if (personalMovieDB.count >= 30) {
        console.log('Vi kinioman')
    } else {
        console.log('Proisoshla osibka')
    }
}
detectPersonalLevel()
