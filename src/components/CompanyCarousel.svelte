<script>
  import { onMount } from 'svelte';

  import Image from "svelte-progressive-image";
  
  import type CarouselItem from '../../typings/Components/CarouselItem';
  import type Columns from 'typings/Components/Columns';

  export let name: string;
  export let nameC: string = name.charAt(0).toUpperCase() + name.slice(1);
  export let carousel: CarouselItem[];
  export let columns: Columns;
  
  const widthBuilder = (prefix: string, width: string): string => {
    return width ? ` ${prefix}:w-${width}` : '';
  };

  let logoWidth: string = carousel[0].width ? `w-${carousel[0].width.default}` + widthBuilder('md', carousel[0].width.md) + widthBuilder('lg', carousel[0].width.lg) + widthBuilder('xl', carousel[0].width.xl) + widthBuilder('2xl', carousel[0].width['2xl']) + widthBuilder('3xl', carousel[0].width['3xl']) + widthBuilder('3.1xl', carousel[0].width['3.1xl']) : 'w-1/2';
  
  const widths: number[] = [
    640,
    768,
    1024,
    1280,
    1440,
    1920
  ];
  const defaultWidth: number = 1920;
  const ratio: number = columns.span/12;
  const sizes: [number, number][] = [
    [640, 1],
    [768, 1],
    [1024, 1],
    [1280, ratio],
    [1440, ratio],
    [1920, columns['3xl'] ? columns['3xl'].span/12 : ratio]
  ];
  const largestImageSize: number = 1920;

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
  /* Carousel */
  @mixin carousel($items) {
    .carousel > input {
      @for $i from 1 through $items {
        &:nth-child(#{$i}) {
          &:checked {
            ~ ul li {
              &:nth-child(#{$i}) {
                opacity: 1;
                z-index: 10;
              }
            }
  
            ~ .nav {
              .previous {
                label {
                  @if $i == 1 {
                    &:nth-child(#{$items}) {
                      z-index: 10;
                    }
                  } @else {
                    &:nth-child(#{$i - 1}) {
                      z-index: 10;
                    }
                  }
                }
              }
  
              .next {
                label {
                  @if $i == $items {
                    &:nth-child(1) {
                      z-index: 10;
                    }
                  } @else {
                    &:nth-child(#{$i + 1}) {
                      z-index: 10;
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
      <li class="{item.type === 'logo' ? 'relative ' : ''} transition-opacity duration-1000 opacity-0 z-auto">
        {#if item.type === 'logo'}
          <div class="aspect-w-16 aspect-h-9 bg-{name}{item.border ? ` border border-solid border-${name}-secondary` : ''}"></div>
          <img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 {logoWidth} h-auto" src="img/companies/{nameC}/{nameC}.{item.format ? item.format : 'svg'}" alt={`${nameC} Logo`}>
        {:else if item.type === 'video'}
          <video width="100%" controls muted={true}>
            <source src="img/companies/{nameC}/{nameC}.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        {:else}
          <Image
            name={`img/companies/${nameC}/${nameC}${item.name ? `-${item.name}` : ''}`}
            {widths}
            {defaultWidth}
            {sizes}
            {largestImageSize}
            alt={`${nameC}${item.name ? ` ${item.name}` : ''}`}
            width="1920"
            height="1080"
          />
        {/if}
      </li>
    {/each}
  </ul>

  <div class="absolute top-0 lg:top-1/2 right-1/2 lg:right-0 transform translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 z-10 nav">
    <div class="hidden lg:block relative w-7.5 3xl:w-10 h-7.5 3xl:h-10 previous">
      {#each carousel as _, i}
        <label class="absolute top-0 right-0 z-auto bg-cover bg-no-repeat bg-chevron-up cursor-pointer w-7.5 3xl:w-10 h-7.5 3xl:h-10" for="{name}-{i}"></label>
      {/each}
    </div>
    <div class="lg:w-7.5 3xl:w-10 h-4 md:h-5 lg:h-auto -my-1 md:my-1.5 lg:-my-2.5 dots">
      {#each carousel as _, i}
        <label class="inline-block lg:block lg:my-2.5 3xl:my-3.5 mx-0.5 md:mx-2 lg:mx-auto bg-dot bg-no-repeat bg-cover cursor-pointer w-2.5 md:w-4 3xl:w-5 h-2.5 md:h-4 3xl:h-5" for="{name}-{i}"></label>
      {/each}
    </div>
    <div class="hidden lg:block relative w-7.5 3xl:w-10 h-7.5 3xl:h-10 next">
      {#each carousel as _, i}
        <label class="absolute top-0 right-0 z-auto bg-cover bg-no-repeat bg-chevron-down cursor-pointer w-7.5 3xl:w-10 h-7.5 3xl:h-10" for="{name}-{i}"></label>
      {/each}
    </div>
  </div>
</div>