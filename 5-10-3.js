let userName = prompt("Введите свое имя:");
if (!userName) {
  userName = prompt("Не оставляйте пустую строку, введите имя:");
}
let yearOfBirth = +prompt("Введите год своего рождения:");
if (!yearOfBirth || isNaN(yearOfBirth)) {
  yearOfBirth = +prompt("Год должен быть числом!");
}
if (yearOfBirth && userName) {
  alert(`${userName}: ${2024 - yearOfBirth}`);
} else {
  alert("Введены неполные данные");
}
