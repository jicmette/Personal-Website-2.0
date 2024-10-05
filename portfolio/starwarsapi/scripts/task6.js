const results = document.querySelector('#libraryResults');

async function asyncFetch(value) {
    const result = await fetch(`https://swapi.dev/api/${value}/`);
    const data = await result.json();
    console.log(data);
    viewResults(data, value);
}

function viewResults(data, value) {
    let output = '';
    console.log(data);
    if (value === 'people') {
        data.results.forEach(item => {
            output += `
                <div style='background-color:black'>
                    <h2 style='color: white'>NAME: ${item.name}</h2>
                    <h3 style='color: white'>BIRTH DATE: ${item.birth_year}</h3>
                    <h3 style='color: white'>GENDER: ${item.gender}</h3>
                    <h3 style='color: white'>HEIGHT: ${item.height}</h3>
                </div>
            `
        })
    } 
    
    if (value === 'planets') {
        data.results.forEach(item => {
            output += `
                <div style='background-color:#ffc107'>
                    <h2 style='color: black'>NAME: ${item.name}</h2>
                    <h3 style='color: black'>POPULATION: ${item.population}</h3>
                    <h3 style='color: black'>ROTATION PERIOD: ${item.rotation_period}</h3>
                    <h3 style='color: black'>CLIMATE: ${item.climate}</h3>
                    <h3 style='color: black'>TERRAIN: ${item.terrain}</h3>
                </div>
            `
        })
    }

    if (value === 'films') {
        data.results.forEach(item => {
            output += `
                <div style='background-color: black'>
                    <h2 style='color: #ffc107'>TITLE: ${item.title}</h2>
                    <h3 style='color: #ffc107'>EPISODE: ${item.episode_id}</h3>
                    <h3 style='color: #ffc107'>${'OPENING'}</h3>
                    <p style='color: #ffc107'>${item.opening_crawl}</p>
                    <h3 style='color: #ffc107'>DIRECTOR: ${item.director}</h3>
                    <h3 style='color: #ffc107'>RELEASE DATE: ${item.release_date}</h3>
                </div>
            `
        })
    }

    results.innerHTML = output;
}

document.querySelector('#buttons').addEventListener('click', e => {
    asyncFetch(e.target.textContent.trim().toLowerCase())
})