// fetch("/file.json")
//   .then((data) => data.json())
//   .then((data) =>
//     data.map((x) => {
//       const card = document.querySelector(".row");
//       card.innerHTML += `<div class="container-sub card col-3 justify-content-spaceround m-2">
//         <h5 class="title">${x.title}</h5>
//         <img src="${x.img}" alt="">
//         <p class="body">${x.body}</p>
//         <p>${x.date}</p>
//         </div>`;
//     })
//   );
  
fetch("/file.json")
  .then((data) => data.json())
  .then(data=> data.filter(e=>{
      if(e.type=='gov') return
  }))
  .then(console.log(data))

  
  
// fetch("/file.json")
//   .then((data) => data.json())
//   .then((data) =>
//     data.map((x) => {
//       const card = document.querySelector(".row");
//       const gov = document.querySelector(".gov");
//       //   console.log(x.filter());
//     })
//   );
