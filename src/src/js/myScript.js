let type_site = prompt("Выберите тип сайта: \n" + "1) Интернет-представительства организаций/лица\n" + "2) Информационные ресурсы\n" + "3) Веб-сервисы\n" + "4) Социальные сети\n");
let cost = 0;

if (type_site === "1") {
    alert("Вы выбрали сайт представительства стоимость = 1000 рублей");
    cost += 1000;
} else if (type_site === "2") {
    alert("Вы выбрали сайт информационного ресурса стоимость = 2000 рублей");
    cost += 2000;
} else if (type_site === "3") {
    alert("Вы выбрали сайт  веб-сервисы стоимость = 3000 рублей");
    cost += 3000;
} else if (type_site === "4") {
    alert("Вы выбрали сайт  социальные сети стоимость = 4000 рублей");
    cost += 4000;
} else {
    alert("Ошибка!!! Вы ввели значения не от 1 до 4, могут быть значения 1, 2, 3, 4")
}

let design = prompt("Выберите тип дизайна: \n" + "1)Ваш дизайн \n" + "2)Дизайн готовых проектов \n" + "3)Создание для вас личного дизайна")
if (design === "1") {
    alert("Вы выбрали ваш дизайн стоимостью = 0 рублей");
    cost += 0;
} else if (design === "2") {
    alert("Вы выбрали дизайн готовых проектов стоимость = 1500 рублей");
    cost += 1500;
} else if (design === "3") {
    alert("Вы выбрали создание для вас личного дизайна = 5000 рублей");
    cost += 5000;
} else {
    alert("Ошибка!!! Вы ввели значения не от 1 до 3, могут быть значения 1, 2, 3");
}

let adaptive = prompt("Выберите адаптивность сайта \n" + "1)Фиксированный \n" + "2)Резиновый (гибкий) \n" + "3)Адаптивный");
if (adaptive === "1") {
    alert("Вы выбрали Фиксированный сайт стоимостью = 1000 рублей");
    cost += 1000;
} else if (adaptive === "2") {
    alert("Вы выбрали Резиновый (гибкий) сайт стоимость = 2000 рублей");
    cost += 2000;
} else if (adaptive === "3") {
    alert("Вы выбрали Адаптивный сайт стоимость = 3000 рублей");
    cost += 3000;
} else {
    alert("Ошибка!!! Вы ввели значения не от 1 до 3, могут быть значения 1, 2, 3");
}

let timeCreate = prompt("Сроки для готовности сайта \n" + "1)Делать к определенному сроку \n" + "2)Ускорение работы на несколько дней \n" + "3)Быстро сделать ваш проект");
if (timeCreate === "1") {
    alert("Вы выбрали к определенному сроку стоимостью = 1000 рублей");
    cost += 1000;
} else if (timeCreate === "2") {
    alert("Вы выбрали ускорение работы на несколько дней стоимость = 2000 рублей");
    cost += 2000;
} else if (timeCreate === "3") {
    alert("Вы выбрали быстро закончить ваш проект стоимость = 5000 рублей");
    cost += 5000;
} else {
    alert("Ошибка!!! Вы ввели значения не от 1 до 3, могут быть значения 1, 2, 3");
}
alert("Цена создания вашего проекта = " + cost + " Рублей");
