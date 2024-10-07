console.log("ok");

// TETING

const loadCategoris=()=>{

fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
.then((res)=>res.json() )
.then((data)=>displayCategories(data.categories))
.catch((errror)=>console.log(errror))








}


// const displayCategories=(categories)=>{
// categories.forEach(category, index => {
   
    
// });
// }

const array1 = ['a', 'b', 'c'];
array1.forEach(

    (e,ind,arr)=>{
        console.log(e,ind,arr);
    }
)










loadCategoris()