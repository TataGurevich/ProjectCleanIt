import React from 'react';
import style from './Content.module.css';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import img3 from "../../../img/Group_145.svg"
import img4 from '../../../img/Group 217.svg'
import img5 from '../../../img/Group 185.svg'
import img6 from '../../../img/Group 238.svg'

SwiperCore.use([Pagination, Navigation]);

const Content = () => {
    return (
        <div className={style.body}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div>
                            <section className="regular">
                                <img src={img3} alt="men cleaning"/>
                                <div className="regular_inf">
                                    <h1>Regular</h1>
                                    <p>This is our standard – what we do with every order. We can also add custom services to
                                        customize your
                                        cleaning offer.</p>
                                    <div>
                                        <p>We wash the floor and wipe the baseboards</p>
                                        <p>Carpets vacuuming (with your vacuum cleaner if you don’t have a
                                            vacuum cleaner don’t worry, we brush carpets)</p>
                                        <p> Wipe all accessible surfaces</p>
                                        <p> Wipe the switches and door handles</p>
                                        <p> We clean mirrors and glass surfaces</p>
                                        <p> We collect and take out the garbage</p>
                                    </div>
                                    <button id="check_avail">Check availability</button>
                                </div>
                            </section>
                            <section className="book_now">
                            </section>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div>
                            <section className="regular">
                                <img src={img4} alt="men cleaning"/>
                                <div className="regular_inf">
                                    <h1>Deep</h1>
                                    <p>When our team comes to you, is managed by the manager. The manager evaluates the duration, checks the quality and answers all your questions.</p>
                                    <div>
                                        <p>Wipe all accessible surfaces, switches and door handles</p>
                                        <p>Washing windows, mirrors and glass surfaces</p>
                                        <p>Washing furniture inside and outside Wiping the walls</p>
                                        <p>Washing chandeliers and lamps</p>
                                        <p>We wash the floor, wipe the baseboards and vacuum the carpet</p>
                                        <p>We take out the garbage</p>
                                    </div>
                                    <button id="check_avail">Check availability</button>
                                </div>
                            </section>
                            <section className="book_now">
                            </section>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div>
                            <section className="regular">
                                <img src={img5} alt="men cleaning"/>
                                <div className="regular_inf">
                                    <h1>Office</h1>
                                    <p>The cleaner comes every morning or evening to restore cleanliness and order.</p>
                                    <div>
                                        <p>Wipe all accessible surfaces, switches and door handles </p>
                                        <p>Washing windows, mirrors and glass surfaces</p>
                                        <p>Washing furniture inside and outside</p>
                                        <p>Wiping the walls</p>
                                        <p>Washing chandeliers and lamps</p>
                                        <p>We wash the floor, wipe the baseboards and vacuum the carpet</p>
                                        <p>We take out the garbage</p>
                                    </div>
                                    <button id="check_avail">Check availability</button>
                                </div>
                            </section>
                            <section className="book_now">
                            </section>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div>
                            <section className="regular">
                                <img src={img6} alt="men cleaning"/>
                                <div className="regular_inf">
                                    <h1>Windows</h1>
                                    <p>Our employee arrives with everything necessary at the agreed time and gets to work immediately.</p>
                                    <div>
                                        <p>Wash glass on both sides</p>
                                        <p>We clean the frame inside and out</p>
                                        <p>Washing mosquito nets</p>
                                        <p>Wipe the window sills</p>
                                    </div>
                                    <button id="check_avail">Check availability</button>
                                </div>
                            </section>
                            <section className="book_now">
                            </section>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Content;