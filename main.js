const galleryPhotos = document.querySelectorAll('.photos-gallery'); 
let photoNumber = 0;

// ---------------------------- Gallery
// display = 'none' for all photos in the gallery by default
const hide = () => {
    for(let pht of galleryPhotos)
        pht.style.display = 'none';
}

// slides photos automatically for every 2s
const automaticGallery = () => {

    if(photoNumber <= galleryPhotos.length){
        setTimeout(automaticGallery, 2000);
        hide();
        galleryPhotos[photoNumber].style.display = 'block';
        photoNumber++;
        if(photoNumber === galleryPhotos.length)
            photoNumber = 0;
    }
}
automaticGallery();

// ---------------------------- button "show more"
const posts = document.querySelectorAll('.post');
const showMoreBtn = document.querySelector('.btn-show-more');

// hides all posts
const hideAllPosts = () =>{
    for(let post of posts) 
    post.classList.add('post-hidden');
}

// show the first 3 posts
const showFirst3Posts = () => {
    let showedPosts = 0;
    for(let post of posts) {
    showedPosts++;
    if(showedPosts < 4)
    post.classList.remove('post-hidden');
    }
}

// show the first 6 posts
const showFirst6Posts = () => {
    let showedPosts = 0;
    for(let post of posts) {
    showedPosts++;
    if(showedPosts < 7)
    post.classList.remove('post-hidden');
    }
}

// show all posts
const showAllPosts = () => {
    for(let post of posts)
    post.classList.remove('post-hidden');
}

// counts and returns the number of hidden posts
const countHiddenPosts = () => {
    let hiddenPosts = 0;
    for(let post of posts) {
        if(post.classList.contains('post-hidden'))
            hiddenPosts++;
    }
    return hiddenPosts;
}

// clickable eventListener for "show more button" - shows more / much more / less posts and change its inner text when countHiddenPosts() returns particular number
showMoreBtn.addEventListener('click', () => {

    if(countHiddenPosts() === 9){
        hideAllPosts();
        showFirst6Posts();
         showMoreBtn.innerText = 'Show much more...!';
      document.querySelector('.btn-section').classList.add('show-more-sticky'); 
    }
    else if(countHiddenPosts() === 6) {
        hideAllPosts();
        showAllPosts();
        showMoreBtn.innerText = 'Show less';
        
    }
    else {
        hideAllPosts();
        showFirst3Posts();
        showMoreBtn.innerText = 'Show more...!';
       document.querySelector('.btn-section').classList.remove('show-more-sticky'); 
    }  
})

hideAllPosts();
showFirst3Posts();

