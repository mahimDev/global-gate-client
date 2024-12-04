
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter'

import 'swiper/css/scrollbar';
import 'swiper/css';
const Banner = () => {
    return (
        <div className={`w-11/12 mx-auto h-[80vh] bg-world bg-no-repeat bg-cover  `}>

            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='text-5xl text-center backdrop-blur-md h-[80vh] bg-white/20   '>
                        <div className='App'>
                            <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                                Your Gateway to Global Opportunities <br /> {' '}
                                <span style={{ color: 'red', fontWeight: 'bold' }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={[
                                            'Your Journey Starts Here',
                                            'Explore New Horizons',
                                            'Visa Made Simple',
                                            'Bringing the World Closer',
                                            'From Dreams to Destinations',
                                            'Cross Borders with Confidence'
                                        ]}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={40}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </span>
                            </h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-5xl text-center backdrop-blur-md h-[80vh] bg-white/20   '>
                        <div className='App'>
                            <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                                Your Gateway to Global Opportunities <br /> {' '}
                                <span style={{ color: 'red', fontWeight: 'bold' }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={[
                                            'Your Journey Starts Here',
                                            'Explore New Horizons',
                                            'Visa Made Simple',
                                            'Bringing the World Closer',
                                            'From Dreams to Destinations',
                                            'Cross Borders with Confidence'
                                        ]}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={40}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </span>
                            </h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-5xl text-center backdrop-blur-md h-[80vh] bg-white/20   '>
                        <div className='App'>
                            <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                                Your Gateway to Global Opportunities <br /> {' '}
                                <span style={{ color: 'red', fontWeight: 'bold' }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={[
                                            'Your Journey Starts Here',
                                            'Explore New Horizons',
                                            'Visa Made Simple',
                                            'Bringing the World Closer',
                                            'From Dreams to Destinations',
                                            'Cross Borders with Confidence'
                                        ]}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={40}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </span>
                            </h1>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;