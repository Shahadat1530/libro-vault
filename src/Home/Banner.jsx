import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        <div className="max-w-screen-2xl mx-auto my-10">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="w-full h-[450px] bg-gradient-to-r from-indigo-500 to-indigo-700 text-white flex flex-col justify-center items-center p-10 rounded-lg shadow-lg">
                        <h2 className="text-4xl font-bold mb-4">Welcome to the Digital Library</h2>
                        <p className="text-lg text-center">
                            Discover a wide range of books, manage your borrowing, and enjoy a seamless library experience.
                        </p>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="w-full h-[450px] bg-gradient-to-r from-teal-500 to-teal-700 text-white flex flex-col justify-center items-center p-10 rounded-lg shadow-lg">
                        <h2 className="text-4xl font-bold mb-4">Effortless Borrowing</h2>
                        <p className="text-lg text-center">
                            Track your borrowed books, set return dates, and never miss a deadline.
                        </p>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="w-full h-[450px] bg-gradient-to-r from-orange-500 to-orange-700 text-white flex flex-col justify-center items-center p-10 rounded-lg shadow-lg">
                        <h2 className="text-4xl font-bold mb-4">Explore Categories</h2>
                        <p className="text-lg text-center">
                            Browse through various genres and find your next favorite read in just a few clicks.
                        </p>
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                    <div className="w-full h-[450px] bg-gradient-to-r from-purple-500 to-purple-700 text-white flex flex-col justify-center items-center p-10 rounded-lg shadow-lg">
                        <h2 className="text-4xl font-bold mb-4">Seamless Updates</h2>
                        <p className="text-lg text-center">
                            Add, edit, or update book details effortlessly with our user-friendly tools.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
