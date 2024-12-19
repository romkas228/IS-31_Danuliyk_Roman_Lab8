const images = [
    {
        preview:
            './images/img1_small.png',
        original:
            './images/img1_big.png',
        description: ' Teamwork ',
    },
    {
        preview:
            './images/img2_small.png',
        original:
            './images/img2_big.png',
        description: ' Idea ',
    },
    {
        preview:
            './images/img3_small.png',
        original:
            './images/img3_big.png',
        description: ' Internet serfing ',
    },
    {
        preview:
            './images/img4_small.png',
        original:
            './images/img4_big.png',
        description: ' Meeting room ',
    },
    {
        preview:
            './images/img5_small.png',
        original:
            './images/img5_big.png',
        description: ' Coworking ',
    },
    {
        preview:
            './images/img6_small.png',
        original:
            './images/img6_big.png',
        description: ' Office ',
    },
    {
        preview:
            './images/img7_small.png',
        original:
            './images/img7_big.png',
        description: ' Coffe and Laptop ',
    },
    {
        preview:
            './images/img8_small.png',
        original:
            './images/img8_big.png',
        description: ' Working ',
    },
    {
        preview:
            './images/img9_small.png',
        original:
            './images/img9_big.png',
        description: ' Meeting ',
    },
    

];

const gallery = document.querySelector('.gallery')

const createImg = (preview,description,original) => {
    return `<img src="${preview}" alt="${description}" class="image_preview" data-original="${original}">`
}

const galleryHTML = images.map(img => createImg(img.preview,img.description,img.original)).join('')
gallery.innerHTML = galleryHTML

gallery.addEventListener('click',(event) => {
    let target = event.target;
    if (target.tagName != "IMG") return;
    handleClickImg(target)
})

const handleClickImg = (img) => {
    basicLightbox.create(`
		<img width="1400" height="900" src="${img.dataset.original}">
	`).show() 
};