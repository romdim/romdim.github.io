import type Width from './Width';

type CarouselItem = {
  type: string,
  name?: string,
  width?: Width,
  format?: string,
  border?: boolean,
};

export default CarouselItem;