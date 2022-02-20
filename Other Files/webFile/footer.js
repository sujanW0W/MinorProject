const createFooter =() =>{
    let footer= document.querySelector('footer');
    footer.innerHTML = '
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Men</li>
                <li><a href="#" class="footer-link">t-shirt</a></li>
                <li><a href="#" class="footer-link">seatershirts</a></li>
                <li><a href="#" class="footer-link">shirt</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">causals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirt</a></li>
                <li><a href="#" class="footer-link">seatershirts</a></li>
                <li><a href="#" class="footer-link">shirt</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">causals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere numquam ipsam, sed explicabo
     eveniet impedit incidunt autem earum exercitationem consectetur quasi natus modi magnam reprehenderit
    distinctio perferendis corporis quisquam quae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
     Ipsam dolore rerum obcaecati accusamus temporibus necessitatibus, dolores adipisci ut, nesciunt blanditiis
    optio repudiandae officiis eligendi? Tempora dolorem vitae facere cupiditate Lorem ipsum dolor sit amet
     consectetur adipisicing elit. Veniam facilis temporibus eveniet asperiores? Quia quas temporibus impedit
     similique ad, nostrum praesentium laborum officia esse, repellat repudiandae architecto odio quis animi.
    </p>
    <p class=" info">Support emails- help@marketing.com,customersuport@clothing.com</p>
    <p class="info">telephone: 9803293473 9384747283</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">Terms & Services</a>
            <a href="#" class="social-link">privacy page</a>       
        </div>
         <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
             <a href="#" class="social-link">Telegram</a>
         </div>
     </div>
     <p class="footer-credit">clothing ,best appearls online store</p>
     ';
}
createFooter();