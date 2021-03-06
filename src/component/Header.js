function Header() {
  const element = document.createElement('div');

  element.innerHTML = `<header>
  <div class="container mx-auto px-7 md:px-0">
      <nav class=" flex justify-between items-center py-5 ">
          <div class="header__logo w-28 md:w-full z-20">
              <img src="../src/img/home-logo.png" alt="home-logo">
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
`;
  return element;
}

export default Header;
