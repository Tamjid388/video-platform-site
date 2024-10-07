

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


    const displayVideos=(videos)=>{
        const VideoContainer=document.getElementById('videos');
        console.log(videos);
        videos.forEach(video => {
            const card=document.createElement('div')
            card.classList='card card-compact'
            card.innerHTML=
            `
             <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
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
        // console.log(item);

        const button=document.createElement('button')
        button.classList='btn';
        button.innerText=item.category
        
        categoryContainer.appendChild(button)
    }
)
}



// Calling the Functions
loadCategoris()
loadVidoes()