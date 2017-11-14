var resortData = {
  response:null
}

function getResortData(){
  $.ajax({
    url: `https://snowstake.herokuapp.com/api/v1/resorts`,
    method: 'GET'
  }).then(function(data){
    resortData.response = data
    appendHomeData(data)
  })
  .catch(function(error){
    console.error(error)
  })
}

function appendAll(){
  resortData.response.forEach(function(resort){
    $("#all-card-data").append(`
      <h3 style="background-color:#000066;color:white;">${resort.name}</h3>
      <img id="event-cover-image" src="${resort.snowstake_url}?${Math.floor((Math.random() * 1000) + 1).toString()}" class="img-thumbnail" style="width:90vw;">
      `
    )
  })
}

function appendRadar(){
    $("#radar-card-data").append(`
      <img id="radar-cover-image" src="https://radar.weather.gov/ridge/lite/N0R/FTG_loop.gif?${Math.floor((Math.random() * 1000) + 1).toString()}" class="img-thumbnail" style="width:90vw;">
      `
    )
}


function appendHomeData(resorts){
  appendAll()
  appendRadar()
  for(i=0;i<resorts.length;i++){
    $("#accordion").append(
      `<div class="card" style=" text-align:center;">
        <div class="card-header" role="tab" id="heading${i}" style="height:10vh;">
          <h2 class="mb-0">
            <a class="collapsed" data-toggle="collapse" href="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
              ${resorts[i].name}
            </a>
          </h2>
        </div>
        <div id="collapse${i}" class="collapse" role="tabpanel" aria-labelledby="heading${i}" data-parent="#accordion">
          <div class="card-body" style="text-align:center;">
            <img id="event-cover-image" src="${resorts[i].snowstake_url}?${Math.floor((Math.random() * 1000) + 1).toString()}" class="img-thumbnail" style="width:90vw;">
            <div id="resort-${i}-weather">
            </div>
          </div>
        </div>
      </div>
      <br>
      `
    )
  appendWeatherData(resorts[i])
  }
}

function appendWeatherData(resort){
    $(`#resort-${i}-weather`).append(
      `
      <br>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col">
            </div>
            <div class="col">
             <div id="resort${i}-current-weather-table-header" style="background-color:#000066; color:white">
             Current Conditions
             </div>
             <table class="table table-bordered" style="text-align: left">
               <thead>
                <tr>
                  <th scope="col"> Temp </th>
                  <th scope="col"> Wind Speed </th>
                  <th scope="col"> Wind Direction </th>
                </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>${resort.current_temp}°f</td>
                    <td>${resort.current_wind_dir}</td>
                    <td>${resort.current_wind_speed}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col">
            </div>
          </div>
          <div class="row justify-content-center">
          <div class="col"
            <div id="resort${i}-forecast-table-header" style="background-color:#000066; color:white;text-align:center;">
              Forecast
            </div>
            <table class="table table-bordered table-responsive table-sm" style="text-align: left;" >
              <thead>
               <tr>
                 <th scope="col"></th>
                 <th scope="col"> ${resort.period_one_dow} </th>
                 <th scope="col"> ${resort.period_one_dow} Night</th>
                 <th scope="col"> ${resort.period_two_dow} </th>
                 <th scope="col"> ${resort.period_two_dow} Night</th>
                 <th scope="col"> ${resort.period_three_dow} </th>
                 <th scope="col"> ${resort.period_three_dow} Night</th>
                 <th scope="col"> ${resort.period_four_dow} </th>
                 <th scope="col"> ${resort.period_four_dow} Night</th>
                 <th scope="col"> ${resort.period_five_dow} </th>
                 <th scope="col"> ${resort.period_five_dow} Night</th>
               </tr>
               </thead>
               <tbody>
                 <tr>
                   <th scope="row">Snow</th>
                   <td>${resort.period_one_day_snow}"</td>
                   <td>${resort.period_one_night_snow}"</td>
                   <td>${resort.period_two_day_snow}"</td>
                   <td>${resort.period_two_night_snow}"</td>
                   <td>${resort.period_three_day_snow}"</td>
                   <td>${resort.period_three_night_snow}"</td>
                   <td>${resort.period_four_day_snow}"</td>
                   <td>${resort.period_four_night_snow}"</td>
                   <td>${resort.period_five_day_snow}"</td>
                   <td>${resort.period_five_night_snow}"</td>
                 </tr>
                 <tr>
                   <th scope="row">Temp</th>
                   <td>${resort.period_one_day_temp}"</td>
                   <td>${resort.period_one_night_temp}"</td>
                   <td>${resort.period_two_day_temp}"</td>
                   <td>${resort.period_two_night_temp}"</td>
                   <td>${resort.period_three_day_temp}"</td>
                   <td>${resort.period_three_night_temp}"</td>
                   <td>${resort.period_four_day_temp}"</td>
                   <td>${resort.period_four_night_temp}"</td>
                   <td>${resort.period_five_day_temp}"</td>
                   <td>${resort.period_five_night_temp}"</td>
                 </tr>
                 <tr>
                   <th scope="row">Cover</th>
                   <td>${resort.period_one_day_weather}</td>
                   <td>${resort.period_one_night_weather}</td>
                   <td>${resort.period_two_day_weather}</td>
                   <td>${resort.period_two_night_weather}</td>
                   <td>${resort.period_three_day_weather}</td>
                   <td>${resort.period_three_night_weather}</td>
                   <td>${resort.period_four_day_weather}</td>
                   <td>${resort.period_four_night_weather}</td>
                   <td>${resort.period_five_day_weather}</td>
                   <td>${resort.period_five_night_weather}</td>
                 </tr>
                 <tr>
                   <th scope="row">Wind</th>
                   <td>${resort.period_one_day_wind_speed}</td>
                   <td>${resort.period_one_night_wind_speed}</td>
                   <td>${resort.period_two_day_wind_speed}</td>
                   <td>${resort.period_two_night_wind_speed}</td>
                   <td>${resort.period_three_day_wind_speed}</td>
                   <td>${resort.period_three_night_wind_speed}</td>
                   <td>${resort.period_four_day_wind_speed}</td>
                   <td>${resort.period_four_night_wind_speed}</td>
                   <td>${resort.period_five_day_wind_speed}</td>
                   <td>${resort.period_five_night_wind_speed}</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       </div>
       `
    )
  // })
}
