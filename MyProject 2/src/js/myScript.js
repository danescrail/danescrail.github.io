let cost = 0,
    period = 0;
const form = document.getElementById("form_cost");
form.addEventListener("submit", getFormValue);

function getFormValue(event) {
    let cost = 0;
    let period = 0;
    event.preventDefault();
    const
        type_site = form.querySelector('[name="type_site"]'), //получаем поле type_site
        design = form.querySelector('[name="design"]'), //получаем поле design
        adaptive = form.querySelector('[name="adaptive"]'); //получаем поле adaptive

    if (type_site === 1) {
        cost += 1000;
        period += 15;

    } else if (type_site === 2) {
        cost += 2000;
        period += 10;
    } else if (type_site === 3) {
        cost += 3000;
        period += 30;
    } else if (type_site === 4) {
        cost += 4000;
        period += 20;
    }

    if (design === 1) {
        cost += 0;
    } else if (design === 2) {
        cost += 1500;
        period += 15;
    } else if (design === 3) {
        cost += 5000;
        period += 20;
    }

    if (adaptive === 1) {
        cost += 1000;
        period += 20;
    } else if (adaptive === 2) {
        cost += 2000;
        period += 300;
    } else if (adaptive === 3) {
        cost += 3000;
        period += 50;
    }
    return(cost, period)
}

const time = 1000, //ms
    step = 1;




function outNum(num, elem) {
    let l = document.quarySelector("#" + elem);
    n = 0
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
            n = n + step;
            if (n == num) {
                clearInterval(interval);
            }
            l.innerHTML = n;
        },
        t);
}

outNum(1000, "out-1");
outNum(1500, "out-2");
outNum(2000, "out-3");
outNum(3000, "out-4");
