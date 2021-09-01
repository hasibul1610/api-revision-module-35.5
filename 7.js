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
            <div class="card">
                <img width="150px" src="${photo.thumbnailUrl}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${photo.title}</h5>
                </div>
            </div>
        `;
        photoContainer.appendChild(div);


    });
}
