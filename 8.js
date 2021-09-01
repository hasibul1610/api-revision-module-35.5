const loadPhotos =() => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhotos(data));

}

const displayPhotos = photos =>{
    const photoContainer = document.getElementById('photo-container');
    photos.forEach(photo =>{
        // console.log(photo);
        const div =document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
            <div onclick="searchLoad(${photo.id})" class="card">
                <img width="150px" src="${photo.thumbnailUrl}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${photo.title}</h5>
                </div>
            </div>
        `;
        photoContainer.appendChild(div);


    });
}

const searchLoad = (photo)=> {
    const url = `https://jsonplaceholder.typicode.com/photos/${photo}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data));
}

const displaySearchResult = photo => {
    const resultDetails = document.getElementById('result-details');
    const div = document.createElement('div');
    div.innerHTML =`
             <div class="card" style="width: 18rem;">
                <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${photo.title}</h5>
                </div>
            </div>
    
    `;
    resultDetails.appendChild(div);
}
