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


    

    fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=${process.env.API_KEY}&units=metric`
    )      
    .then((response) =>
        response.json().then((data) => {
          // console.log(response.status);
          // console.log('data', data, data.city.name);
        let cityName = data.city.name;

        let datas = data.list;
          // console.log(datas);

        for (let i = 0; i < 8; i++) {
            // console.log(datas[i], 'check data');

            currentLocation.innerHTML = cityName;
            currentTemp.innerHTML = Math.ceil(datas[i].main.temp) + "&deg";
            temp.innerHTML = Math.ceil(datas[i].main.temp) + "&deg";
            firstDay.innerHTML = days[new Date().getDay()].slice(0, 3);
            secondDay.innerHTML = days[new Date().getDay() + 1].slice(0, 3);
            thirdDay.innerHTML = days[new Date().getDay() + 2].slice(0, 3);
            fourthDay.innerHTML = days[new Date().getDay() + 3].slice(0, 3);
            fifthDay.innerHTML = days[new Date().getDay() + 4].slice(0, 3);

            let icon = datas[i].weather[0].icon;
            let description = datas[i].weather[0].description;
            let imgLink =
            "<img class= weatherImg src= https://openweathermap.org/img/wn/";
            let endImgLink = "@2x.png><img>";
            let descriptionInfo = `<p> ${description} </p>`;

            let img = imgLink + icon + endImgLink + descriptionInfo;

            detailIcon.innerHTML = img;
            descWeather.innerHTML = description;
        }

        for (let j = 8; j < 16; j++) {
            // console.log(datas[j]);

            temp1.innerHTML = Math.ceil(datas[j].main.temp) + "&deg";

            let icon = datas[j].weather[0].icon;
            let description = datas[j].weather[0].description;
            let imgLink =
            "<img class= weatherImg src= https://openweathermap.org/img/wn/";
            let endImgLink = "@2x.png><img>";
            let descriptionInfo = `<p> ${description} </p>`;

            let img = imgLink + icon + endImgLink + descriptionInfo;

            detailIcon1.innerHTML = img;
            descWeather1.innerHTML = description;
        }

        for (let k = 16; k < 24; k++) {
            // console.log(datas[k]);

            temp3.innerHTML = Math.ceil(datas[k].main.temp) + "&deg";

            let icon = datas[k].weather[0].icon;
            let description = datas[k].weather[0].description;
            let imgLink =
            "<img class= weatherImg src= https://openweathermap.org/img/wn/";
            let endImgLink = "@2x.png><img>";
            let descriptionInfo = `<p> ${description} </p>`;

            let img = imgLink + icon + endImgLink + descriptionInfo;

            detailIcon3.innerHTML = img;
            descWeather3.innerHTML = description;
        }

        for (let r = 24; r < 32; r++) {
            // console.log(datas[r]);

            temp4.innerHTML = Math.ceil(datas[r].main.temp) + "&deg";

            let icon = datas[r].weather[0].icon;
            let description = datas[r].weather[0].description;
            let imgLink =
            "<img class= weatherImg src= https://openweathermap.org/img/wn/";
            let endImgLink = "@2x.png><img>";
            let descriptionInfo = `<p> ${description} </p>`;

            let img = imgLink + icon + endImgLink + descriptionInfo;

            detailIcon4.innerHTML = img;
            descWeather4.innerHTML = description;
        }

        for (let w = 32; w < 40; w++) {
            // console.log(datas[w]);

            temp5.innerHTML = Math.ceil(datas[w].main.temp) + "&deg";

            let icon = datas[w].weather[0].icon;
            let description = datas[w].weather[0].description;
            let imgLink =
            "<img class= weatherImg src= https://openweathermap.org/img/wn/";
            let endImgLink = "@2x.png><img>";
            let descriptionInfo = `<p> ${description} </p>`;

            let img = imgLink + icon + endImgLink + descriptionInfo;

            detailIcon5.innerHTML = img;
            descWeather5.innerHTML = description;
        }
        })
    )
    .catch((err) => {
        alert("Looks like there was a problem", err);
    });

        function progress(timeleft, timetotal, $element) {
            let progressBarWidth = timeleft * $element.width() / timetotal;
            $element.find('div').animate({
                width: progressBarWidth
            }, 500);
            $('#reloading').html("Reloading in" + " " + timeleft + "s");
            if (timeleft > 0) {
                setTimeout(function () {
                    progress(timeleft - 1, timetotal, $element);
                }, 1000);
            }
        }

        progress(60, 60, $('#count-bar'));

});
