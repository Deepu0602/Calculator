<<<<<<< HEAD
const galleryItems =
    document.querySelectorAll(".gallery-item");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxCategory =
    document.getElementById("lightboxCategory");

const closeBtn =
    document.getElementById("closeBtn");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");


let visibleItems = [];

let currentIndex = 0;

 

filterButtons.forEach(button => {

    button.addEventListener("click", () => {
 
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

 
        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");


        galleryItems.forEach(item => {

            const category =
                item.getAttribute("data-category");

            if (
                filter === "all" ||
                category === filter
            ) {
                item.classList.remove("hide");
            }

            else {
                item.classList.add("hide");
            }

        });


        updateVisibleItems();
    });

});

 

function updateVisibleItems() {

    visibleItems =
        Array.from(galleryItems)
            .filter(item =>
                !item.classList.contains("hide")
            );
}

 

updateVisibleItems();

 
galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        updateVisibleItems();

        currentIndex =
            visibleItems.indexOf(item);

        openLightbox();
    });

});


function openLightbox() {

    const item =
        visibleItems[currentIndex];

    const image =
        item.querySelector("img");

    const title =
        item.querySelector("h3");

    const category =
        item.querySelector("p");


    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt;

    lightboxTitle.textContent =
        title.textContent;

    lightboxCategory.textContent =
        category.textContent;


    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}
 

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "auto";
}


closeBtn.addEventListener(
    "click",
    closeLightbox
);


function showNext() {

    currentIndex++;

    if (
        currentIndex >=
        visibleItems.length
    ) {
        currentIndex = 0;
    }

    openLightbox();
}


nextBtn.addEventListener(
    "click",
    showNext
);
 
function showPrevious() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex =
            visibleItems.length - 1;
    }

    openLightbox();
}


prevBtn.addEventListener(
    "click",
    showPrevious
);

 
document.addEventListener(
    "keydown",
    (event) => {

        if (
            !lightbox.classList.contains("active")
        ) {
            return;
        }


      
        if (event.key === "Escape") {

            closeLightbox();
        }


       
        else if (event.key === "ArrowRight") {

            showNext();
        }

 
        else if (event.key === "ArrowLeft") {

            showPrevious();
        }

    }
);


 

lightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target === lightbox
        ) {
            closeLightbox();
        }

    }
);
=======
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{

        if(e.target.innerHTML == '='){
            try{
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
            e.preventDefault();
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == '%'){
            try{
                string += e.target.innerHTML;
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }

        }
    )
})

//keyboard support//

document.addEventListener('keydown', (e) => {

    let key = e.key;

    if (
        (key >= '0' && key <= '9') ||
        key === '+' ||
        key === '-' ||
        key === '*' ||
        key === '/' ||
        key === '.'
    ) {
        e.preventDefault();
        string += key;
        input.value = string;
    }

    else if (key === 'Enter' || key === '=') {
        e.preventDefault();

        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    }

    else if (key === 'Backspace') {
        e.preventDefault();
        string = string.substring(0, string.length - 1);
        input.value = string;
    }

    else if (key === 'Escape' || key === 'Delete' ) {
        e.preventDefault();
        string = "";
        input.value = "";
    }  

    else if (key === '%') {
        e.preventDefault();
        try{
            string = string / 100;
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    }
});
>>>>>>> 19c4dd4ea20f8977cc28513bac3d69a7d045ca24
