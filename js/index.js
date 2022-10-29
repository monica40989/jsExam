let autoData = document.getElementById("autoData");
let mealData = document.getElementById("mealData");
let search=document.getElementById("search")
let nameser=document.getElementById("nameser")
console.log(nameser);
let letter=document.getElementById("letter")
console.log(autoData)
var ingreArray=[];
var idArray = [];
var response;
  let cartona=''

let vari='';

//   document.addEventListener('click',function (e) {
//     console.log(e.target.innerText)
    
//   })
function opennav() {
    

let menuWidth = $(".close-menu").outerWidth();
$("#navbar").css("left", `-${menuWidth}`)

$("#menu-button").click(function () {

    if ($("#navbar").css("left") == "0px") {
        $("#menu-button").removeClass("fa fa-close")
        $("#menu-button").addClass("fa fa-align-justify")
        $(`.nav-item`).stop().animate({ opacity: '0', paddingTop: "+=40px" }, 500)
        $("#navbar").animate({ left: ` -${menuWidth}` }, 1000)


    } else {
        $("#menu-button").removeClass("fa fa-align-justify")
        $("#menu-button").addClass("fa fa-close")
        $("#navbar").animate({ left: "0px" }, 1000)
        $(`.nav-item`).stop().animate({ opacity: '1', paddingTop: "-=40px" }, 25)


    }
})};
opennav()
getApi();



async function getApi() {
    var API = await fetch(`https:www.themealdb.com/api/json/v1/1/search.php?s=${vari}`)
    response = await API.json();
    console.log(response);
    getMainData(response);

    idArray = response.meals.map(a => a.idMeal);
    console.log(idArray);
} 





