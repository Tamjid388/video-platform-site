

// Fetch and Load and show all catagories on html

const loadCategoris=()=>{

fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
.then((res)=>res.json() )
.then((data)=>displayCategories(data.categories))
.catch((errror)=>console.log(errror))






}



const loadVidoes=()=>{

    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res)=>res.json() )
    .then((data)=>displayVideos(data.videos))
    .catch((errror)=>console.log(errror))
    
    
    
    
    
    
    }
    // Load Category Videos after clicking button
    const loadcategoryVideos=(id)=>{
    
      // fetch api

      fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
      .then((res)=>res.json() )
      .then((data)=>
      
      {
        const activeBtn=document.getElementById(`btn-${id}`)
        displayVideos(data.category);

      }
      )
      .catch((errror)=>console.log(errror))



    }


    const displayVideos=(videos)=>{
        const VideoContainer=document.getElementById('videos');
        VideoContainer.innerHTML=''
        console.log(videos);
        if(videos.length == 0){
          VideoContainer.classList.remove('grid')
           VideoContainer.innerHTML=`
           <div class="h-full w-full flex flex-col gap-5 justify-center items-center">
           
           <img src="assets/Icon.png"/>

           <h1 class="font-bold">No Content Here</h1>
           </div>
           `
           return
        }
        else{
          VideoContainer.classList.add('grid')
        }
        videos.forEach(video => {
            const card=document.createElement('div')
            card.classList='card card-compact'
            card.innerHTML=
            `
             <figure class="h-[200px] object-cover">
    <img class="h-full object-cover"
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
<div class="card=body flex gap-2">
  <div>
    <img  class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}" />
  </div>




  <div class="flex flex-col">
    <div>
      <h2 class="font-bold">${video.title}</h2>
      <p></p>
    </div>

    <div class="flex">
      <p class="text-gray-400">${video.authors[0].profile_name}</p>
     ${video.authors[0].varified=== true ?`<img
        class="w-5 h-5"
        src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000"
      />`:""} 
    </div>
  </div>
</div>
            `
            VideoContainer.appendChild(card)
       

        
       });

    }

   

const displayCategories=(categories)=>{
    const categoryContainer=document.getElementById('category-div');
categories.forEach(
    (item)=>{
     

        const buttonContainer=document.createElement('div')
      buttonContainer.innerHTML=`
      <button id="btn-${item.category_id}" onclick="loadcategoryVideos(${item.category_id})" class='btn'>
      ${item.category}
      </button>
      `
        
        categoryContainer.appendChild( buttonContainer)

      
    }
)
}



// const displayCategories=(categories)=>{
//   const categoryContainer=document.getElementById('category-div');
// categories.forEach(
//   (item)=>{
   

//       const button=document.createElement('button')
//       button.classList='btn';
//       button.innerText=item.category
      
//       categoryContainer.appendChild(button)

    
//   }
// )
// }



// Calling the Functions
loadCategoris()
loadVidoes()

const demo={
    "category_id": "1001",
    "video_id": "aaad",
    "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
    "title": "Smells Like Teen Spirit",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
            "profile_name": "Oliver Harris",
            "verified": true
        }
    ],
    "others": {
        "views": "5.4K",
        "posted_date": "1672656000"
    },
    "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
}