import type CompanyCarousel from './CompanyCarousel';
import type CompanyInfo from './CompanyInfo';
import type Columns from './Columns';

type Company =
  CompanyCarousel &
  CompanyInfo &
  { columns: Columns };

export default Company;