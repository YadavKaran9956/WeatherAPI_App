link1 = "https://api.openweathermap.org/geo/1.0/direct?q=Lucknow,IND&appid=0c3bc4088571169278663e77ba96b889";
let request = new XMLHttpRequest();

request.open('GET', link1, true);
request.onload = function () {
    let obj = JSON.parse(this.response);
    console.log(obj);
    if (obj) {
        let lat = obj[0].lat;
        let long = obj[0].lon;

        link2 = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=0c3bc4088571169278663e77ba96b889";
        request.open('GET', link2, true);
        request.onload = function () {
            let data = JSON.parse(this.response);
            console.log(data);
            if (data) {
                document.getElementById("city").innerHTML = data.name;
                document.getElementById("weatherType").innerHTML = data.weather[0].description;
                document.getElementById("temp").innerHTML = Math.round(data.main.temp - 273.15);
                document.getElementById("humidity").innerHTML = data.main.humidity;
                document.getElementById("windspeed").innerHTML = Math.round(data.wind.speed * 3.6) + "km/h";
                document.getElementById("weatherImg").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            }
        }

        request.send();
    } else {
        alert("Sorry, Weather API server is down!!!");
    }
}

request.send();

function refreshWeather() {
    request.open('GET', link1, true);
    request.onload = function () {
        let obj = JSON.parse(this.response);
        console.log(obj);
        if (obj) {
            let lat = obj[0].lat;
            let long = obj[0].lon;

            link2 = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=0c3bc4088571169278663e77ba96b889";
            request.open('GET', link2, true);
            request.onload = function () {
                let data = JSON.parse(this.response);
                console.log(data);
                if (data) {
                    document.getElementById("city").innerHTML = data.name;
                    document.getElementById("weatherType").innerHTML = data.weather[0].description;
                    document.getElementById("temp").innerHTML = Math.round(data.main.temp - 273.15);
                    document.getElementById("humidity").innerHTML = data.main.humidity;
                    document.getElementById("windspeed").innerHTML = Math.round(data.wind.speed * 3.6) + "km/h";
                    document.getElementById("weatherImg").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
                }
            }

            request.send();
        } else {
            alert("Sorry, Weather API server is down!!!");
        }
    }

    request.send();
}