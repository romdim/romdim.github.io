<script>
  import Tools from './Tools.svelte';

  import type CarouselItem from '../../typings/Components/CarouselItem';
  import type Columns from '../../typings/Components/Columns';

  export let name: string;
  export let nameC: string = name.charAt(0).toUpperCase() + name.slice(1);
  export let columns: Columns;
  export let carousel: CarouselItem[];
  export let employerText: string;
  export let roleText: string;
  export let tools: string[];
</script>

<style>
  %visible {
    opacity: 1;
    z-index: 10;
  }
  /* Carousel */
  @mixin carousel($items, $animation: 'default') {
    .carousel > input {
      @for $i from 1 through $items {
        &:nth-child(#{$i}) {
          &:checked {
            ~ ul li {
              @if $animation == 'default' {
                &:nth-child(#{$i}) {
                  @extend %visible;
                }
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
  
  ul {
    width: calc(100% - 3.5rem);
  }
  
  /* Info box */
  .info {
    width: 764px;
    /* In the center of media */
    left: calc(50% - 1.75rem);
  
    input:not(:checked) + label {
      cursor: pointer;
    }
    
    input:checked + label {
      z-index: 10;
      --tw-bg-opacity: 1;
      background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
      --tw-text-opacity: 1;
      color: rgba(0, 0, 0, var(--tw-text-opacity));
    }
  
    .input-employer:checked ~ .tab-employer,
    .input-role:checked ~ .tab-role {
      display: block;
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
    @include carousel(5);
  }
</style>

<div class="{columns['2xl'] ? `2xl:col-start-${columns['2xl'].start} 2xl:col-span-${columns['2xl'].span} ` : '' }md:col-start-{columns.start} md:col-span-{columns.span} col-span-full md:mt-20 2xl:mt-25 company-{name}">
  <div class="relative w-full carousel">
    {#each carousel as _, i}
      <input class="absolute top-0 left-0 opacity-0 z-auto" type="radio" id="{name}-{i}" name="{name}[]" checked={i==0 ? true: false}>
    {/each}

    <ul class="relative m-0 p-0 list-none aspect-w-16 aspect-h-9">
      {#each carousel as item}
        {#if item.type === 'logo'}
          <li class="relative opacity-0 z-auto transition-opacity duration-1000">
            <div class="aspect-w-16 aspect-h-9 bg-{name}{item.border ? ` border border-solid border-{name}-secondary` : ''}"></div>
            <img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-{item.width} h-auto" src="img/companies/{nameC}/{nameC}.{item.format ? item.format : 'svg'}" alt="">
          </li>
        {:else if item.type === 'video'}
          <li class="opacity-0 z-auto transition-opacity duration-1000">
            <video width="100%" controls muted="true">
              <source src="img/companies/{nameC}/{nameC}.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </li>
        {:else}
          <li class="opacity-0 z-auto transition-opacity duration-1000">
            <img src="img/companies/{nameC}/{nameC}{item.name ? `-${item.name}` : ''}.png" alt="">
          </li>
        {/if}
      {/each}
    </ul>

    <div class="z-auto absolute top-1/2 right-0 transform -translate-y-1/2 nav">
      <div class="relative w-10 h-10 previous">
        {#each carousel as _, i}
          <label class="absolute top-0 right-0 opacity-0 z-auto w-10 h-10 cursor-pointer bg-cover bg-no-repeat bg-chevron-up" for="{name}-{i}"></label>
        {/each}
      </div>
      <div class="w-10 dots">
        {#each carousel as __dirname, i}
          <label class="block w-5 h-5 bg-dot bg-no-repeat bg-cover cursor-pointer my-2.5 mx-auto" for="{name}-{i}"></label>
        {/each}
      </div>
      <div class="relative w-10 h-10 next">
        {#each carousel as _, i}
          <label class="absolute top-0 right-0 opacity-0 z-auto w-10 h-10 cursor-pointer bg-cover bg-no-repeat bg-chevron-down" for="{name}-{i}"></label>
        {/each}
      </div>
    </div>
  </div>
  <div class="relative transform -translate-x-1/2 p-7.5 font-mono z-10 shadow-xl max-w-full text-lg info">
    <div class="absolute top-0 left-1/2 w-20 h-13 bg-black transform -translate-x-1/2 -translate-y-full"></div>

    <input class="hidden input-employer" type="radio" name="{name}-tabs" id="{name}-employer" checked />
    <label class="absolute top-0 left-1/2 w-40 h-13 py-1 px-3 bg-black text-white text-xl rounded-t-2.5xl transform -translate-x-full -translate-y-full flex items-center justify-center" for="{name}-employer">Employer</label>

    <input class="hidden input-role" type="radio" name="{name}-tabs" id="{name}-role" />
    <label class="absolute top-0 left-1/2 w-40 h-13 py-1 px-3 bg-black text-white text-xl rounded-t-2.5xl transform -translate-y-full flex items-center justify-center" for="{name}-role">Role</label>

    <div class="hidden tab-employer">
      <p class="whitespace-pre-line text-justify">{employerText}</p>
      <Tools tools={tools} />
    </div>
    <div class="hidden tab-role">
      <p class="whitespace-pre-line text-justify">{roleText}</p>
      <Tools tools={tools} />
    </div>
  </div>
</div>
