
let suggestions = [
    "Love is life",
    "Innovation",
    "Hudeen",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];



// getting all required elements
const searchWrapper = document.querySelectorAll(".search-input");
const inputBox = document.querySelectorAll("input");
const suggBox = document.querySelectorAll(".autocom-box");
const icon = document.querySelector(".icon");
let linkTag = document.querySelector("a");
let webLink;


// if user press any key and release

if (inputBox === '') {
    
    suggBox.forEach(element => {
        element.classList.remove('hidden'); //show autocomplete box
        console.log(suggBox);
      });
     
}else{

    inputBox.forEach(element => {
        
element.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li class="p-3 hover:bg-purple-300 dark:hover:bg-slate-600 transition-all z-10 dark:text-gray-200 hover:text-purple-700 text-gray-700 flex justify-between items-center list-none"><span class="mr-4">${data}</span><i class="fas fa-search text-gray-400"></i></li>`;
        });
      suggBox.forEach(element => {
        element.classList.remove('hidden'); //show autocomplete box
      });
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li")
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        
      suggBox.forEach(element => {
        element.classList.add('hidden'); //show autocomplete box


      });
    }
}


 });

}

function select(element){
    let selectData = element.textContent;
    let inputValue = inputBox.forEach(element => {
        element.value = selectData;
        console.log(selectData);
    });

    suggBox.forEach(element => {
        element.classList.remove('hidden'); //show autocomplete box

      });
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputValue;
        listData = `<li class="p-3 z-20 dark:text-gray-200 text-gray-700 list-none">${userValue}</li>`;
   
    }else{
      listData = list.join('');
    }

    suggBox.forEach(element => {
        element.innerHTML = listData;

      });
  
}


