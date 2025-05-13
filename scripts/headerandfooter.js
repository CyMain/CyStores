//Header
document.querySelector('header').innerHTML = `
    <header>
        <div class="menu">
            <figure>
                <img src="../assets/icons/menu-icon-light-blue.png">
            </figure><!--Add floating menu in here-->
            <div class="floating-menu">
                <nav class="option menu-profile-js">
                    <p>Profile</p>
                </nav>
                <nav class="option menu-cart-js">
                    <p>Cart</p>
                </nav>
                <nav class="option menu-home-js">
                    <p>Home</p>
                </nav>
                <nav class="option menu-seller-js">
                    <p>Become a Seller</p>
                </nav>
                <nav class="option menu-patreon-js">
                    <p>Patreon</p>
                </nav>
            </div>
        </div>
        <div class="middle">
            <div>
                <input id="search-bar" placeholder="Search...">
            </div>
            <div class="site-logo">
                <img src="../assets/logos/CyStores-Logo-transparent1.png">
            </div>
        </div>
        <div class="profile">
            <figure>
                <img src="../assets/icons/movie-sonic-pfp.jpg">
                <figcaption>BlueBlur1</figcaption>
            </figure>
        </div>
    </header>
`;

document.querySelector('.profile').addEventListener(('click'), () => {
    window.location.href='../webpages/profile.html';
})

document.querySelector('.site-logo').addEventListener('click', () =>{
    window.location.href='../webpages/home.html';
})
document.querySelector('.menu-profile-js').addEventListener(('click'), () => {
    window.location.href='../webpages/profile.html';
})

document.querySelector('.menu-home-js').addEventListener('click', () =>{
    window.location.href='../webpages/home.html';
})

document.querySelector('.menu-cart-js').addEventListener('click', () =>{
    window.location.href='../webpages/cart.html';
})

document.querySelector('.menu-seller-js').addEventListener('click', () =>{
    window.location.href='../webpages/profileSeller.html';
})

document.querySelector('#search-bar').addEventListener('keydown', (event) =>{
    if(event.key=="Enter"){
        window.location.href="../webpages/results.html";
    }
})

//Footer
document.querySelector('footer').innerHTML =`
        <div class="footer-content">
            <div class="footer-sec">
                <h2>Customer Service</h2>
                <ul>
                    <li><a>Phone</a></li>
                    <li><a>Email</a></li>
                </ul>
            </div>
            <div class="footer-sec">
                <h2>NewsLetters</h2>
                <ul>
                    <li><a>Go To Form</a></li>
                </ul>
            </div>
        </div>
        <div class="patreon-request flex-center">
            <figure class="site-animation flex-center">
                <img src="../assets/logos/CyStores-Logo-transparent1.png">
            </figure>
            <div class="patreon-message flex-center">
                <h2>CyStores</h2>
                <p>Patreonize Us!!</p>
            </div>
        </div>
`;