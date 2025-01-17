
// ////////////////////////////////////////////////////////////////// changing-style-start////////////////////////////////////////////////////////////////
const titles = ["Frontend Developer", "Backend Developer", "Fullstack Developer", "  UI/UX DESIGNER"];  
let currentIndex = 0;  
const titleElement = document.getElementById("developer-title");  

function changeTitle() {  
    titleElement.classList.add('fade-out');  

    setTimeout(() => {  
        currentIndex = (currentIndex + 1) % titles.length;  
        titleElement.textContent = titles[currentIndex];  
        
        titleElement.classList.remove('fade-out');  
        titleElement.classList.add('fade-in');  
        
        setTimeout(() => {  
            titleElement.classList.remove('fade-in');  
        }, 500); // Time to wait before removing fade-in class  
    }, 500); // Time before changing title  
}  


// Initial Fade-in  
titleElement.classList.add('fade-in');  

// Change title every 2 seconds  
setInterval(changeTitle, 2000);

///////////////////////////////////////////////////////////////////////////////////////////// changing-style-end///////////////////////////////////////////


// phone icon display
// var phone = document.getElementById("phone");
// var unphone = document.querySelector(".fa-phone-volume");

//  phone.addEventListener("click", function(){
//     document.getElementById("displayphone").innerHTML = "09036910498";
//  });
function phone(){
    document.getElementById("displayphone").innerHTML = "09036910498 / 08039645710";
};

function unphone(){
    document.getElementById("displayphone").innerHTML = "";
};
