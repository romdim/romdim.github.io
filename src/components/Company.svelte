<script>
  import CompanyCarousel from './CompanyCarousel.svelte';
  import CompanyInfo from './CompanyInfo.svelte';

  import type Company from '../../typings/Components/Company';
  import type Columns from '../../typings/Components/Columns';

  export let company: Company;
  const name: string = company.name;
  const columns: Columns = company.columns;
</script>

<div class="col-span-full lg:col-start-{columns.start} lg:col-span-{columns.span} {columns['3xl'] ? `3xl:col-start-${columns['3xl'].start} 3xl:col-span-${columns['3xl'].span}` : '' } mt-15 lg:mt-20 3xl:mt-25 company-{name}">
  <CompanyCarousel {...company} />
  <CompanyInfo {...company} />
</div>
