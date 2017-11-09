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
  debugger;
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
          </div>
        </div>
      </div>
      <br>`
    )
  }
}
