let form = document.getElementById('form')
let display = document.getElementById('display')
let btn = document.getElementById('btn')

let city = document.getElementById('city')
let ceus = document.getElementById('ceus')
let tem = document.getElementById('temperature')

let humidity = document.getElementById('humidity')

let wind = document.getElementById('wind')

let feel = document.getElementById('feel')

let visibility = document.getElementById('pre')

let mw = document.getElementById('mw')
let uv = document.getElementById('uv')


// req=new XMLHttpRequest;
// req.open('GET', 'https://api.weatherapi.com/v1/current.json?key=3ad0ca2a21a74157a75141605242309&q=London&aqi=no');
//     console.log(req);
//     req.onload=function(){
//         myReq=req.responseText;
//         console.log(myReq);
//         newData=JSON.parse(myReq)
//         console.log(newData);
        
//     }
// req.send()


btn.addEventListener('click', function (e) {
    e.preventDefault

    city.innerHTML = display.value;


    setInterval(() => {
        

        xhr = new XMLHttpRequest

        xhr.open('GET', `https://api.weatherapi.com/v1/current.json?key=3ad0ca2a21a74157a75141605242309&q=${display.value}&aqi=no`)
    
            xhr.onload=function () {
            console.log(xhr);
            myxhr = xhr.responseText;

            data = JSON.parse(myxhr);
            console.log(data);

            ceus.innerHTML = data.current.temp_c +'⁰C';
            humidity.innerHTML = data.current.humidity +'%';
            wind.innerHTML = data.current.wind_kph +'kph';
            feel.innerHTML=data.current.feelslike_c +'⁰';
            visibility.innerHTML=data.current.vis_km +'km';
            pre.innerHTML=data.current.pressure_mb+'mb';
            uv.innerHTML=data.current.uv +'mw';
            city.innerHTML=data.location.name;

        
        }
        
        xhr.send()
    }, 1000);
});