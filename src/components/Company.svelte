<script>
  import CompanyCarousel from './CompanyCarousel.svelte';
  import CompanyInfo from './CompanyInfo.svelte';

  import type Company from '../../typings/Components/Company';
  import type Columns from '../../typings/Components/Columns';

  export let company: Company;
  const name: string = company.name;
  const columns: Columns = company.columns;
</script>

<div class="col-span-full lg:col-start-{columns.start} lg:col-span-{columns.span} {columns['2xl'] ? `2xl:col-start-${columns['2xl'].start} 2xl:col-span-${columns['2xl'].span}` : '' } mt-15 lg:mt-20 2xl:mt-25 company-{name}">
  <CompanyCarousel {...company} />
  <CompanyInfo {...company} />
</div>
