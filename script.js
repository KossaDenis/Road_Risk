let city = "London";

const object = {
    snow: "img/snow.png",
    rain: "img/rain.png",
    clouds: "img/cloud.png",
    сlear: "img/sunny.png",
    mostlySunny: "img/mostly-sunny.png",
    mist: "img/mist.png",
    sorry: "img/sorry.png",
}

let box_title = document.getElementById("box_title");
let box_temp = document.getElementById("box_temp")
let box_img = document.getElementById("box_img")
let box_weather = document.getElementById("box_weather")
let box_input = document.getElementById("box_input");

box_input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        let value = box_input.value
        if(!value) return false
        city = value
        weather()
        box_input.value = ""
        box_input.placeholder  = ""
    }
})

async function weather(){
    try{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f45b83c31e53b7d1de1d6e00152df25d`,);

        const weatherData = await response.json();
        let temperature = Math.floor(weatherData.main.temp - 272) 
    
        //data_output
        box_title.innerText = weatherData.name
        box_temp.innerText = temperature + "°"
        console.log(weatherData);
        box_weather.innerText = weatherData.weather[0].main
    
        //selection_of_photos 
        switch(weatherData.weather[0].main){
            case "Snow":
                box_img.src = object.snow
            break;
            case "Rain":
                box_img.src = object.rain
            break;
            case "Clouds":
                box_img.src = object.clouds
            break;
            case "Clear":
                box_img.src = object.сlear
            break;
            case "Mostly Sunny":
                box_img.src = object.mostlySunny
            break;
            case "Mist":
                box_img.src = object.mist
            break;
            default:
                box_img.src = object.sorry
            break;
        }
    }catch{
        box_input.value = ""
        box_input.placeholder  = "This city not found"
    }
}
weather()
