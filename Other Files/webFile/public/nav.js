const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML =`
    <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search brand, product">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"> <img src="img/user.png"></a>
                <a href="#"> <img src="img/cart.png"></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Women</a></li>
            <li class="link-item"><a href="#" class="link">Kids</a></li>
            <li class="link-item"><a href="#" class="link">Men</a></li>
            <li class="link-item"><a href="#" class="link">Acessesories</a></li>
        </ul>
    
    `;
}

createNav();