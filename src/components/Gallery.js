"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import successemail from "../../public/assets/success.gif";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Textarea,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  useDisclosure,
  Input,
} from "@chakra-ui/react";

const Gallery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [state, handleSubmit] = useForm("xwkgzdde");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Booking Successful!");
    } else {
      toast.error("Booking error!!!");
    }
  }, [state.succeeded]);

  return (
    <div className="w-full min-h-[250px] py-16 bg-[#313131] [#f4f5f7] text-black">
      <div className="mx-auto max-w-[1100px] flex flex-col my-5 px-4 gap-10">
        <div className="text-white flex flex-col gap-6">
          <h1 className="font-bold text-4xl">Competitive Trip Rates</h1>
          <p className="text-lg font-semibold">
            Expanding routes with the most competitive fares.
          </p>
        </div>

        {/* <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper bg-[#f7f7f7]"
        >
          <SwiperSlide className="swiper-slide">
            <div className="shadow-lg shadow-[#040c16] rounded-md p-20 md:p-5 flex flex-col gap-2 "></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="shadow-lg shadow-[#040c16] rounded-md p-20 md:p-5 flex flex-col gap-2 "></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="shadow-lg shadow-[#040c16] rounded-md p-20 md:p-5 flex flex-col gap-2 "></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/picture_4.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/picture_5.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/picture_6.jpg" alt="" />
          </SwiperSlide>
        </Swiper> */}

        <div className="grid gap-8 md:gap-5 grid-cols-1 md:grid-cols-4 p-1 bg-[#f7f7f7] rounded-md">
          <div className="shadow-lg shadow-[#040c16] rounded flex flex-col gap-2 ">
            <img
              src="/assets/lagos-bg.jpeg"
              alt="booking"
              className="card-image rounded-t-lg"
            />

            <div className="p-3 text-center font-semibold">
              <h3>Lagos to Onitsha</h3>
              <Button onClick={onOpen} colorScheme="teal" mt={4} mb={4}>
                Book Now
              </Button>
            </div>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              blockScrollOnMount={false}
              isCentered
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  Book a Bus from Lagos (KM 10) to Onitsha
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <div className=" rounded-md p-7 order-last bg-[#f7f7f7]">
                    <form onSubmit={handleSubmit} className="flex flex-col">
                      <div className="input-group mb-6">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="name" name="name" required />
                      </div>
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />

                      <div className="input-group mb-6">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" name="email" required />
                      </div>
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />

                      <div className="input-group mb-6">
                        <label htmlFor="email">Phone Number</label>
                        <input
                          id="number"
                          type="number"
                          name="number"
                          required
                        />
                      </div>
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />

                      <div className="input-group mb-6">
                        <label htmlFor="destination-one">Travelling From</label>
                        <input
                          id="destination-one"
                          type="name"
                          name="destination-one"
                          required
                        />
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="destination-two">Travelling To</label>
                        <input
                          id="destination-two"
                          type="name"
                          name="destination-two"
                          required
                        />
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="adults">Adults:</label>
                        <select name="adults" id="adults">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                        </select>
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="date">Departure Date</label>

                        <input type="date" id="date" name="date" />
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={3} />
                      </div>

                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                      <button
                        className="px-7 py-3 rounded-md border-[1px] border-[#000000] hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out"
                        type="submit"
                        disabled={state.submitting}
                      >
                        Book Now
                      </button>
                      <ToastContainer />
                    </form>
                  </div>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>

          <div className="shadow-lg shadow-[#040c16] rounded flex flex-col gap-2 ">
            <img
              src="/assets/benin-bg.jpeg"
              alt="booking"
              className="card-image rounded-t-lg"
            />

            <div className="p-3 text-center font-semibold">
              <h3>Benin to Lagos</h3>
              <Button onClick={onOpen} colorScheme="teal" mt={4} mb={4}>
                Book Now
              </Button>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Book a Bus</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <div className="contact-form rounded-md p-7 order-last bg-[#f7f7f7] max-h-[450px] overflow-y-scroll">
                    <form onSubmit={handleSubmit} className="flex flex-col ">
                      <div className="input-group mb-6">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="name" name="name" required />
                      </div>
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />

                      <div className="input-group mb-6">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" name="email" required />
                      </div>
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />

                      <div className="input-group mb-6">
                        <label htmlFor="email">Phone Number</label>
                        <input
                          id="number"
                          type="number"
                          name="number"
                          required
                        />
                      </div>
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />

                      <div className="input-group mb-6">
                        <label htmlFor="destination-one">Travelling From</label>
                        <input
                          id="destination-one"
                          type="name"
                          name="destination-one"
                          required
                        />
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="route">Travelling To</label>
                        <input id="route" type="name" name="route" required />
                        {/* <select name="route" id="route">
                          <option value="Asaba">Asaba</option>
                          <option value="Agbor">Agbor</option>
                          <option value="Onitsha">Onitsha</option>
                          <option value="Owerris">Owerri</option>
                          <option value="Mbaise">Mbaise</option>
                          <option value="Umuahia">Umuahia</option>
                          <option value="Aba">Aba</option>
                          <option value="P.H">P.H</option>
                        </select> */}
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="adults">Adults:</label>
                        <select name="adults" id="adults">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                        </select>
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="date">Departure Date</label>

                        <input
                          type="date"
                          id="date"
                          name="date"
                          onload="getDate()"
                        />
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={3} />
                      </div>

                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                      <button
                        className="px-7 py-3 rounded-md border-[1px] border-[#000000] hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out"
                        type="submit"
                        disabled={state.submitting}
                        // onClick={notify}
                      >
                        Book Now
                      </button>
                      {/* <ToastContainer /> */}
                    </form>
                  </div>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>

          <div className="shadow-lg shadow-[#040c16] rounded flex flex-col gap-2 ">
            <img
              src="/assets/onitsha-bg.jpeg"
              alt="booking"
              className="card-image rounded-t-lg"
            />

            <div className="p-3 text-center font-semibold">
              <h3>Onitsha to Lagos</h3>
              <Button onClick={onOpen} colorScheme="teal" mt={4} mb={4}>
                Book Now
              </Button>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Book a Bus</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <div className="contact-form rounded-md p-7 order-last bg-[#f7f7f7] max-h-[450px] overflow-y-scroll">
                    <form onSubmit={handleSubmit} className="flex flex-col ">
                      <div className="input-group mb-6">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="name" name="name" required />
                      </div>
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />

                      <div className="input-group mb-6">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" name="email" required />
                      </div>
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />

                      <div className="input-group mb-6">
                        <label htmlFor="email">Phone Number</label>
                        <input
                          id="number"
                          type="number"
                          name="number"
                          required
                        />
                      </div>
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />

                      <div className="input-group mb-6">
                        <label htmlFor="destination-one">Travelling From</label>
                        <input
                          id="destination-one"
                          type="name"
                          name="destination-one"
                          required
                        />
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="route">Travelling To</label>
                        <input id="route" type="name" name="route" required />
                        {/* <select name="route" id="route">
                          <option value="Asaba">Asaba</option>
                          <option value="Agbor">Agbor</option>
                          <option value="Onitsha">Onitsha</option>
                          <option value="Owerris">Owerri</option>
                          <option value="Mbaise">Mbaise</option>
                          <option value="Umuahia">Umuahia</option>
                          <option value="Aba">Aba</option>
                          <option value="P.H">P.H</option>
                        </select> */}
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="adults">Adults:</label>
                        <select name="adults" id="adults">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                        </select>
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="date">Departure Date</label>

                        <input
                          type="date"
                          id="date"
                          name="date"
                          onload="getDate()"
                        />
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={3} />
                      </div>

                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                      <button
                        className="px-7 py-3 rounded-md border-[1px] border-[#000000] hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out"
                        type="submit"
                        disabled={state.submitting}
                        // onClick={notify}
                      >
                        Book Now
                      </button>
                      {/* <ToastContainer /> */}
                    </form>
                  </div>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>

          <div className="shadow-lg shadow-[#040c16] rounded flex flex-col gap-2 ">
            <img
              src="/assets/warri-bg.jpeg"
              alt="booking"
              className="card-image rounded-t-lg"
            />

            <div className="p-3 text-center font-semibold">
              <h3>Lagos to Warri</h3>
              <Button onClick={onOpen} colorScheme="teal" mt={4} mb={4}>
                Book Now
              </Button>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Book a Bus</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <div className="contact-form rounded-md p-7 order-last bg-[#f7f7f7] max-h-[450px] overflow-y-scroll">
                    <form onSubmit={handleSubmit} className="flex flex-col ">
                      <div className="input-group mb-6">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="name" name="name" required />
                      </div>
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />

                      <div className="input-group mb-6">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" name="email" required />
                      </div>
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />

                      <div className="input-group mb-6">
                        <label htmlFor="email">Phone Number</label>
                        <input
                          id="number"
                          type="number"
                          name="number"
                          required
                        />
                      </div>
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />

                      <div className="input-group mb-6">
                        <label htmlFor="destination-one">Travelling From</label>
                        <input
                          id="destination-one"
                          type="name"
                          name="destination-one"
                          required
                        />
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="route">Travelling To</label>
                        <input id="route" type="name" name="route" required />
                        {/* <select name="route" id="route">
                          <option value="Asaba">Asaba</option>
                          <option value="Agbor">Agbor</option>
                          <option value="Onitsha">Onitsha</option>
                          <option value="Owerris">Owerri</option>
                          <option value="Mbaise">Mbaise</option>
                          <option value="Umuahia">Umuahia</option>
                          <option value="Aba">Aba</option>
                          <option value="P.H">P.H</option>
                        </select> */}
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="adults">Adults:</label>
                        <select name="adults" id="adults">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                        </select>
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="date">Departure Date</label>

                        <input
                          type="date"
                          id="date"
                          name="date"
                          onload="getDate()"
                        />
                      </div>

                      <div className="input-group mb-6">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={3} />
                      </div>

                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                      <button
                        className="px-7 py-3 rounded-md border-[1px] border-[#000000] hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out"
                        type="submit"
                        disabled={state.submitting}
                        // onClick={notify}
                      >
                        Book Now
                      </button>
                      {/* <ToastContainer /> */}
                    </form>
                  </div>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
