const regexDate = /(\d{4})-(\d{2})-(\d{2})/g

const date = '2021-09-27'

const formatDate = date.replace(regexDate, '$3/$2/$1')

console.log(formatDate) // '27/09/2021'