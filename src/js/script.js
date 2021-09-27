
// let url = 'https://jsonplaceholder.typicode.com/posts/',
//     data = {username: 'example'};

// fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type':'application/json'
//         }
//     })
//     .then((response) => response.json())
//     .then((myJson) => console.log('Succes', myJson))
//     .catch(error => console.error('Error', error));

// Оптимизированный вариант!!---------------------



// const getResource = async (url) => {
//     const res = await fetch(url);

//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }

//     const some = await res.json();

//     return some;
// };


// getResource('https://jsonplaceholder.typicode.com/todos/1')
//     .then((res) => console.log('Succes', res))
//     .catch(error => console.error('Error', error));



//============== Пример работы с api ======================//

// class GotService {

//     constructor() {
//         this._apiBase = 'https://www.anapioficeandfire.com/api';
//     }

//     async getResource(url) {
//              const res = await fetch(`${this._apiBase}${url}`);
        
//         if (!res.ok) {
//             throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//         }
            
//         return await res.json();

//     };
//     getAllCharacters() {
//         return this.getResource('/characters?page=8&pageSize=10');
//     }

//     getCharacters(id) {
//         return this.getResource(`/characters/${id}`);
//     }
    
// }

// const got = new GotService();

// got.getAllCharacters()
//     .then(res => {
//         res.forEach( item => console.log(item.name));
//     });

// got.getCharacters(130)
//     .then(res => console.log(res));

const button = document.querySelector('.button'),
      image = document.querySelector('.img'),
      url = 'https://aws.random.cat/meow';

async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.file;
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', () => {
    let isLoaded = image.complete;

    if (isLoaded) {
        fetchHandler();
    }
    
});