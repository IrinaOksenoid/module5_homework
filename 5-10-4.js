let userName = prompt("Введите свое имя:");
let yearOfBirth = +prompt("Введите год своего рождения:");
if (!yearOfBirth || isNaN(yearOfBirth)) {
  yearOfBirth = +prompt("Год должен быть числом!");
}
if (yearOfBirth) {
  let lastNumber = (2024 - yearOfBirth) % 10;
  if (lastNumber == 1) {
    alert(`${userName}: ${2024 - yearOfBirth} год`);
  }
  if (lastNumber == 0 || lastNumber > 4) {
    alert(`${userName}: ${2024 - yearOfBirth} лет`);
  } else {
    alert(`${userName}: ${2024 - yearOfBirth} года`);
  }
} else {
  alert("Введены неполные данные");
}
