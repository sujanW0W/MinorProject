const productContainer =[...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainer.forEach((item, i) => {
    let containerDimesions=item.getBoundingClientRect();
    let containerWidth= containerDimesions.width;

    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth;
    })
})