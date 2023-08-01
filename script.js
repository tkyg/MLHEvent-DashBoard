async function load(){
  //first, fetch events from the google apps script api
  const response = await fetch("https://script.google.com/macros/s/AKfycbw8za8eimPTt_2YHW6M79rneyGEN32veCU6Xxnw6FuUfMm4yC-K2iE2VW3x9X2oGMIKuA/exec");
  //console.log(response)
  const events = await response.json();
  console.log({ events })

  const eventsContainer = document.getElementById('events-container');
  eventsContainer.innerHTML = '';
    //loop through events and place them on page
  for (let event of events){
    eventsContainer.innerHTML += `
      <div class="card card-compact w-72 bg-base-100 shadow-xl">
        <figure><img src="${event.Image}" alt="${event.Name}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${event.Name}</h2>
          <p>${event.Location}</br>@ ${event.Date}</p>
          <div class="card-actions justify-end">
            <a class ="btn btn-primary" href="${event.Link}" target="_blank">RSVP</a>
          </div>
        </div>
      </div>
    `
  }
}
load()
