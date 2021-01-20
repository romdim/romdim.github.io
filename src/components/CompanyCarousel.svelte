<script>
  import { onMount } from 'svelte';

  import type CarouselItem from '../../typings/Components/CarouselItem';

  export let name: string;
  export let nameC: string = name.charAt(0).toUpperCase() + name.slice(1);
  export let carousel: CarouselItem[];
  
  const widthBuilder = (prefix: string, width: string): string => {
    return width ? ` ${prefix}:w-${width}` : '';
  };

  let logoWidth: string = carousel[0].width ? `w-${carousel[0].width.default}` + widthBuilder('md', carousel[0].width.md) + widthBuilder('lg', carousel[0].width.lg) + widthBuilder('xl', carousel[0].width.xl) + widthBuilder('2xl', carousel[0].width['2xl']) + widthBuilder('3xl', carousel[0].width['3xl']) + widthBuilder('3.1xl', carousel[0].width['3.1xl']) : 'w-1/2';
  
  let list: HTMLUListElement;
  let inputs: HTMLCollectionOf<HTMLInputElement>;

  onMount(async () => {
    await import('tocca');
    window.tocca({
      swipeThreshold: 30
    });

    // list.addEventListener('touchmove',(e) => e.preventDefault());
    // list.addEventListener('touchstart',(e) => e.preventDefault());
    // list.addEventListener('touchend',(e) => e.preventDefault());

    inputs = list.parentElement.getElementsByTagName('input');
    list.addEventListener('swiperight', () => {
      let i:number = 0;
      while(!inputs[i].checked) {
        i++;
      }
      inputs[i].checked = false;
      let previous:number = i == 0 ? carousel.length-1 : i-1;
      inputs[previous].checked = true;
    });
    list.addEventListener('swipeleft', () => {
      let i:number = 0;
      while(!inputs[i].checked) {
        i++;
      }
      inputs[i].checked = false;
      let next:number = i == carousel.length-1 ? 0 : i+1;
      inputs[next].checked = true;
    });
  });
</script>

<style>
  %visible {
    opacity: 1;
    z-index: 10;
  }
  /* Carousel */
  @mixin carousel($items) {
    .carousel > input {
      @for $i from 1 through $items {
        &:nth-child(#{$i}) {
          &:checked {
            ~ ul li {
              &:nth-child(#{$i}) {
                @extend %visible;
              }
            }
  
            ~ .nav {
              .previous {
                label {
                  @if $i == 1 {
                    &:nth-child(#{$items}) {
                      @extend %visible;
                    }
                  } @else {
                    &:nth-child(#{$i - 1}) {
                      @extend %visible;
                    }
                  }
                }
              }
  
              .next {
                label {
                  @if $i == $items {
                    &:nth-child(1) {
                      @extend %visible;
                    }
                  } @else {
                    &:nth-child(#{$i + 1}) {
                      @extend %visible;
                    }
                  }
                }
              }
  
              .dots {
                label {
                  &:nth-child(#{$i}) {
                    background: url('../img/nav/dot-selected.svg') no-repeat;
                    background-size: cover;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 1024px) {
    ul {
      width: calc(100% - 1.875rem);
    }
  }

  @media (min-width: 1440px) {
    ul {
      width: calc(100% - 2.125rem);
    }
  }

  @media (min-width: 1920px) {
    ul {
      width: calc(100% - 2.75rem);
    }
  }
  
  /* Company */
  .company-artwishlist {
    @include carousel(4);
  }

  .company-myTomorrows {
    @include carousel(3);
  }

  .company-mobiquity {
    @include carousel(3);
  }

  .company-peoplePerHour {
    @include carousel(2);
  }

  .company-epu {
    @include carousel(4);
  }
</style>

<div class="relative mr-3 md:m-auto carousel">
  {#each carousel as _, i}
    <input class="absolute top-0 left-0 opacity-0 z-auto" type="radio" id="{name}-{i}" name="{name}[]" checked={i==0}>
  {/each}

  <ul bind:this={list} class="relative m-0 p-0 aspect-w-16 aspect-h-9 list-none">
    {#each carousel as item}
      <li  class="{item.type === 'logo' ? 'relative' : ''} opacity-0 z-auto transition-opacity duration-1000">
        {#if item.type === 'logo'}
          <div class="aspect-w-16 aspect-h-9 bg-{name} {item.border ? `border border-solid border-${name}-secondary` : ''}"></div>
          <img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 {logoWidth} h-auto" src="img/companies/{nameC}/{nameC}.{item.format ? item.format : 'svg'}" alt="">
        {:else if item.type === 'video'}
          <video width="100%" controls muted="true">
            <source src="img/companies/{nameC}/{nameC}.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        {:else}
          <img src="img/companies/{nameC}/{nameC}{item.name ? `-${item.name}` : ''}.png" alt="">
        {/if}
      </li>
    {/each}
  </ul>

  <div class="z-10 absolute top-0 right-1/2 lg:top-1/2 lg:right-0 transform translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 nav">
    <div class="relative w-7.5 h-7.5 3xl:w-10 3xl:h-10 previous hidden lg:block">
      {#each carousel as _, i}
        <label class="absolute top-0 right-0 opacity-0 z-auto w-7.5 h-7.5 3xl:w-10 3xl:h-10 cursor-pointer bg-cover bg-no-repeat bg-chevron-up" for="{name}-{i}"></label>
      {/each}
    </div>
    <div class="h-4 md:h-5 lg:h-auto lg:w-7.5 3xl:w-10 -my-1 md:my-1.5 lg:-my-2.5 dots">
      {#each carousel as _, i}
        <label class="inline-block lg:block w-2.5 md:w-4 lg:w-4 3xl:w-5 h-2.5 md:h-4 lg:h-4 3xl:h-5 bg-dot bg-no-repeat bg-cover cursor-pointer mx-0.5 md:mx-2 lg:mx-auto lg:my-2.5 3xl:my-3.5" for="{name}-{i}"></label>
      {/each}
    </div>
    <div class="relative w-7.5 h-7.5 3xl:w-10 3xl:h-10 next hidden lg:block">
      {#each carousel as _, i}
        <label class="absolute top-0 right-0 opacity-0 z-auto w-7.5 h-7.5 3xl:w-10 3xl:h-10 cursor-pointer bg-cover bg-no-repeat bg-chevron-down" for="{name}-{i}"></label>
      {/each}
    </div>
  </div>
</div>