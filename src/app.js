import './scss/style.scss';


document.addEventListener("DOMContentLoaded", () => {

    let currentLocation = document.getElementById('current-location');
    let currentTime = document.getElementById('time');
    let currentTemp = document.getElementById('current-temp');
    let firstDay = document.getElementById('day-one');
    let secondDay = document.getElementById('day-two');
    let thirdDay = document.getElementById('day-three');
    let fourthDay = document.getElementById('day-four');
    let fifthDay = document.getElementById('day-five');
    let temp = document.getElementById('day-temp');
    let temp1 = document.getElementById('day-temp1');
    let temp3 = document.getElementById('day-temp3');
    let temp4 = document.getElementById('day-temp4');
    let temp5 = document.getElementById('day-temp5');
    let detailIcon = document.getElementById('det-icon');
    let detailIcon1 = document.getElementById('det-icon1');
    let detailIcon3 = document.getElementById('det-icon3');
    let detailIcon4 = document.getElementById('det-icon4');
    let detailIcon5 = document.getElementById('det-icon5');
    let reload = document.getElementById('reloading');
    let descWeather = document.getElementById('description');
    let descWeather1 = document.getElementById('description1');
    let descWeather3 = document.getElementById('description3');
    let descWeather4 = document.getElementById('description4');
    let descWeather5 = document.getElementById('description5');

    let days = ["Sunday", "Monday", "Tuesday", 'Wednesday', 'Thursday', 'Friday', "Saturday", 'Sunday'];

    let today = new Date(Date.now()).toTimeString().substr(0, 5);
    let firstDots = `<span id="circle"></span><span id="circle1"></span><span id="circle2"></span>`;
    let lastDots = `<span id="circle4"></span><span id="circle5"></span><span id="circle6"></span>`;

    currentTime.innerHTML =  firstDots + today + " " + "GMT" + lastDots;


    fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=c7d072a22273d71b69d9585961a298cd&units=metric')

        .then(response => response.json()
        .then(data => {
            // console.log('data', data, data.city.name);
            let cityName = data.city.name;

            let datas = data.list;
            // console.log(datas);

            for (let i = 0; i < 8; i++) {
                // console.log(datas[i], 'check data');

                let icon = datas[i].weather[0].icon;
                let description = datas[i].weather[0].description;
                let imgLink = "<img class= weatherImg src= https://openweathermap.org/img/wn/";
                let endImgLink = "@2x.png><img>";
                let descriptionInfo = `<p> ${description} </p>`; 

                let img = imgLink + icon + endImgLink + descriptionInfo;

                currentLocation.innerHTML = cityName;
                currentTemp.innerHTML = Math.ceil(datas[i].main.temp) + "&deg";
                temp.innerHTML = Math.ceil(datas[i].main.temp) + "&deg";
                firstDay.innerHTML = days[new Date().getDay()].slice(0, 3);
                secondDay.innerHTML = days[new Date().getDay() + 1].slice(0, 3);
                thirdDay.innerHTML = days[new Date().getDay() + 2].slice(0, 3);
                fourthDay.innerHTML = days[new Date().getDay() + 3].slice(0, 3);
                fifthDay.innerHTML = days[new Date().getDay() + 4].slice(0, 3);
                detailIcon.innerHTML = img;
                descWeather.innerHTML = description;
            }
        })
        )
        .catch(err => {
            console.log('Looks like there was a problem: \n2', err)
        });

});