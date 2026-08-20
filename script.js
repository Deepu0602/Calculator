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