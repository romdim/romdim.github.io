<script>
  import { onMount } from 'svelte';

  import type CarouselItem from '../../typings/Components/CarouselItem';

  export let name: string;
  export let nameC: string = name.charAt(0).toUpperCase() + name.slice(1);
  export let carousel: CarouselItem[];
  
  let list: HTMLUListElement;
  let inputs: HTMLCollectionOf<HTMLInputElement>;

  onMount(async () => {
    await import('tocca');
    window.tocca({
      swipeThreshold: 10
    });

    list.addEventListener('touchmove',(e) => e.preventDefault());
    list.addEventListener('touchstart',(e) => e.preventDefault());
    list.addEventListener('touchend',(e) => e.preventDefault());

    inputs = list.parentElement.getElementsByTagName('input');
    list.addEventListener('swipedown', () => {
      let i:number = 0;
      while(!inputs[i].checked) {
        i++;
      }
      inputs[i].checked = false;
      let previous:number = i == 0 ? carousel.length-1 : i-1;
      inputs[previous].checked = true;
    });
    list.addEventListener('swipeup', () => {
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
      width: calc(100% - 3.5rem);
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

<svelte:head>
  <title>romdim B.V. | Projects</title>
  <meta name="description" content="">
</svelte:head>

<div class="relative mr-3 md:m-auto carousel">
  {#each carousel as _, i}
    <input class="absolute top-0 left-0 opacity-0 z-auto" type="radio" id="{name}-{i}" name="{name}[]" checked={i==0}>
  {/each}

  <ul bind:this={list} class="relative m-0 p-0 list-none aspect-w-16 aspect-h-9">
    {#each carousel as item}
      <li  class="{item.type === 'logo' ? 'relative' : ''} opacity-0 z-auto transition-opacity duration-1000">
        {#if item.type === 'logo'}
          <div class="aspect-w-16 aspect-h-9 bg-{name} {item.border ? `border border-solid border-${name}-secondary` : ''}"></div>
          <img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 md:w-{item.width} h-auto" src="img/companies/{nameC}/{nameC}.{item.format ? item.format : 'svg'}" alt="">
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

  <div class="z-10 absolute top-1/2 -right-2 md:-right-2.5 lg:right-0 transform -translate-y-1/2 nav">
    <div class="relative w-10 h-10 previous hidden lg:block">
      {#each carousel as _, i}
        <label class="absolute top-0 right-0 opacity-0 z-auto w-10 h-10 cursor-pointer bg-cover bg-no-repeat bg-chevron-up" for="{name}-{i}"></label>
      {/each}
    </div>
    <div class="w-4 md:w-5 lg:w-10 dots">
      {#each carousel as _, i}
        <label class="block w-4 md:w-5 lg:w-5 h-4 md:h-5 lg:h-5 bg-dot bg-no-repeat bg-cover cursor-pointer my-5 lg:my-2.5 md:mx-auto" for="{name}-{i}"></label>
      {/each}
    </div>
    <div class="relative w-10 h-10 next hidden lg:block">
      {#each carousel as _, i}
        <label class="absolute top-0 right-0 opacity-0 z-auto w-10 h-10 cursor-pointer bg-cover bg-no-repeat bg-chevron-down" for="{name}-{i}"></label>
      {/each}
    </div>
  </div>
</div>