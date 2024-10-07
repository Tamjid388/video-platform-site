

// Fetch and Load and show all catagories on html

const loadCategoris=()=>{

fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
.then((res)=>res.json() )
.then((data)=>displayCategories(data.categories))
.catch((errror)=>console.log(errror))






}



const loadVidoes=()=>{

    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=>res.json() )
    .then((data)=>displayCategories(data.categories))
    .catch((errror)=>console.log(errror))
    
    
    
    
    
    
    }




const displayCategories=(categories)=>{
    const categoryContainer=document.getElementById('category-div');
categories.forEach(
    (item)=>{
        console.log(item);

        const button=document.createElement('button')
        button.classList='btn';
        button.innerText=item.category
        
        categoryContainer.appendChild(button)
    }
)
}

loadCategoris()