import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import Icon from './Icon.jsx';
import Image from './Image.jsx';

/**
 * The hero slideshow, rebuilt on swiper/react. External navigation buttons and
 * the pagination container live outside the track (as in the original markup),
 * wired up via refs in onBeforeInit.
 */
export default function Slideshow({ slides, autoplay = 3000 }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const pagRef = useRef(null);

  return (
    <div className="Slideshow">
      <div className="Slideshow--inner">
        <Swiper
          className="Slideshow--track"
          modules={[Navigation, Pagination, Autoplay, A11y]}
          loop
          autoplay={autoplay ? { delay: autoplay, disableOnInteraction: false } : false}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{ el: pagRef.current, clickable: true }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = pagRef.current;
          }}
        >
          {slides.map((s) => (
            <SwiperSlide className="Slideshow--slide" key={s.src}>
              <div className="Slideshow--image">
                <Image src={s.src} alt={s.alt} title={s.title} width={s.width} height={s.height} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button ref={prevRef} className="Slideshow--button prev" type="button">
          <Icon name="16--link-internal" />
          <span className="visuallyhidden">Show previous image</span>
        </button>
        <button ref={nextRef} className="Slideshow--button next" type="button">
          <Icon name="16--link-internal" />
          <span className="visuallyhidden">Show next image</span>
        </button>
      </div>

      <div className="Slideshow--footer">
        <div ref={pagRef} className="Slideshow--pagination swiper-pagination" />
      </div>
    </div>
  );
}
