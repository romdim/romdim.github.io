<script>
  import Contact from "../images/contact.svg";
  import Logo from "../images/logo.svg";
</script>

<style>
  .box {
    /*
      Given the minimum viewport dimension (width or height)
      Based on the pythagorean theorem, we calculate a box
      formed by the diagonal lines of the screen. Each side
      of the box equals with the hypotenuse of the equal sides
      of the triangle formed by the diagonal lines. Thus:
      width = height = sqrt( 2 * (line / 2)^2 ) =
      sqrt(2) * line / 2 = 1.414 * 100vmin / 2 = 70.7vw
    */
    height: 70.7vmin;
    width: 70.7vmin;
  }

  @media (min-width: 1024px) {
    .box {
      height: 100vh;
      width: 100%;
    }
  }
  
  .hand-right:active .active-text-black {
    color: black;
  }

  .text-size-responsive {
    font-size: 2.22vmin;
    line-height: 2;
    /*
      Removing empty space due to last paragraph's line-height:
      -1 * (line-height - 1) * 0.5em => -1.25vmin
    */
    margin-bottom: -1.25vmin;
  }

  @media (min-width: 1024px) {
    .text-size-responsive {
      font-size: 1.125rem;
      line-height: 2.5;
      margin-bottom: 0;
    }
  }

  @media (min-width: 1440px) {
    .text-size-responsive {
      font-size: 1.25rem;
      margin-bottom: 0;
    }
  }

  @media (min-width: 1920px) {
    .text-size-responsive {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 2000px) {
    .text-size-responsive {
      font-size: 1.75rem;
    }
  }
  
  .dl-animation {
    animation: dl-animation 2s linear 0s forwards;
  }
  
  @keyframes dl-animation {
    0% {
      width: 0%;
    }
    100% {
      width: 100vmin;
    }
  }

  .hl-animation {
    animation: hl-animation 2s linear 0s forwards;
  }

  @keyframes hl-animation {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  
  .vl-animation {
    animation: vl-animation 2s linear 0s forwards;
  }
  
  @keyframes vl-animation {
    0% {
      height: 0;
    }
  
    100% {
      height: 100vh;
    }
  }
</style>

<svelte:head>
  <title>romdim B.V.</title>
</svelte:head>

<div class="absolute transform -translate-x-1/2 -translate-y-1/2 inset-1/2 lg:grid lg:grid-cols-12 box">
  <div class="relative lg:col-start-2 lg:col-span-10 3.1xl:m-auto max-w-screen-3.1xl box">
    <!-- Logo -->
    <Logo class="absolute top-0 lg:top-1/4 left-1/2 lg:left-1/4 transform -translate-x-1/2 lg:-translate-y-1/2 w-21-vmin lg:w-18% 2xl:w-19% 3.1xl:w-14%" />

    <!-- Projects Hand  -->
    <a class="absolute right-0 flex items-center top-1/2 lg:top-0 lg:w-1/2 lg:h-1/2 group hand-right" aria-label="Projects Page" href="projects">
      <!-- Cannot use svg file as it includes classes within -->
      <svg class="transform -translate-y-1/2 lg:translate-y-0 lg:m-auto w-13-vmin lg:w-19% 3.1xl:w-15% stroke-6 md:stroke-3 lg:stroke-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297.7976 174.5396"><g transform="translate(-96.7857 -49.9167)" fill="none" stroke="#000" stroke-linecap="round"><path d="M183.7857 221.4563c-46.3919 0-84-37.729-84-84.2698 0-46.541 37.6081-84.2698 84-84.2698 31.0636 0 58.1889 16.9157 72.7226 42.066"/><path d="M146.1578 136.8582c0-22.7347 17.9938-41.1649 40.1903-41.1649 6.6187 0 12.8637 1.6387 18.3694 4.5416a39.9535 39.9535 0 013.8847 2.3398 40.6033 40.6033 0 016.1648 5.1755c3.0032 3.076 5.5333 6.6366 7.469 10.5574"/><path d="M185.2083 52.9167h185.2084c11.7263 0 21.1666 9.4403 21.1666 21.1666 0 11.7264-9.4403 21.1667-21.1666 21.1667H256.8892"/><rect width="84.6667" height="42.3333" x="222.25" y="137.5833" ry="21.1466"/><rect width="84.6667" height="41.5396" x="222.25" y="179.9167" ry="20.7698"/><rect width="84.6667" height="42.3333" x="222.25" y="95.25" ry="21.1466"/><path d="M183.7857 221.4563h64.5396"/></g><ellipse class="text-transparent stroke-current group-hover:text-black" fill="none" cx="89.509709" cy="85.153151" rx="20.613924" ry="20.785707"/><circle class="text-transparent fill-current active-text-black" cx="89.673386" cy="85.314531" r="10.491192"/></svg>
    </a>

    <!-- Contact -->
    <div class="absolute left-0 flex items-center w-1/2 transform -translate-y-1/2 top-1/2 lg:translate-y-0 h-1/2">
      <Contact class="lg:m-auto w-19-vmin lg:w-1/4" />
    </div>

    <!-- Description -->
    <div class="absolute bottom-0 lg:bottom-1/4 left-1/2 lg:left-3/4 transform -translate-x-1/2 lg:translate-y-1/2 w-96 lg:w-37% xl:w-30% text-black text-center lg:text-right text-size-responsive">
      <p>Manager of One</p>
      <p>Tech Research</p>
      <p>Best-solution provision</p>
      <p>Open-source contributions</p>
      <p>Over 15 years of experience</p>
      <p>A keen eye for detail</p>
    </div>

    <!-- Horizontal line -->
    <div class="hidden lg:block absolute top-1/2 transform -translate-y-1/2 bg-black h-0.5 hl-animation"></div> 
    <!-- Vertical line -->
    <div class="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 bg-black w-0.5 vl-animation"></div>

    <!-- Diagonal lines -->
    <div class="absolute block h-px origin-center transform rotate-45 -translate-x-1/2 bg-black lg:hidden inset-1/2 dl-animation"></div>
    <div class="absolute block h-px origin-center transform -rotate-45 -translate-x-1/2 bg-black lg:hidden inset-1/2 dl-animation"></div>
  </div>
</div>
