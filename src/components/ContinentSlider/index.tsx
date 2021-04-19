import {Flex} from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { ContinentSlideItem, ContinentSlideItemProps } from './slides'

interface ContinentSliderProps {
  continentes: ContinentSlideItemProps[];
}

SwiperCore.use([Navigation, Pagination, Autoplay])
export function ContinentSLider({ continentes }: ContinentSliderProps) {
  
  return (
    <Flex
      as="section"
      w={["100%","1225px"]}
      h={[215, 415]}
      p="2"
      m="auto"
    >
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        wrapperTag="ul"
        navigation
        pagination={{clickable: true}}
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={0}
        loop
      >
          {continentes.map(c => (
            <SwiperSlide key={c.continent} tag="li">
              <Link href={`/${c.continent}`}>
                <a>
                  <ContinentSlideItem  continent={c.continent} description={c.description} />
                </a>
              </Link>
            </SwiperSlide>
          )
          )}
      </Swiper>
    </Flex>
  );
}