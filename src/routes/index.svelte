<script>
</script>

<style>
  .leading-looser {
    line-height: 2.5;
  }
  
  .hl-animation {
    animation: hl-animation 2s linear;
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
    animation: vl-animation 2s linear;
  }
  
  @keyframes vl-animation {
    0% {
      height: 0;
    }
  
    100% {
      height: 100vh;
    }
  }
  
  .hand-right,
  .hand-right:active {
    -webkit-filter: drop-shadow( 2px 2px 1px rgba(0, 0, 0, .2));
    filter: drop-shadow( 2px 2px 1px rgba(0, 0, 0, .2));
  }
  .hand-right:hover {
    -webkit-filter: none;
    filter: none;
  }
  .hand-right:active .active-text-black {
    color: black;
  }
</style>

<svelte:head>
  <title>romdim B.V.</title>
  <meta name="description" content="">
</svelte:head>

<div class="h-screen w-screen max-w-screen-3xl m-auto bg-white font-mono">
  <!-- <div class="index columns is-multiline mb-0"> -->
    <div class="h-1/2 flex flex-row place-items-center">
      <!-- <div class="column is-half columns is-vcentered is-centered mb-0"> -->
      <div class="w-1/6 m-auto">
        <img src="img/logo.svg" alt="">
      </div>
      <a class="w-1/12 m-auto group hand-right" href="projects">
        <!-- <a href="projects.html" class="w-1/6"> -->
          <svg class="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297.7976 174.5396"><g transform="translate(-96.7857 -49.9167)" fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"><path d="M183.7857 221.4563c-46.3919 0-84-37.729-84-84.2698 0-46.541 37.6081-84.2698 84-84.2698 31.0636 0 58.1889 16.9157 72.7226 42.066"/><path d="M146.1578 136.8582c0-22.7347 17.9938-41.1649 40.1903-41.1649 6.6187 0 12.8637 1.6387 18.3694 4.5416a39.9535 39.9535 0 013.8847 2.3398 40.6033 40.6033 0 016.1648 5.1755c3.0032 3.076 5.5333 6.6366 7.469 10.5574"/><path d="M185.2083 52.9167h185.2084c11.7263 0 21.1666 9.4403 21.1666 21.1666 0 11.7264-9.4403 21.1667-21.1666 21.1667H256.8892"/><rect width="84.6667" height="42.3333" x="222.25" y="137.5833" ry="21.1466"/><rect width="84.6667" height="41.5396" x="222.25" y="179.9167" ry="20.7698"/><rect width="84.6667" height="42.3333" x="222.25" y="95.25" ry="21.1466"/><path d="M183.7857 221.4563h64.5396"/></g><ellipse class="stroke-current text-transparent group-hover:text-black" fill="none" stroke-width="6" cx="89.509709" cy="85.153151" rx="20.613924" ry="20.785707"/><circle class="fill-current text-transparent active-text-black" cx="89.673386" cy="85.314531" r="10.491192"/></svg>
        </a>
      <!-- </div> -->
    </div>
    <div class="h-1/2 flex flex-row place-items-center">
      <svg class="w-1/12 m-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 235 179"><defs><circle id="a" cx="30" cy="30" r="30"/></defs><a xlink:href="https://linkedin.com/in/romdim" target="_blank" rel="noopener noreferrer"><g transform="translate(0 119)"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><use fill="#000" xlink:href="#a"/><circle fill="#FFF" mask="url(#b)" cx="30.6977" cy="27.907" r="22.3256"/><g mask="url(#b)"><path d="M50.6134 4.186H11.029c-2.162 0-4.0524 1.5567-4.0524 3.694V47.551c0 2.1497 1.8903 4.0647 4.0524 4.0647h39.572c2.1743 0 3.8051-1.9274 3.8051-4.0647V7.88c.0124-2.1374-1.6308-3.694-3.7928-3.694zM21.6788 43.721h-6.795V22.5944h6.795v21.1264zM18.516 19.3822h-.0494c-2.1744 0-3.5829-1.6185-3.5829-3.6447 0-2.0632 1.4455-3.6446 3.6694-3.6446 2.2238 0 3.5828 1.569 3.6322 3.6446 0 2.0262-1.4084 3.6447-3.6693 3.6447zm27.9956 24.3386h-6.795V32.1693c0-2.7674-.9884-4.6577-3.447-4.6577-1.8779 0-2.9898 1.2726-3.484 2.508-.1853.4448-.2347 1.0502-.2347 1.6679v12.0334h-6.795V22.5945h6.795v2.9404c.9883-1.4084 2.5327-3.4346 6.1279-3.4346 4.46 0 7.8328 2.9404 7.8328 9.2783V43.721z" fill="#000" fill-rule="nonzero"/></g></g></a><a xlink:href="mailto:rom-dim@hotmail.com?subject=Coming%20from%20site" target="_blank" rel="noopener noreferrer"><g transform="translate(175 119)"><use fill="#000" xlink:href="#a"/><path d="M44.1195 18.1395h-28.239c-1.8274 0-3.3224 1.3699-3.3224 3.0445v19.0274c0 1.6746 1.495 3.0444 3.3224 3.0444h28.239c1.8274 0 3.3224-1.3698 3.3224-3.0444V21.184c0-1.6746-1.495-3.0445-3.3224-3.0445zm.5317 7.1628l-13.9535 8.186-13.9535-8.186v-2.9767l13.9535 8.186 13.9535-8.186v2.9767z" fill="#fff" fill-rule="nonzero"/></g></a><a xlink:href="https://github.com/romdim" target="_blank" rel="noopener noreferrer"><use fill="#fff" xlink:href="#a" transform="translate(88 1)"/><path d="M118 0c-16.5753 0-30 13.6276-30 30.4536 0 14.3118 9.674 26.19 22.726 29.5386-.1507-.381-.2247-.9149-.2247-1.4462v-5.1784h-3.7507c-2.0246 0-3.9012-.9123-4.726-2.5892-.9752-1.8272-1.1259-4.6445-3.6-6.3965-.7506-.6091-.1506-1.2182.6741-1.143 1.5753.4561 2.8494 1.524 4.0494 3.1205 1.2 1.5991 1.726 1.9801 3.9753 1.9801 1.0494 0 2.6987-.0751 4.2-.3058.8247-2.133 2.2494-4.0354 3.9753-4.9477-10.0493-1.2182-14.8493-6.2437-14.8493-13.0964 0-2.9702 1.274-5.7874 3.3753-8.2237-.674-2.3611-1.5753-7.2337.3013-9.136 4.5012 0 7.2 2.9701 7.874 3.7295 2.2494-.762 4.726-1.2181 7.274-1.2181 2.6247 0 5.0247.4561 7.274 1.2181.6741-.762 3.3754-3.7296 7.8741-3.7296 1.8 1.8272.9753 6.775.2247 9.136 2.1013 2.3612 3.3013 5.2536 3.3013 8.2238 0 6.8527-4.726 11.8782-14.6987 12.9434 2.7753 1.4463 4.726 5.5568 4.726 8.6022v6.9356c0 .2281-.0741.4562-.0741.6843C139.6 55.0445 148 43.778 148 30.4536 148 13.6276 134.5753 0 118 0z" fill="#000"/></a></svg>
      <div class="w-1/2">
        <div class="w-1/2 m-auto text-2.5xl text-right text-black leading-looser">
          <p>Manager of One</p>
          <p>Tech Research</p>
          <p>Best-solution provision</p>
          <p>Open-source contributions</p>
          <p>Over 10 years of experience &</p>
          <p>A keen eye for detail…</p>
        </div>
      </div>
    </div>
  <!-- </div> -->

  <!-- Horizontal line -->
  <div class="hl-animation h-0.5 w-screen max-w-screen-3xl absolute top-1/2 -translate-y-1/2 bg-black"></div> 
  <!-- Vertical line -->
  <div class="vl-animation w-0.5 h-screen absolute top-0 left-1/2 -translate-x-1/2 bg-black"></div>
</div>