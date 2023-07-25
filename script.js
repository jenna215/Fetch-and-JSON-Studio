// TODO: add code here
window.addEventListener('load', function(){
    const result = document.getElementById('container');

    document.addEventListener('click', function (event){
        fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
            response.json().then(function(data){
                console.log(data);
                let astronauts = "";
                for(i=0; i<data.length;i++){
                    console.log(data[i])
                    let astronaut = data[i]
                    console.log(astronaut.firstName)
                    astronauts += `<div class="astronaut">
                    <div class="bio">
                       <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                       <ul>
                          <li>Hours in space: ${astronaut.hoursInSpace}</li>
                          <li>Active: ${astronaut.active}</li>
                          <li>Skills: ${astronaut.skills}</li>
                       </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                    </div>`
                }
                result.innerHTML = astronauts;
            })
        })
    })
})