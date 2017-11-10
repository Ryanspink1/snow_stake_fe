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
      <br><br>
      <h3 style="background-color:#000066;color:white;">${resort.name}</h3>
      <img id="event-cover-image" src="${resort.snowstake_url}?${Math.floor((Math.random() * 1000) + 1).toString()}" class="img-thumbnail" style="width:90vw;">
      `
    )
  })
}

function appendHomeData(resorts){
  appendAll()
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
  appendWeatherData(resorts, i)
  }
}

function appendWeatherData(resorts, i){
  $.ajax({
    url: `https://peaceful-beach-96299.herokuapp.com/http://opensnow.com/api/public/0.1/locations/data?apikey=kvist&lids=${resorts[i].open_snow_id}&type=json`,
    method: 'GET',
    data: ""
  }).then(function(data){
    $(`#resort-${i}-weather`).append(
      `
      <br>
        <div class="container">
          <div class="row">
            <div class="col">
             <div id="resort${i}-table-header" style="background-color:#000066; color:white">
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
                    <td>${data.location.current_conditions.temp}°f</td>
                    <td>${data.location.current_conditions.wind_dir}</td>
                    <td>${data.location.current_conditions.wind_spped}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-8">
            </div>
            <div class="col">
            </div>
          </div>
        </div>
       `
    )
  })
}