function getMainData(response) {
    let cartona = '';
    for (let i = 0; i < response.meals.length; i++) {
        cartona += `<div  onclick="getMealData('${response.meals[i].idMeal}')" id="${response.meals[i].idMeal}" class="col-md-6 col-lg-3 my-3   shadow">
        <div  class="shadow meal position-relative ">
            <div>
                <img src='${response.meals[i].strMealThumb}' class="w-100 rounded-3">
                <div class="layer d-flex align-items-center bg-light bg-opacity-50 rounded-3 position-absolute w-100 h-100 ">
                    <div class="info p-2">
                        <h2>${response.meals[i].strMeal}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    }
    
    autoData.innerHTML = cartona;   
}



function getMealData(index) {
   
    $(autoData).hide(); 
    $(mealData).show(); 
    console.log(index);
    var i= idArray.indexOf(index);
    console.log(i);
    console.log((response.meals[i]).strCategory);
  callData()

function callData() {
    
window.open("mealData.html","_self")
document.write(`
<head>
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/all.min.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body class="bg-black"> 

 <section class="d-flex justify-content-start align-items-stretch p-0 " id="navbar">

        <div class="nav-tab-menu close-menu w-75 d-flex flex-column justify-content-between bg-black ">
            <div class="nav-item pt-4">
                <ul>
                    <li class="item1"><a value="search" class="nav-category text-decoration-none ">Search</a></li>
                    <li class="item2"><a value="categories" class="nav-category text-decoration-none ">Categories</a>
                    </li>
                    <li class="item3"><a value="a" class="nav-category text-decoration-none ">Area</a></li>
                    <li class="item4"><a value="i" class="nav-category text-decoration-none ">Ingredients</a></li>
                    <li class="item5"><a value="contact" class="nav-category text-decoration-none ">Contact Us</a></li>

                </ul>
            </div>
            <div class="nav-social-item text-muted py-4 px-2">
                <a><i class="fab fa-facebook-f px-2"></i></a>
                <a><i class="fab fa-twitter px-2"></i></a>
                <a><i class="fas fa-globe px-2"></i></a>
                <div class="pt-3">
                    <span>Copyright Â© 2019 All Rights Reserved.</span>
                </div>

            </div>
        </div>




        <div class="header-nav  text-center  d-flex flex-column justify-content-between bg-light">

            <div class="logo pt-3 ">
                <img src="images/logo.png" class="w-50">
            </div>
            <div class="toggel-menu fs-4 " onclick="opennav()">
                <i  id="menu-button" class="fa fa-align-justify"></i>
            </div>

            <div class="social-icon">
                <div class="lang p-1">
                    <span>
                        <i class="fas fa-globe"></i>
                    </span>
                </div>
                <div class="share p-3">
                    <span>
                        <i class="fas fa-share-alt"></i>
                    </span>
                </div>
            </div>

        </div>
    </section>
<section class="container w-75  my-1 py-2 mt-5 position-relative">
<div class="row">
<div class="col-md-4 text-white">
<img class="w-100" src="${(response.meals[i]).strMealThumb}" alt=""><br>
<h1 class="text-center">${(response.meals[i]).strMeal}</h1>
 </div>


<div class="col-md-8 text-white ">
<h2>Instructions</h2>
<p> ${(response.meals[i]).strInstructions}</p>
<p><b class="fw-bolder">Area :</b> ${(response.meals[i]).strArea}</p>
<p><b class="fw-bolder">Category :</b> ${(response.meals[i]).strCategory}</p>
<h3>Recipes :</h3>
      
    


<h3 class="my-2 mx-1 p-1">Tags :</h3>
<ul class="d-flex " id="tags">
    <li class="my-3 mx-1 p-1 alert-danger rounded">${(response.meals[i]).strTags}</li>
</ul>


<a class="btn btn-success text-white" target="_blank" href="${(response.meals[i]).strSource}">Source</a>
<a class="btn btn-danger youtube text-white" target="_blank" href="${(response.meals[i]).strYoutube}">Youtub</a>
</div>
</div>
</section>
<script src="js/jquery-3.6.0.min.js"></script>
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/index.js"></script>
</body>
`)
    
        //    mealData.innerHTML=cartona;

    }}



    // cartona+=`
//    /* <ul class="d-flex " id="recipes">
    // // for (let i = 0; i < ingreArray.length; i++) { */
    // //      if(${(response.meals[i]).strIngredient+i}!=" ")
    // //     cartona += 
    // //    `<li class="my-3 mx-1 p-1 alert-success rounded">${(response.meals[i]).strMeasure+i}${(response.meals[i]).strIngredient+i}</li></ul>`
    // // }

       
    //    </ul>




    search.addEventListener('click',function () {
        
        window.open("mealData.html","_self")
       document.write(`
<head>
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/all.min.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body class="bg-black"> 

 <section class="d-flex justify-content-start align-items-stretch p-0 " id="navbar">

        <div class="nav-tab-menu close-menu w-75 d-flex flex-column justify-content-between bg-black ">
            <div class="nav-item pt-4">
                <ul>
                    <li class="item1"><a value="search" class="nav-category text-decoration-none ">Search</a></li>
                    <li class="item2"><a value="categories" class="nav-category text-decoration-none ">Categories</a>
                    </li>
                    <li class="item3"><a value="a" class="nav-category text-decoration-none ">Area</a></li>
                    <li class="item4"><a value="i" class="nav-category text-decoration-none ">Ingredients</a></li>
                    <li class="item5"><a value="contact" class="nav-category text-decoration-none ">Contact Us</a></li>

                </ul>
            </div>
            <div class="nav-social-item text-muted py-4 px-2">
                <a><i class="fab fa-facebook-f px-2"></i></a>
                <a><i class="fab fa-twitter px-2"></i></a>
                <a><i class="fas fa-globe px-2"></i></a>
                <div class="pt-3">
                    <span>Copyright Â© 2019 All Rights Reserved.</span>
                </div>

            </div>
        </div>




        <div class="header-nav  text-center  d-flex flex-column justify-content-between bg-light">

            <div class="logo pt-3 ">
                <img src="images/logo.png" class="w-50">
            </div>
            <div class="toggel-menu fs-4 " onclick="opennav()">
                <i  id="menu-button" class="fa fa-align-justify"></i>
            </div>

            <div class="social-icon">
                <div class="lang p-1">
                    <span>
                        <i class="fas fa-globe"></i>
                    </span>
                </div>
                <div class="share p-3">
                    <span>
                        <i class="fas fa-share-alt"></i>
                    </span>
                </div>
            </div>

        </div>


            <section class="py-5">
            <div id="search-container" class="container w-75 position-fixed  " ;">
            <div class="row">
                    <div class="col-md-6 mx-auto">
                    <input  id="nameser" class=" text-white w-100 border-bottom  mb-2 bg-dark " placeholder="Search By Name">
                    </div>
                    <div class="col-md-6 mx-auto">
                        <input class="text-white w-100 bg-dark border-border-bottom " type="text" maxlength="1" id="letter" placeholder="search By First Letter...">
                    </div>
    
                </div></div>
               
            <section class="container text-center  ">
    
                <div class="row" id="res">
    
    
                </div>
    
    
            </section>
    
        </section>`

         (nameser).keyup((e) => {
            search(e.target.value)
        })
        (letter).keyup((e) => {
            getByLetter(e.target.value)
        })
)

function search(name) {
    vari=name;
    console.log(response)
    
}
    
})
    

    


