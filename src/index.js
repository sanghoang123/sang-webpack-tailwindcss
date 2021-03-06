function component() {
  const element = document.createElement('div');

  element.innerHTML = `
  <header>
  <div class="container mx-auto px-7 md:px-0">
      <nav class=" flex justify-between items-center py-5 ">
          <div class="header__logo w-28 md:w-full z-20">
              <img src="./img/home-logo.png" alt="home-logo">
          </div>
          <ul id="menu"
              class="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gray-900 bg-opacity-90 z-20 invisible md:bg-transparent md:h-auto md:flex-row md:justify-between md:static  md:visible">
              <li class="m-12 md:m-0">
                  <a href="#"
                      class="text-white md:text-black hover:text-red-500 transition duration-500 ease-in">Home</a>
              </li>
              <li class="m-12 md:m-0">
                  <a href="#"
                      class="text-white md:text-black hover:text-red-500 transition duration-500 ease-in">Product</a>
              </li>
              <li class="m-12 md:m-0">
                  <a href="#"
                      class="text-white md:text-black hover:text-red-500 transition duration-500 ease-in">Faq</a>
              </li>
              <li class="m-12 md:m-0">
                  <a href="#"
                      class="text-white md:text-black hover:text-red-500 transition duration-500 ease-in">Contact</a>
              </li>
          </ul>
          <div id="menu-button" class="z-20 cursor-pointer md:hidden">
              <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.6"
                      d="M0.124103 1.33333C0.124103 0.596954 0.721057 0 1.45744 0H18.6667C19.403 0 20 0.596954 20 1.33333C20 2.06971 19.403 2.66667 18.6667 2.66667H1.45744C0.721056 2.66667 0.124103 2.06971 0.124103 1.33333ZM0 8C0 7.26362 0.596954 6.66667 1.33333 6.66667H18.6667C19.403 6.66667 20 7.26362 20 8C20 8.73638 19.403 9.33333 18.6667 9.33333H1.33333C0.596955 9.33333 0 8.73638 0 8ZM0 14.6667C0 13.9303 0.596953 13.3333 1.33333 13.3333H18.6667C19.403 13.3333 20 13.9303 20 14.6667C20 15.403 19.403 16 18.6667 16H1.33333C0.596953 16 0 15.403 0 14.6667Z"
                      fill="#737373" />
              </svg>
          </div>
      </nav>
  </div>
</header>
<section class="carousel">
  <div class="w-full bg-no-repeat bg-cover relative h-custom"
      style="background-image: url('./img/carousel.jpg')">
      <div class="
  absolute
  top-1/2
  left-1/2
  transform
  -translate-x-1/2 -translate-y-1/2
  z-10
  text-white text-center
">
          <p class="text-xl mb-5">Food app</p>
          <h1 class="
    text-4xl
    mb-5
    font-bold
    max-w-2xl
    md:leading-relaxed md:text-5xl
  ">
              Why stay hungry when you can order form Bella Onojie
          </h1>
          <!-- desc -->
          <p class="text-xl mb-5 font-light">
              Download the bella onoje???s food app now on
          </p>
          <!-- buttons -->
          <div class="flex justify-center">
              <button class="
      mx-4
      border border-transparent
      bg-red-500
      px-10
      py-3
      rounded-full
      hover:bg-transparent hover:border-white
      transition-all
    ">
                  Playstore
              </button>
              <button class="
      mx-4
      border border-white
      bg-transparent
      px-10
      py-3
      rounded-full
      hover:bg-red-500 hover:border-transparent
      transition-all
    ">
                  Appstore
              </button>
          </div>
      </div>
  </div>
</section>
<!-- intro -->
<section class="intro relative">
  <div class="
absolute
top-1/2
left-1/2
transform
-translate-x-2/3 -translate-y-1/4
">
      <img src="./img/app-img.png" alt="phone app screens" class="max-w-none w-screen pl-20 md:w-auto" />
  </div>
</section>
<section class="pt-96 mt-28 sm:pt-40-c md:mt-0">
  <div class="container mx-auto px-4">
      <hr class="w-4/5 mx-auto h-0.5 bg-gray-200 md:w-2/5" />
      <h2 class="text-center text-4xl font-semibold py-10">
          How the app works
      </h2>
      <div class="flex flex-col justify-evenly items-center py-10 md:flex-row">
          <div class="text-center mb-10">
              <img src="./img/app-create-login.png" alt="app screen" />
          </div>
          <div class="text-center md:text-left">
              <span class="text-red-500 font-semibold">Create an account</span>
              <h2 class="
            text-4xl text-blue-900
            font-bold
            max-w-md
            leading-relaxed
            py-5
          ">
                  Create/login to an existing account to get started
              </h2>
              <p class="text-xl text-gray-500 font-light max-w-sm mx-auto md:mx-0">
                  An account is created with your email and a desired password
              </p>
          </div>
      </div>
      <div class="flex flex-col justify-evenly items-center py-10 md:flex-row">
          <div class="text-center mb-10 order-1 md:order-2">
              <img src="./img/your-favorites-app.png" alt="app screen" />
          </div>
          <div class="text-center md:text-left order-2 md:order-1">
              <span class="text-red-500 font-semibold">Create an account</span>
              <h2 class="
            text-4xl text-blue-900
            font-bold
            max-w-md
            leading-relaxed
            py-5
          ">
                  Create/login to an existing account to get started
              </h2>
              <p class="text-xl text-gray-500 font-light max-w-sm mx-auto md:mx-0">
                  An account is created with your email and a desired password
              </p>
          </div>
      </div>
      <div class="flex flex-col justify-evenly items-center py-10 md:flex-row">
          <div class="text-center mb-10">
              <img src="./img/check-out-app.png" alt="app screen" />
          </div>
          <div class="text-center md:text-left">
              <span class="text-red-500 font-semibold">Create an account</span>
              <h2 class="
            text-4xl text-blue-900
            font-bold
            max-w-md
            leading-relaxed
            py-5
          ">
                  Create/login to an existing account to get started
              </h2>
              <p class="text-xl text-gray-500 font-light max-w-sm mx-auto md:mx-0">
                  An account is created with your email and a desired password
              </p>
          </div>
      </div>
  </div>
</section>
<!-- download -->
<section>
  <div class="relative w-full h-custom bg-no-repeat bg-cover"
      style="background-image: url('./img/banner.jpg')">
      <div class="
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
        text-center text-white
        z-10
      ">
          <h1 class="
          text-4xl
          mb-5
          font-bold
          max-w-2xl
          md:leading-relaxed md:text-5xl
        ">
              Download the app now
          </h1>
          <p class="text-xl mb-5 font-light">
              Available on your favorite store. Start your premium experience now
          </p>
          <div class="flex justify-center">
              <button class="
            mx-4
            border border-transparent
            bg-red-500
            px-10
            py-3
            rounded-full
            hover:bg-transparent hover:border-white
            transition-all
          ">
                  Playstore
              </button>
              <button class="
            mx-4
            border border-white
            bg-transparent
            px-10
            py-3
            rounded-full
            hover:bg-red-500 hover:border-transparent
            transition-all
          ">
                  Appstore
              </button>
          </div>
      </div>
  </div>
</section>
<div class="footer">
  <div class="container mx-auto px-4">
      <div class="flex flex-col justify-between items-center py-5 md:flex-row">
          <div class="w-32 md:w-full">
              <img src="./img/home-logo.png" alt="website logo" />
          </div>
          <div class="
    flex
    items-center
    mt-5
    text-gray-500
    w-full
    justify-center
    md:justify-end
  ">
              <a href="tel:901234567" class="flex mx-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 mr-4"
                      viewBox="0 0 20 20" fill="currentColor">
                      <path
                          d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <p>90-123-4567</p>
              </a>
              <a href="mailto:info@me.com" class="flex mx-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 mr-4"
                      viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <p>info@me.com</p>
              </a>
          </div>
      </div>
      <div class="text-center my-4">
          <p class="text-gray-500">Copy &copy; 2021 Bella Onojie</p>
      </div>
  </div>
</div>`;

  return element;
}

document.body.appendChild(component());

const menu = document.querySelector('#menu');
const menuBtn = document.querySelector('#menu-button');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('invisible');
});
