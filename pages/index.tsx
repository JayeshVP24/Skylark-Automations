/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{
                    opacity: 0,
                    y: -50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: 50,
                }}
            >
                <Head>
                    <title>Skylark Automations</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <Nav />

                    <Hero />

                    <Clients />

                    <Testimonials />

                    <Gallery />

                    <About />

                    <Contact />

                    <Footer />
                </main>
            </m.div>
        </LazyMotion>
    );
};

const Footer: React.FC = () => {
    return (
        <footer
            className="bg-primary text-center flex flex-col justify-center items-center
        rounded-t-[3rem] py-8 mt-10 space-y-5"
        >
            <img
                className="w-2/6"
                src="logo.png"
                alt="Skylark Automations Logo"
            />
            <h2 className="font-bold text-2xl">Skylark Automation</h2>
            <nav className="flex flex-col space-y-2 justify-center items-center font-semibold text-xl">
                <Link href="#home">
                    <a className="hover:underline">Home</a>
                </Link>
                <Link href="#testimonials">
                    <a className="hover:underline">Testimonials</a>
                </Link>
                <Link href="#gallery">
                    <a className="hover:underline">Gallery</a>
                </Link>
                <Link href="#about">
                    <a className="hover:underline">About</a>
                </Link>
                <Link href="#contact-us">
                    <a className="hover:underline">Contact us</a>
                </Link>
            </nav>

            <a
                href="https://form.jotform.com/201476299839067"
                rel="noopener noreferrer"
                target="_blank"
                className="mt-5 bg-secondary text-primary text-xl hover:bg-opacity-80 active:scale-95 transition-all rounded-box font-semibold px-6 py-2  "
            >
                Book a Meet
            </a>

            <span className="font-bold">Skylark Automation Pvt Ltd, 2021</span>
        </footer>
    );
};

const Contact: React.FC = () => {
    return (
        <section className="mt-10 mx-4" id="contact-us">
            <h2 className="text-xl font-bold text-center tracking-wider">
                Contact us
            </h2>
            <h3 className="text-xl mx-5 font-light text-center tracking-wider">
                Connect with us and get the Best Offer
            </h3>
            <div className="mt-5 flex flex-col space-y-5 ">
                <article className="bg-primary bg-opacity-20 rounded-3xl px-5 text-center py-8 flex flex-col items-center justify-center ">
                    <svg
                        width="88"
                        height="88"
                        viewBox="0 0 88 88"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M84.3334 83.4167H3.66675C2.16341 83.4167 0.916748 82.1701 0.916748 80.6667C0.916748 79.1634 2.16341 77.9167 3.66675 77.9167H84.3334C85.8367 77.9167 87.0834 79.1634 87.0834 80.6667C87.0834 82.1701 85.8367 83.4167 84.3334 83.4167Z"
                            fill="white"
                        />
                        <path
                            d="M72.5276 83.4535C71.0243 83.4535 69.7776 82.2069 69.7776 80.7035V64.3501C69.7776 62.8468 71.0243 61.6001 72.5276 61.6001C74.0309 61.6001 75.2776 62.8468 75.2776 64.3501V80.7035C75.2776 82.2069 74.0676 83.4535 72.5276 83.4535Z"
                            fill="white"
                        />
                        <path
                            d="M72.6004 67.0999C66.6237 67.0999 61.7837 62.2599 61.7837 56.2832V47.96C61.7837 41.9834 66.6237 37.1433 72.6004 37.1433C78.5771 37.1433 83.4171 41.9834 83.4171 47.96V56.2832C83.4171 62.2599 78.5771 67.0999 72.6004 67.0999ZM72.6004 42.68C69.6671 42.68 67.2837 45.0634 67.2837 47.9967V56.3199C67.2837 59.2532 69.6671 61.6366 72.6004 61.6366C75.5337 61.6366 77.9171 59.2532 77.9171 56.3199V47.9967C77.9171 45.0634 75.5337 42.68 72.6004 42.68Z"
                            fill="white"
                        />
                        <path
                            d="M52.4327 83.4166C50.9294 83.4166 49.6827 82.1699 49.6827 80.6666V22.11C49.6827 16.28 47.2261 13.7866 41.5061 13.7866H18.6628C12.9062 13.7866 10.4128 16.28 10.4128 22.11V80.6666C10.4128 82.1699 9.16617 83.4166 7.66284 83.4166C6.15951 83.4166 4.91284 82.1699 4.91284 80.6666V22.11C4.91284 13.2 9.78951 8.28662 18.6628 8.28662H41.5061C50.3428 8.28662 55.1827 13.2 55.1827 22.11V80.6666C55.1827 82.1699 53.936 83.4166 52.4327 83.4166Z"
                            fill="white"
                        />
                        <path
                            d="M39.4159 33H21.2659C19.7625 33 18.5159 31.7533 18.5159 30.25C18.5159 28.7467 19.7625 27.5 21.2659 27.5H39.4159C40.9192 27.5 42.1659 28.7467 42.1659 30.25C42.1659 31.7533 40.9192 33 39.4159 33Z"
                            fill="white"
                        />
                        <path
                            d="M39.4159 46.75H21.2659C19.7625 46.75 18.5159 45.5033 18.5159 44C18.5159 42.4967 19.7625 41.25 21.2659 41.25H39.4159C40.9192 41.25 42.1659 42.4967 42.1659 44C42.1659 45.5033 40.9192 46.75 39.4159 46.75Z"
                            fill="white"
                        />
                        <path
                            d="M30.25 83.4167C28.7467 83.4167 27.5 82.1701 27.5 80.6667V66.9167C27.5 65.4134 28.7467 64.1667 30.25 64.1667C31.7533 64.1667 33 65.4134 33 66.9167V80.6667C33 82.1701 31.7533 83.4167 30.25 83.4167Z"
                            fill="white"
                        />
                    </svg>

                    <h4 className="font-semibold tracking-wider mt-5 ">
                        Address
                    </h4>

                    <p className="text-sm tracking-wide mt-3">
                        RAVIRAJ TERRACE B2 3RD FLOOR OFFICE NO9 SUKHSAGARNAGAR
                        KATRAJ PUNE, Maharashtra 411046 India
                    </p>

                    <a
                        href="https://www.google.com/maps/dir//Skylark+Automation+Pvt+Ltd/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2ebdf3dd461df:0x40358aebe389a647!2m2!1d73.870876!2d18.4535798"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="mt-5 bg-primary hover:bg-opacity-50 active:scale-95 transition-all rounded-box font-semibold px-6 py-2  "
                    >
                        Get Directions
                    </a>
                </article>
                <article className="bg-primary bg-opacity-20 rounded-3xl px-5 text-center py-8 flex flex-col items-center justify-center ">
                    <svg
                        width="88"
                        height="88"
                        viewBox="0 0 88 88"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M63.9833 83.4166C59.8399 83.4166 55.4766 82.4266 50.9666 80.5199C46.5666 78.6499 42.1299 76.0833 37.8033 72.9666C33.5133 69.8133 29.3699 66.2933 25.4466 62.4433C21.5599 58.5199 18.0399 54.3766 14.9233 50.1233C11.7699 45.7233 9.23992 41.3232 7.44325 37.0699C5.53659 32.5233 4.58325 28.1233 4.58325 23.9799C4.58325 21.1199 5.09659 18.4066 6.08659 15.8766C7.11325 13.2733 8.76325 10.8533 10.9999 8.76325C13.8233 5.97659 17.0499 4.58325 20.4966 4.58325C21.9266 4.58325 23.3932 4.91325 24.6399 5.49992C26.0699 6.15992 27.2799 7.14992 28.1599 8.46992L36.6666 20.4599C37.4366 21.5233 38.0233 22.5499 38.4266 23.5766C38.9032 24.6766 39.1599 25.7766 39.1599 26.8399C39.1599 28.2333 38.7566 29.5899 37.9866 30.8733C37.4366 31.8633 36.5933 32.9266 35.5299 33.9899L33.0366 36.5933C33.0733 36.7033 33.1099 36.7766 33.1466 36.8499C33.5866 37.6199 34.4666 38.9399 36.1532 40.9199C37.9499 42.9733 39.6366 44.8433 41.3233 46.5666C43.4866 48.6933 45.2833 50.3799 46.9699 51.7733C49.0599 53.5333 50.4166 54.4133 51.2233 54.8166L51.1499 54.9999L53.8266 52.3599C54.9632 51.2233 56.0632 50.3799 57.1266 49.8299C59.1432 48.5833 61.7099 48.3633 64.2766 49.4266C65.2299 49.8299 66.2566 50.3799 67.3566 51.1499L79.5299 59.8032C80.8866 60.7199 81.8766 61.8933 82.4632 63.2866C83.0132 64.6799 83.2699 65.9633 83.2699 67.2466C83.2699 69.0066 82.8666 70.7666 82.0966 72.4166C81.3266 74.0666 80.3733 75.4966 79.1632 76.8166C77.0732 79.1266 74.7999 80.7766 72.1599 81.8399C69.6299 82.8666 66.8799 83.4166 63.9833 83.4166ZM20.4966 10.0833C18.4799 10.0833 16.6099 10.9633 14.8133 12.7233C13.1266 14.2999 11.9533 16.0233 11.2199 17.8933C10.4499 19.7999 10.0833 21.8166 10.0833 23.9799C10.0833 27.3899 10.8899 31.0933 12.5033 34.9066C14.1533 38.7933 16.4633 42.8266 19.3966 46.8599C22.3299 50.8933 25.6666 54.8166 29.3333 58.5199C32.9999 62.1499 36.9599 65.5233 41.0299 68.4933C44.9899 71.3899 49.0599 73.7366 53.0932 75.4233C59.3632 78.0999 65.2299 78.7233 70.0699 76.7066C71.9399 75.9366 73.5899 74.7633 75.0932 73.0766C75.9366 72.1599 76.5966 71.1699 77.1466 69.9966C77.5866 69.0799 77.8066 68.1266 77.8066 67.1733C77.8066 66.5866 77.6966 65.9999 77.4033 65.3399C77.2933 65.1199 77.0732 64.7166 76.3766 64.2399L64.2033 55.5866C63.4699 55.0733 62.8099 54.7066 62.1866 54.4499C61.3799 54.1199 61.0499 53.7899 59.8032 54.5599C59.0699 54.9266 58.4099 55.4766 57.6766 56.2099L54.8899 58.9599C53.4599 60.3533 51.2599 60.6833 49.5732 60.0599L48.5833 59.6199C47.0799 58.8133 45.3199 57.5666 43.3766 55.9166C41.6166 54.4133 39.7099 52.6533 37.3999 50.3799C35.6033 48.5466 33.8066 46.6033 31.9366 44.4399C30.2133 42.4233 28.9666 40.6999 28.1966 39.2699L27.7566 38.1699C27.5366 37.3266 27.4632 36.8499 27.4632 36.3366C27.4632 35.0166 27.9399 33.8433 28.8566 32.9266L31.6066 30.0666C32.3399 29.3333 32.8899 28.6366 33.2566 28.0133C33.5499 27.5366 33.6599 27.1333 33.6599 26.7666C33.6599 26.4733 33.5499 26.0333 33.3666 25.5933C33.1099 25.0066 32.7066 24.3466 32.1933 23.6499L23.6866 11.6233C23.3199 11.1099 22.8799 10.7433 22.3299 10.4866C21.7433 10.2299 21.1199 10.0833 20.4966 10.0833ZM51.1499 55.0366L50.5633 57.5299L51.5533 54.9633C51.3699 54.9266 51.2232 54.9633 51.1499 55.0366Z"
                            fill="white"
                        />
                        <path
                            d="M67.8333 35.7501C66.33 35.7501 65.0833 34.5034 65.0833 33.0001C65.0833 31.6801 63.7633 28.9301 61.5633 26.5834C59.4 24.2734 57.0167 22.9167 55 22.9167C53.4967 22.9167 52.25 21.6701 52.25 20.1667C52.25 18.6634 53.4967 17.4167 55 17.4167C58.5567 17.4167 62.2967 19.3234 65.56 22.8067C68.6033 26.0701 70.5833 30.0667 70.5833 33.0001C70.5833 34.5034 69.3367 35.7501 67.8333 35.7501Z"
                            fill="white"
                        />
                        <path
                            d="M80.6667 35.7499C79.1633 35.7499 77.9167 34.5033 77.9167 32.9999C77.9167 20.3499 67.65 10.0833 55 10.0833C53.4967 10.0833 52.25 8.83659 52.25 7.33325C52.25 5.82992 53.4967 4.58325 55 4.58325C70.6567 4.58325 83.4167 17.3433 83.4167 32.9999C83.4167 34.5033 82.17 35.7499 80.6667 35.7499Z"
                            fill="white"
                        />
                    </svg>

                    <h4 className="font-semibold tracking-wider mt-5 ">
                        Phone
                    </h4>

                    <p className="text-lg tracking-wide mt-3">
                        +91 088056 77986
                    </p>

                    <a
                        href="tel:+91-88056-77986"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="mt-5 bg-primary hover:bg-opacity-50 active:scale-95 transition-all rounded-box font-semibold px-6 py-2  "
                    >
                        Call Now
                    </a>
                </article>
                <article className="bg-primary bg-opacity-20 rounded-3xl px-5 text-center py-8 flex flex-col items-center justify-center ">
                    <svg
                        width="88"
                        height="88"
                        viewBox="0 0 88 88"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M43.9997 83.4531C40.003 83.4531 36.043 82.2798 32.9264 79.9698L17.1596 68.1998C12.9796 65.0831 9.71631 58.5565 9.71631 53.3865V26.1065C9.71631 20.4598 13.8597 14.4465 19.1764 12.4665L37.473 5.60979C41.103 4.25312 46.823 4.25312 50.453 5.60979L68.7497 12.4665C74.0663 14.4465 78.2096 20.4598 78.2096 26.1065V53.3498C78.2096 58.5565 74.9463 65.0465 70.7663 68.1631L54.9997 79.9331C51.9563 82.2798 47.9963 83.4531 43.9997 83.4531ZM39.4163 10.7798L21.1197 17.6365C18.003 18.8098 15.253 22.7698 15.253 26.1431V53.3865C15.253 56.8698 17.7096 61.7465 20.4596 63.7998L36.2263 75.5698C40.443 78.7231 47.5563 78.7231 51.8097 75.5698L67.5763 63.7998C70.363 61.7098 72.783 56.8698 72.783 53.3865V26.1065C72.783 22.7698 70.033 18.8098 66.9163 17.5998L48.6197 10.7431C46.1264 9.86312 41.873 9.86312 39.4163 10.7798Z"
                            fill="white"
                        />
                        <path
                            d="M43.9999 59.5833C34.3933 59.5833 26.5833 51.7733 26.5833 42.1667C26.5833 32.56 34.3933 24.75 43.9999 24.75C53.6066 24.75 61.4166 32.56 61.4166 42.1667C61.4166 51.7733 53.6066 59.5833 43.9999 59.5833ZM43.9999 30.25C37.4366 30.25 32.0833 35.6033 32.0833 42.1667C32.0833 48.73 37.4366 54.0833 43.9999 54.0833C50.5633 54.0833 55.9166 48.73 55.9166 42.1667C55.9166 35.6033 50.5633 30.25 43.9999 30.25Z"
                            fill="white"
                        />
                        <path
                            d="M40.3329 48.5835C39.4163 48.5835 38.4996 48.1068 37.9862 47.2635C37.2162 45.9435 37.6196 44.2568 38.9396 43.4868L41.7263 41.8001C42.0196 41.6168 42.1663 41.3234 42.1663 41.0301V37.6201C42.1663 36.1168 43.4129 34.8701 44.9163 34.8701C46.4196 34.8701 47.6663 36.0801 47.6663 37.5834V40.9935C47.6663 43.2301 46.4563 45.3568 44.5496 46.4935L41.7263 48.1801C41.323 48.4735 40.8096 48.5835 40.3329 48.5835Z"
                            fill="white"
                        />
                    </svg>

                    <h4 className="font-semibold tracking-wider mt-5 ">
                        Business Hours
                    </h4>

                    <p className="text-sm tracking-wide mt-3">
                        Mon: 9:00 AM – 6:00 PM <br />
                        Tue: 9:00 AM – 6:00 PM <br />
                        Wed: 9:00 AM – 6:00 PM <br />
                        Thu: 9:00 AM – 6:00 PM <br />
                        Fri: 9:00 AM – 6:00 PM <br />
                        Sat: 9:00 AM – 6:00 PM <br />
                        Sun: Closed
                    </p>

                    <a
                        href="https://form.jotform.com/201476299839067"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="mt-5 bg-primary hover:bg-opacity-50 active:scale-95 transition-all rounded-box font-semibold px-6 py-2  "
                    >
                        Book a Meet
                    </a>
                </article>
            </div>
        </section>
    );
};

const About: React.FC = () => {
    return (
        <section className="mt-10 mx-4 " id="about">
            <h2 className="text-xl font-bold text-center tracking-wider">
                About
            </h2>
            <h3 className="text-xl mx-5 font-light text-center tracking-wider">
                A Brief Introduction of who we are and what we do
            </h3>
            <img
                className="h-48 mx-auto mt-5"
                src="logo.png"
                alt="Skylark Automations Logo"
            />
            <p className="text-center mx-auto mt-5">
                SKYLARK AUTOMATION PVT LTD is the leading Automation Group of
                Smart technologies in India. Founder CEO – Prachie Sorte Jagtap-
                Certified System Integrator. Our Systems are designed to fit
                your lifestyle and allow you to seamlessly control all aspects
                of your home, including lighting, appliances, curtains and
                blinds, multi-room audio, security, digital surveillance.
                Industrial Automation big tied up.
            </p>
            <p className="text-center mx-auto mt-2">
                Skylark Smart Solutions like a handheld remote, a wall keypad,
                or touch screen you can conveniently connect to wired and
                wireless devices, allowing you to adjust the thermostat, start
                music throughout the house, close the shades or garage door, or
                perform many of these actions in unison. From a full smart
                lighting line to audio equipment, thermostats, cameras,
                speakers, and beyond, we’ve developed products that enhance your
                security, comfort, convenience, and entertainment at home.
            </p>

            <article className="mt-5 bg-primary text-center rounded-3xl flex flex-col items-center justify-center px-8 py-5">
                <img
                    className="rounded-3xl"
                    src="founder.jpg"
                    alt="Prachie Sorte"
                />
                <h4 className="font-bold text-xl tracking-wider mt-5">
                    Prachi S
                </h4>
                <h4 className="font-semibold tracking-wide">CEO / Founder</h4>
                <p className="text-sm mt-3">
                    An Award-Winning Entrepreneur, Lighting Designer,
                    International Educator-Translator-Winner, She has
                    established herself as one of the foremost experts on the
                    digital economy and how the fourth industrial revolution is
                    transforming the global workforce, empowering technocrat and
                    accelerating government reform across the Globe.
                </p>
                <Link
                    href="https://www.linkedin.com/in/prachii-she-her-skycoon-404702135/"
                    passHref
                >
                    <a className="mt-3">
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.3999 2.3999C3.7499 2.3999 2.3999 3.7499 2.3999 5.3999V24.5999C2.3999 26.2499 3.7499 27.5999 5.3999 27.5999H24.5999C26.2499 27.5999 27.5999 26.2499 27.5999 24.5999V5.3999C27.5999 3.7499 26.2499 2.3999 24.5999 2.3999H5.3999ZM5.3999 3.5999H24.5999C25.6007 3.5999 26.3999 4.39912 26.3999 5.3999V24.5999C26.3999 25.6007 25.6007 26.3999 24.5999 26.3999H5.3999C4.39912 26.3999 3.5999 25.6007 3.5999 24.5999V5.3999C3.5999 4.39912 4.39912 3.5999 5.3999 3.5999ZM8.3999 6.60693C7.74248 6.60693 7.15186 6.80381 6.71357 7.17178C6.27529 7.53975 6.00693 8.09053 6.00693 8.67998C6.00693 9.80029 6.97842 10.6733 8.21475 10.7601C8.21592 10.7601 8.21592 10.7612 8.21709 10.7612C8.27568 10.7812 8.33779 10.7917 8.3999 10.7929C9.76397 10.7929 10.7929 9.83779 10.7929 8.67998C10.7929 8.66943 10.7929 8.65889 10.7917 8.64834C10.7308 7.50811 9.71475 6.60693 8.3999 6.60693ZM8.3999 7.79287C9.23545 7.79287 9.56475 8.16553 9.60107 8.69522C9.59404 9.2085 9.27646 9.60693 8.3999 9.60693C7.56904 9.60693 7.19287 9.18154 7.19287 8.67998C7.19287 8.4292 7.28428 8.24053 7.47647 8.07881C7.66865 7.91709 7.97686 7.79287 8.3999 7.79287ZM6.5999 11.3999C6.26826 11.3999 5.9999 11.6683 5.9999 11.9999V23.3999C5.9999 23.7315 6.26826 23.9999 6.5999 23.9999H10.1999C10.5315 23.9999 10.7999 23.7315 10.7999 23.3999V11.9999C10.7999 11.6683 10.5315 11.3999 10.1999 11.3999H6.5999ZM11.9999 11.3999C11.6683 11.3999 11.3999 11.6683 11.3999 11.9999V23.3999C11.3999 23.7315 11.6683 23.9999 11.9999 23.9999H15.5999C15.9315 23.9999 16.1999 23.7315 16.1999 23.3999V17.3999C16.1999 16.9019 16.3358 16.4073 16.5749 16.0827C16.814 15.7581 17.1163 15.5636 17.6894 15.5741C18.2812 15.5847 18.594 15.7874 18.8308 16.105C19.0675 16.4226 19.1999 16.8995 19.1999 17.3999V23.3999C19.1999 23.7315 19.4683 23.9999 19.7999 23.9999H23.3999C23.7315 23.9999 23.9999 23.7315 23.9999 23.3999V16.9569C23.9999 15.1804 23.4737 13.7729 22.5714 12.8202C21.669 11.8675 20.414 11.3999 19.0874 11.3999C17.8265 11.3999 16.8667 11.8229 16.1999 12.2542V11.9999C16.1999 11.6683 15.9315 11.3999 15.5999 11.3999H11.9999ZM7.1999 12.5999H9.5999V22.7999H7.1999V12.5999ZM12.5999 12.5999H14.9999V13.5362C14.9999 13.794 15.1651 14.0237 15.4101 14.1046C15.6538 14.1866 15.9245 14.1034 16.0792 13.8972C16.0792 13.8972 17.0214 12.5999 19.0874 12.5999C20.1397 12.5999 21.0421 12.9491 21.7007 13.6452C22.3593 14.3413 22.7999 15.4124 22.7999 16.9569V22.7999H20.3999V17.3999C20.3999 16.7003 20.2323 15.9761 19.794 15.3878C19.3558 14.7995 18.6187 14.3894 17.7105 14.3741C16.7976 14.3577 16.0487 14.7761 15.6093 15.3714C15.1698 15.9667 14.9999 16.6979 14.9999 17.3999V22.7999H12.5999V12.5999Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                </Link>
            </article>
        </section>
    );
};

const Gallery: React.FC = () => {
    const [currImg, setCurrImg] = useState<string>("p1");
    const [imgModal, setImgModal] = useState<boolean>(false);
    const gallery = ["p1", "p2", "p3", "p4", "p5", "p6"];
    return (
        <section className="mt-10 " id="gallery">
            <h2 className="text-xl font-bold text-center tracking-wider">
                Gallery
            </h2>
            <h3 className="text-xl mx-5 font-light text-center tracking-wider">
                Glance at our Top Notch Products and Services
            </h3>
            <div className="max-w-lg ml-3 space-x-4 carousel carousel-center mt-5">
                {gallery.map((p) => (
                    <img
                        key={p}
                        className="w-[80vw] h-[25vh] rounded-box object-cover cursor-pointer "
                        src={`gallery/${p}.jpg`}
                        onClick={() => {
                            setCurrImg(p);
                            setImgModal(true);
                        }}
                        alt={`product ${p} `}
                    />
                ))}
            </div>

            <AnimatePresence>
                {imgModal && (
                    <>
                        <m.div
                            className="w-screen h-screen bg-black bg-opacity-60 fixed top-0 left-0"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                        />
                        <m.div
                            className="fixed  top-0 left-0 h-screen  "
                            onClick={() => setImgModal(false)}
                            initial={{
                                y: -100,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: -100,
                                opacity: 0,
                            }}
                        >
                            <img
                                className="w-10/12 mx-auto relative top-[50%] translate-y-[-50%]"
                                src={`gallery/${currImg}.jpg`}
                                alt={`product ${currImg} `}
                            />
                        </m.div>{" "}
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

const Testimonials: React.FC = () => {
    const testimonails: { text: string; by: string }[] = [
        {
            text: `Home and Building Automation Specialist Best
        Security related Company for entire
        solutions with dedicated team support and on
        time executions with time frame delivery of
        work. Top Automation Company in India.`,
            by: "Prachi S.",
        },
        {
            text: `Home and Building Automation Specialist Best
        Security related Company for entire
        solutions with dedicated team support and on
        time executions with time frame delivery of
        work. Top Automation Company in India.`,
            by: "Prachi S.",
        },
        {
            text: `Home and Building Automation Specialist Best
        Security related Company for entire
        solutions with dedicated team support and on
        time executions with time frame delivery of
        work. Top Automation Company in India.`,
            by: "Prachi S.",
        },
        {
            text: `Home and Building Automation Specialist Best
        Security related Company for entire
        solutions with dedicated team support and on
        time executions with time frame delivery of
        work. Top Automation Company in India.`,
            by: "Prachi S.",
        },
    ];

    return (
        <section className="mt-10 " id="testimonials">
            <h2 className="text-xl font-bold text-center tracking-wider">
                Testimonails
            </h2>
            <h3 className="text-xl mx-5 font-light text-center tracking-wider">
                Hear what our clients say about us
            </h3>
            <div className="max-w-lg ml-3 space-x-2 carousel carousel-center mt-5">
                {testimonails.map((t) => (
                    <Testimonail key={t.by} text={t.text} by={t.by} />
                ))}
            </div>
        </section>
    );
};

const Clients: React.FC = () => {
    return (
        <section className="mt-10 mx-5">
            <h2 className="text-xl font-bold text-center tracking-wider">
                Our Clients who took one step into the future
            </h2>
            <article className="flex flex-wrap justify-around mt-3">
                <img
                    className="object-contain my-2 w-32 rounded-box border-4 border-primary"
                    src="clients/18latitude.png"
                    alt="18latitude logo"
                />
                <img
                    className="object-contain my-2 w-32 rounded-box border-4 border-primary"
                    src="clients/gd-square.jpg"
                    alt="GD Square logo"
                />
                <img
                    className="object-contain my-2 w-32 rounded-box border-4 border-primary"
                    src="clients/yashada.jpg"
                    alt="Yashada group logo"
                />
                <img
                    className="object-contain my-2 w-32 rounded-box border-4 border-primary"
                    src="clients/lunkad.png"
                    alt="Lunkad Realty logo"
                />
                <img
                    className="object-contain my-2 w-32 rounded-box border-4 border-primary"
                    src="clients/sentosa-pearl.jpg"
                    alt="Sentosa Pearl logo"
                />
                <img
                    className="object-contain my-2 w-32 rounded-box border-4 border-primary"
                    src="clients/Rohan-Construction.jpg"
                    alt="Rohan Constructions logo"
                />
            </article>
        </section>
    );
};

const Hero: React.FC = () => {
    return (
        <section className="mx-5" id="home">
            <h1 className="text-3xl  font-bold tracking-widest leading-normal text-center">
                India’s Leading Automation group of Smart Technologies
            </h1>
            <article className="mt-8">
                <div className="flex justify-around">
                    <span className="block bg-primary bg-opacity-10 w-min mask mask-squircle p-5">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M24.0001 27.5577C23.7501 27.5577 23.5001 27.5 23.2885 27.3654C22.5962 26.9615 22.3654 26.0769 22.7501 25.4038L24.3847 22.5577H22.7693C21.8077 22.5577 21.0193 22.1346 20.5962 21.4231C20.1731 20.6923 20.2116 19.8077 20.6924 18.9615L22.7501 15.3846C23.1539 14.6923 24.0385 14.4615 24.7116 14.8461C25.4039 15.25 25.6347 16.1346 25.2501 16.8077L23.6154 19.6731H25.2308C26.1924 19.6731 26.9808 20.0961 27.4039 20.8077C27.827 21.5385 27.7885 22.4231 27.3077 23.2692L25.2501 26.8461C24.9808 27.3077 24.5001 27.5577 24.0001 27.5577Z"
                                fill="#217AE3"
                            />
                            ,
                            <path
                                d="M29.3269 38.9039H18.7307C17.8846 38.9039 16.8077 38.8077 16.0961 38.0769C15.4038 37.3654 15.423 36.4808 15.4423 35.8846V34.1731C10.5961 30.9423 7.40381 25.3269 7.40381 19.9808C7.40381 14.9231 9.67304 10.1923 13.6153 7.01923C17.5577 3.84616 22.7307 2.65385 27.7884 3.76923C32.5961 4.82692 36.75 8.03846 38.9038 12.3654C43.0769 20.7692 39.0577 29.8654 32.6346 34.1923V35.6346C32.6538 36.1923 32.673 37.2115 31.8846 38.0192C31.2884 38.5962 30.4423 38.9039 29.3269 38.9039ZM18.3077 36C18.4038 36 18.5384 36.0192 18.7115 36.0192H29.3269C29.5192 36.0192 29.6538 36 29.7307 35.9808C29.7307 35.9231 29.7307 35.8462 29.7307 35.7885V33.3654C29.7307 32.8654 30 32.3846 30.423 32.1346C36.1153 28.6923 39.8846 20.8269 36.2884 13.6154C34.5192 10.0577 31.0961 7.42308 27.1346 6.55769C22.9423 5.63462 18.6538 6.61539 15.3846 9.25C12.1153 11.8846 10.25 15.7885 10.25 19.9808C10.25 25.3269 13.9423 29.9423 17.5961 32.1538C18.0384 32.4231 18.2884 32.8846 18.2884 33.3846V35.9808C18.3077 35.9808 18.3077 35.9808 18.3077 36Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M30.7309 44.6731C30.5963 44.6731 30.4617 44.6539 30.3271 44.6154C26.1732 43.4231 21.8078 43.4231 17.654 44.6154C16.8847 44.8269 16.0963 44.3846 15.8655 43.6154C15.6347 42.8462 16.0963 42.0577 16.8655 41.8269C21.5194 40.5 26.4617 40.5 31.1155 41.8269C31.8848 42.0385 32.3271 42.8462 32.1155 43.6154C31.9424 44.2692 31.3655 44.6731 30.7309 44.6731Z"
                                fill="#217AE3"
                            />
                        </svg>
                    </span>
                    <span className="block bg-primary bg-opacity-10 w-min mask mask-squircle p-5">
                        <svg
                            width="47"
                            height="47"
                            viewBox="0 0 47 47"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.077 28.3654C20.154 28.3654 17.7886 26 17.7886 23.0769C17.7886 20.1538 20.154 17.7885 23.077 17.7885C26.0001 17.7885 28.3655 20.1538 28.3655 23.0769C28.3655 26 26.0001 28.3654 23.077 28.3654ZM23.077 20.6731C21.7501 20.6731 20.6732 21.75 20.6732 23.0769C20.6732 24.4038 21.7501 25.4808 23.077 25.4808C24.404 25.4808 25.4809 24.4038 25.4809 23.0769C25.4809 21.75 24.404 20.6731 23.077 20.6731Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M38.4621 36.0578C38.1544 36.0578 37.866 35.9616 37.5967 35.7693C36.9621 35.2886 36.8275 34.3847 37.3083 33.7501C39.6352 30.6539 40.866 26.9616 40.866 23.077C40.866 19.1924 39.6352 15.5001 37.3083 12.4039C36.8275 11.7693 36.9621 10.8654 37.5967 10.3847C38.2313 9.90391 39.1352 10.0385 39.616 10.6731C42.3275 14.2693 43.7506 18.5578 43.7506 23.077C43.7506 27.5962 42.3275 31.8847 39.616 35.4809C39.3275 35.8655 38.9044 36.0578 38.4621 36.0578Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M7.69227 36.0578C7.24996 36.0578 6.82687 35.8655 6.53841 35.4809C3.82687 31.8847 2.40381 27.5962 2.40381 23.077C2.40381 18.5578 3.82687 14.2693 6.53841 10.6731C7.01918 10.0385 7.92306 9.90391 8.55768 10.3847C9.19229 10.8654 9.3269 11.7693 8.84613 12.4039C6.51921 15.5001 5.28842 19.1924 5.28842 23.077C5.28842 26.9616 6.51921 30.6539 8.84613 33.7501C9.3269 34.3847 9.19229 35.2886 8.55768 35.7693C8.30768 35.9616 7.99996 36.0578 7.69227 36.0578Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M32.3078 31.4423C32.0001 31.4423 31.7117 31.3462 31.4424 31.1539C30.8078 30.6731 30.6732 29.7692 31.154 29.1346C32.4809 27.3846 33.1732 25.2885 33.1732 23.0769C33.1732 20.8654 32.4809 18.7692 31.154 17.0192C30.6732 16.3846 30.8078 15.4807 31.4424 15C32.077 14.5192 32.9809 14.6539 33.4616 15.2885C35.1539 17.5577 36.0578 20.25 36.0578 23.0769C36.0578 25.9038 35.1539 28.6154 33.4616 30.8654C33.1732 31.25 32.7501 31.4423 32.3078 31.4423Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M13.8462 31.4423C13.4039 31.4423 12.9808 31.25 12.6924 30.8654C11 28.5961 10.0962 25.9038 10.0962 23.0769C10.0962 20.25 11 17.5385 12.6924 15.2885C13.1731 14.6539 14.0769 14.5192 14.7116 15C15.3462 15.4807 15.4808 16.3846 15 17.0192C13.6731 18.7692 12.9808 20.8654 12.9808 23.0769C12.9808 25.2885 13.6731 27.3846 15 29.1346C15.4808 29.7692 15.3462 30.6731 14.7116 31.1539C14.4616 31.3462 14.1539 31.4423 13.8462 31.4423Z"
                                fill="#217AE3"
                            />
                        </svg>
                    </span>
                    <span className="block bg-primary bg-opacity-10 w-min mask mask-squircle p-5">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.76921 19.6731C3.98075 19.6731 3.3269 19.0192 3.3269 18.2308V13.4231C3.3269 7.84615 7.86537 3.32692 13.4231 3.32692H18.2308C19.0192 3.32692 19.6731 3.98077 19.6731 4.76923C19.6731 5.55769 19.0192 6.21153 18.2308 6.21153H13.4231C9.44229 6.21153 6.21152 9.4423 6.21152 13.4231V18.2308C6.21152 19.0192 5.55767 19.6731 4.76921 19.6731Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M43.2308 19.6731C42.4423 19.6731 41.7884 19.0192 41.7884 18.2308V13.4231C41.7884 9.4423 38.5577 6.21153 34.5769 6.21153H29.7692C28.9808 6.21153 28.3269 5.55769 28.3269 4.76923C28.3269 3.98077 28.9808 3.32692 29.7692 3.32692H34.5769C40.1346 3.32692 44.6731 7.84615 44.6731 13.4231V18.2308C44.6731 19.0192 44.0192 19.6731 43.2308 19.6731Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M34.5769 44.6731H31.6923C30.9038 44.6731 30.25 44.0192 30.25 43.2308C30.25 42.4423 30.9038 41.7885 31.6923 41.7885H34.5769C38.5577 41.7885 41.7885 38.5577 41.7885 34.5769V31.6923C41.7885 30.9039 42.4423 30.25 43.2308 30.25C44.0192 30.25 44.6731 30.9039 44.6731 31.6923V34.5769C44.6731 40.1539 40.1346 44.6731 34.5769 44.6731Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M18.2308 44.6731H13.4231C7.86537 44.6731 3.3269 40.1539 3.3269 34.5769V29.7692C3.3269 28.9808 3.98075 28.3269 4.76921 28.3269C5.55767 28.3269 6.21152 28.9808 6.21152 29.7692V34.5769C6.21152 38.5577 9.44229 41.7885 13.4231 41.7885H18.2308C19.0192 41.7885 19.6731 42.4423 19.6731 43.2308C19.6731 44.0192 19.0192 44.6731 18.2308 44.6731Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M17.2693 23.5192C13.827 23.5192 11.0193 20.7115 11.0193 17.2692C11.0193 13.8269 13.827 11.0192 17.2693 11.0192C20.7116 11.0192 23.5193 13.8269 23.5193 17.2692C23.5193 20.7115 20.7116 23.5192 17.2693 23.5192ZM17.2693 13.9039C15.4231 13.9039 13.9039 15.4231 13.9039 17.2692C13.9039 19.1154 15.4231 20.6346 17.2693 20.6346C19.1154 20.6346 20.6347 19.1154 20.6347 17.2692C20.6347 15.4231 19.1154 13.9039 17.2693 13.9039Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M15.3462 36.9808C12.9616 36.9808 11.0193 35.0385 11.0193 32.6539C11.0193 30.2692 12.9616 28.3269 15.3462 28.3269C17.7308 28.3269 19.6731 30.2692 19.6731 32.6539C19.6731 35.0385 17.7308 36.9808 15.3462 36.9808ZM15.3462 31.2115C14.5577 31.2115 13.9039 31.8654 13.9039 32.6539C13.9039 33.4423 14.5577 34.0962 15.3462 34.0962C16.1347 34.0962 16.7885 33.4423 16.7885 32.6539C16.7885 31.8654 16.1347 31.2115 15.3462 31.2115Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M32.6538 19.6731C30.2692 19.6731 28.3269 17.7308 28.3269 15.3462C28.3269 12.9615 30.2692 11.0192 32.6538 11.0192C35.0384 11.0192 36.9808 12.9615 36.9808 15.3462C36.9808 17.7308 35.0384 19.6731 32.6538 19.6731ZM32.6538 13.9039C31.8654 13.9039 31.2115 14.5577 31.2115 15.3462C31.2115 16.1346 31.8654 16.7885 32.6538 16.7885C33.4423 16.7885 34.0961 16.1346 34.0961 15.3462C34.0961 14.5577 33.4423 13.9039 32.6538 13.9039Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M30.7307 36.9808C27.2884 36.9808 24.4807 34.1731 24.4807 30.7308C24.4807 27.2885 27.2884 24.4808 30.7307 24.4808C34.173 24.4808 36.9807 27.2885 36.9807 30.7308C36.9807 34.1731 34.173 36.9808 30.7307 36.9808ZM30.7307 27.3654C28.8846 27.3654 27.3653 28.8846 27.3653 30.7308C27.3653 32.5769 28.8846 34.0962 30.7307 34.0962C32.5769 34.0962 34.0961 32.5769 34.0961 30.7308C34.0961 28.8846 32.5769 27.3654 30.7307 27.3654Z"
                                fill="#217AE3"
                            />
                        </svg>
                    </span>
                </div>
                <div className="flex justify-around mt-5">
                    <span className="block bg-primary bg-opacity-10 w-min mask mask-squircle p-5">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M24 32.3269C19.4039 32.3269 15.6731 28.5962 15.6731 24C15.6731 19.4038 19.4039 15.6731 24 15.6731C28.5962 15.6731 32.3269 19.4038 32.3269 24C32.3269 28.5962 28.5962 32.3269 24 32.3269ZM24 18.5577C21 18.5577 18.5577 21 18.5577 24C18.5577 27 21 29.4423 24 29.4423C27 29.4423 29.4423 27 29.4423 24C29.4423 21 27 18.5577 24 18.5577Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M24 41.3462C16.7693 41.3462 9.94235 37.1154 5.25004 29.7692C3.21158 26.5962 3.21158 21.4231 5.25004 18.2308C9.96158 10.8846 16.7885 6.65384 24 6.65384C31.2116 6.65384 38.0385 10.8846 42.7308 18.2308C44.7693 21.4038 44.7693 26.5769 42.7308 29.7692C38.0385 37.1154 31.2116 41.3462 24 41.3462ZM24 9.53846C17.7885 9.53846 11.8462 13.2692 7.69235 19.7885C6.25004 22.0385 6.25004 25.9615 7.69235 28.2115C11.8462 34.7308 17.7885 38.4615 24 38.4615C30.2116 38.4615 36.1539 34.7308 40.3077 28.2115C41.75 25.9615 41.75 22.0385 40.3077 19.7885C36.1539 13.2692 30.2116 9.53846 24 9.53846Z"
                                fill="#217AE3"
                            />
                        </svg>
                    </span>
                    <span className="block bg-primary bg-opacity-10 w-min mask mask-squircle p-5">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.9998 44.6732C23.5382 44.6732 23.0767 44.6155 22.6344 44.4809C12.6536 41.7309 5.42285 32.4039 5.42285 22.2885V13.8462C5.42285 11.6924 6.98056 9.36553 8.98056 8.53861L19.6921 4.15394C22.4806 3.01932 25.5382 3.01932 28.3075 4.15394L39.019 8.53861C41.019 9.36553 42.5767 11.6924 42.5767 13.8462V22.2885C42.5767 32.3847 35.3267 41.7117 25.3652 44.4809C24.9228 44.6155 24.4613 44.6732 23.9998 44.6732ZM23.9998 6.21165C22.9036 6.21165 21.8267 6.42322 20.7882 6.84629L10.0767 11.2308C9.15365 11.6155 8.30747 12.8655 8.30747 13.8655V22.3078C8.30747 31.1347 14.6536 39.2886 23.4036 41.7117C23.7882 41.8271 24.2113 41.8271 24.5959 41.7117C33.3459 39.2886 39.6921 31.1347 39.6921 22.3078V13.8655C39.6921 12.8655 38.8459 11.6155 37.9228 11.2308L27.2113 6.84629C26.1729 6.42322 25.0959 6.21165 23.9998 6.21165Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M24.0001 26.4038C21.0771 26.4038 18.7117 24.0385 18.7117 21.1154C18.7117 18.1923 21.0771 15.8269 24.0001 15.8269C26.9232 15.8269 29.2886 18.1923 29.2886 21.1154C29.2886 24.0385 26.9232 26.4038 24.0001 26.4038ZM24.0001 18.7115C22.6732 18.7115 21.5963 19.7885 21.5963 21.1154C21.5963 22.4423 22.6732 23.5192 24.0001 23.5192C25.3271 23.5192 26.404 22.4423 26.404 21.1154C26.404 19.7885 25.3271 18.7115 24.0001 18.7115Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M23.9999 32.1731C23.2115 32.1731 22.5576 31.5192 22.5576 30.7308V24.9615C22.5576 24.1731 23.2115 23.5192 23.9999 23.5192C24.7884 23.5192 25.4422 24.1731 25.4422 24.9615V30.7308C25.4422 31.5192 24.7884 32.1731 23.9999 32.1731Z"
                                fill="#217AE3"
                            />
                        </svg>
                    </span>
                    <span className="block bg-primary bg-opacity-10 w-min mask mask-squircle p-5">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M43.2308 44.6731H4.76921C3.98075 44.6731 3.3269 44.0192 3.3269 43.2308C3.3269 42.4423 3.98075 41.7885 4.76921 41.7885H43.2308C44.0192 41.7885 44.6731 42.4423 44.6731 43.2308C44.6731 44.0192 44.0192 44.6731 43.2308 44.6731Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M8.03891 43.2307H5.1543L5.25045 20.0961C5.25045 18.4615 6.00045 16.9423 7.28891 15.9423L20.7505 5.46148C22.6543 3.98071 25.3274 3.98071 27.2504 5.46148L40.712 15.923C41.9812 16.923 42.7505 18.4807 42.7505 20.0961V43.2307H39.8658V20.1153C39.8658 19.3846 39.5197 18.673 38.9428 18.2115L25.4812 7.74995C24.6158 7.07687 23.4043 7.07687 22.5197 7.74995L9.05814 18.2307C8.48122 18.673 8.13506 19.3846 8.13506 20.1153L8.03891 43.2307Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M28.8077 44.6731H19.1923C18.4038 44.6731 17.75 44.0192 17.75 43.2308V36.5C17.75 34.1154 19.6923 32.1731 22.0769 32.1731H25.9231C28.3077 32.1731 30.25 34.1154 30.25 36.5V43.2308C30.25 44.0192 29.5962 44.6731 28.8077 44.6731ZM20.6346 41.7885H27.3654V36.5C27.3654 35.7115 26.7115 35.0577 25.9231 35.0577H22.0769C21.2885 35.0577 20.6346 35.7115 20.6346 36.5V41.7885Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M19.1923 28.8077H15.3461C13.4999 28.8077 11.9807 27.2885 11.9807 25.4423V22.5577C11.9807 20.7115 13.4999 19.1923 15.3461 19.1923H19.1923C21.0384 19.1923 22.5576 20.7115 22.5576 22.5577V25.4423C22.5576 27.2885 21.0384 28.8077 19.1923 28.8077ZM15.3461 22.0769C15.0769 22.0769 14.8653 22.2885 14.8653 22.5577V25.4423C14.8653 25.7115 15.0769 25.9231 15.3461 25.9231H19.1923C19.4615 25.9231 19.673 25.7115 19.673 25.4423V22.5577C19.673 22.2885 19.4615 22.0769 19.1923 22.0769H15.3461Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M32.6539 28.8077H28.8078C26.9616 28.8077 25.4424 27.2885 25.4424 25.4423V22.5577C25.4424 20.7115 26.9616 19.1923 28.8078 19.1923H32.6539C34.5001 19.1923 36.0193 20.7115 36.0193 22.5577V25.4423C36.0193 27.2885 34.5001 28.8077 32.6539 28.8077ZM28.8078 22.0769C28.5385 22.0769 28.327 22.2885 28.327 22.5577V25.4423C28.327 25.7115 28.5385 25.9231 28.8078 25.9231H32.6539C32.9232 25.9231 33.1347 25.7115 33.1347 25.4423V22.5577C33.1347 22.2885 32.9232 22.0769 32.6539 22.0769H28.8078Z"
                                fill="#217AE3"
                            />
                            <path
                                d="M37.4616 15.8269C36.6731 15.8269 36.0193 15.1923 36.0193 14.4039L35.9808 10.0577H28.9616C28.1731 10.0577 27.5193 9.40385 27.5193 8.61538C27.5193 7.82692 28.1731 7.17308 28.9616 7.17308H37.4231C38.2116 7.17308 38.8654 7.80767 38.8654 8.59613L38.9231 14.3654C38.9039 15.1731 38.2693 15.8269 37.4616 15.8269C37.4808 15.8269 37.4616 15.8269 37.4616 15.8269Z"
                                fill="#217AE3"
                            />
                        </svg>
                    </span>
                </div>
            </article>
            <a
                href="https://form.jotform.com/201476299839067"
                rel="noopener noreferrer"
                target="_blank"
                className="flex border-0 w-max items-center bg-primary hover:bg-primary hover:bg-opacity-50 font-bold px-5 py-2 rounded-box mx-auto mt-10 btn "
            >
                Book Appointment
                <span className="ml-4">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 7.1875C9.4875 7.1875 9.0625 6.7625 9.0625 6.25V2.5C9.0625 1.9875 9.4875 1.5625 10 1.5625C10.5125 1.5625 10.9375 1.9875 10.9375 2.5V6.25C10.9375 6.7625 10.5125 7.1875 10 7.1875Z"
                            fill="white"
                        />
                        <path
                            d="M20 7.1875C19.4875 7.1875 19.0625 6.7625 19.0625 6.25V2.5C19.0625 1.9875 19.4875 1.5625 20 1.5625C20.5125 1.5625 20.9375 1.9875 20.9375 2.5V6.25C20.9375 6.7625 20.5125 7.1875 20 7.1875Z"
                            fill="white"
                        />
                        <path
                            d="M10.625 18.125C10.4625 18.125 10.3 18.1 10.15 18.025C9.99999 17.9625 9.86249 17.875 9.73749 17.7625C9.51249 17.525 9.375 17.2 9.375 16.875C9.375 16.7125 9.4125 16.55 9.475 16.4C9.5375 16.25 9.62499 16.1125 9.73749 15.9875C9.86249 15.875 9.99999 15.7875 10.15 15.725C10.6 15.5375 11.1625 15.6375 11.5125 15.9875C11.625 16.1125 11.7125 16.25 11.775 16.4C11.8375 16.55 11.875 16.7125 11.875 16.875C11.875 17.2 11.7375 17.525 11.5125 17.7625C11.275 17.9875 10.95 18.125 10.625 18.125Z"
                            fill="white"
                        />
                        <path
                            d="M15 18.125C14.675 18.125 14.35 17.9875 14.1125 17.7625C14 17.6375 13.9125 17.5 13.85 17.35C13.7875 17.2 13.75 17.0375 13.75 16.875C13.75 16.55 13.8875 16.225 14.1125 15.9875C14.4625 15.6375 15.0125 15.525 15.475 15.725C15.625 15.7875 15.7625 15.875 15.8875 15.9875C16.1125 16.225 16.25 16.55 16.25 16.875C16.25 17.0375 16.225 17.2 16.15 17.35C16.0875 17.5 16 17.6375 15.8875 17.7625C15.7625 17.875 15.625 17.9625 15.475 18.025C15.325 18.1 15.1625 18.125 15 18.125Z"
                            fill="white"
                        />
                        <path
                            d="M10.625 22.5C10.4625 22.5 10.3 22.4625 10.15 22.4C9.99999 22.3375 9.86249 22.25 9.73749 22.1375C9.51249 21.9 9.375 21.5875 9.375 21.25C9.375 21.0875 9.4125 20.925 9.475 20.775C9.5375 20.6125 9.62499 20.4875 9.73749 20.3625C9.86249 20.25 9.99999 20.1625 10.15 20.1C10.6 19.9 11.1625 20.0125 11.5125 20.3625C11.625 20.4875 11.7125 20.6125 11.775 20.775C11.8375 20.925 11.875 21.0875 11.875 21.25C11.875 21.5875 11.7375 21.9 11.5125 22.1375C11.275 22.3625 10.95 22.5 10.625 22.5Z"
                            fill="white"
                        />
                        <path
                            d="M25.625 12.3H4.375C3.8625 12.3 3.4375 11.875 3.4375 11.3625C3.4375 10.85 3.8625 10.425 4.375 10.425H25.625C26.1375 10.425 26.5625 10.85 26.5625 11.3625C26.5625 11.875 26.1375 12.3 25.625 12.3Z"
                            fill="white"
                        />
                        <path
                            d="M22.5 29.6875C19.225 29.6875 16.5625 27.025 16.5625 23.75C16.5625 20.475 19.225 17.8125 22.5 17.8125C25.775 17.8125 28.4375 20.475 28.4375 23.75C28.4375 27.025 25.775 29.6875 22.5 29.6875ZM22.5 19.6875C20.2625 19.6875 18.4375 21.5125 18.4375 23.75C18.4375 25.9875 20.2625 27.8125 22.5 27.8125C24.7375 27.8125 26.5625 25.9875 26.5625 23.75C26.5625 21.5125 24.7375 19.6875 22.5 19.6875Z"
                            fill="white"
                        />
                        <path
                            d="M24.3625 24.7499H20.625C20.1125 24.7499 19.6875 24.3249 19.6875 23.8124C19.6875 23.2999 20.1125 22.8749 20.625 22.8749H24.3625C24.875 22.8749 25.3 23.2999 25.3 23.8124C25.3 24.3249 24.8875 24.7499 24.3625 24.7499Z"
                            fill="white"
                        />
                        <path
                            d="M22.5 26.6624C21.9875 26.6624 21.5625 26.2374 21.5625 25.7249V21.9875C21.5625 21.475 21.9875 21.05 22.5 21.05C23.0125 21.05 23.4375 21.475 23.4375 21.9875V25.7249C23.4375 26.2374 23.0125 26.6624 22.5 26.6624Z"
                            fill="white"
                        />
                        <path
                            d="M19.2125 28.4375H10C5.4375 28.4375 2.8125 25.8125 2.8125 21.25V10.625C2.8125 6.0625 5.4375 3.4375 10 3.4375H20C24.5625 3.4375 27.1875 6.0625 27.1875 10.625V20.45C27.1875 20.8375 26.95 21.1875 26.575 21.325C26.2125 21.4625 25.8 21.3625 25.5375 21.0625C24.7625 20.1875 23.65 19.6875 22.4875 19.6875C20.25 19.6875 18.425 21.5125 18.425 23.75C18.425 24.4875 18.625 25.2125 19.0125 25.8375C19.225 26.2125 19.5 26.525 19.8 26.7875C20.1 27.0375 20.2125 27.45 20.075 27.825C19.9625 28.1875 19.6125 28.4375 19.2125 28.4375ZM10 5.3125C6.425 5.3125 4.6875 7.05 4.6875 10.625V21.25C4.6875 24.825 6.425 26.5625 10 26.5625H17.275C16.8125 25.7125 16.5625 24.75 16.5625 23.75C16.5625 20.475 19.225 17.8125 22.5 17.8125C23.4875 17.8125 24.4625 18.0625 25.3125 18.525V10.625C25.3125 7.05 23.575 5.3125 20 5.3125H10Z"
                            fill="white"
                        />
                    </svg>
                </span>
            </a>
        </section>
    );
};

const Nav: React.FC = () => {
    return (
        <nav className="flex justify-around items-center my-8 ">
            <span className="text-primary font-bold text-xl ">
                Skylark Automations
            </span>
            <span className=" ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                </svg>
            </span>
        </nav>
    );
};

const Testimonail: React.FC<{
    text: string;
    by: string;
}> = ({ text, by }) => {
    return (
        <article className="w-[80vw] pb-8 text-center flex flex-col carousel-item bg-primary bg-opacity-10 p-4 rounded-badge">
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.4834 19.3833H5.66671C5.80004 11.6 7.33337 10.3166 12.1167 7.48328C12.6667 7.14995 12.85 6.44996 12.5167 5.88329C12.1833 5.33329 11.4833 5.14998 10.9166 5.48331C5.28331 8.81664 3.31665 10.8499 3.31665 20.5499V29.5333C3.31665 32.3833 5.63336 34.6833 8.4667 34.6833H13.4667C16.4 34.6833 18.6166 32.4666 18.6166 29.5333V24.5333C18.6333 21.6 16.4167 19.3833 13.4834 19.3833Z"
                    fill="#217AE3"
                />
                <path
                    opacity="0.4"
                    d="M31.5167 19.3833H23.7001C23.8334 11.6 25.3668 10.3166 30.1501 7.48328C30.7001 7.14995 30.8835 6.44996 30.5501 5.88329C30.2168 5.33329 29.5168 5.14998 28.9501 5.48331C23.3168 8.81664 21.3501 10.8499 21.3501 20.5499V29.5333C21.3501 32.3833 23.6668 34.6833 26.5001 34.6833H31.5001C34.4335 34.6833 36.6501 32.4666 36.6501 29.5333V24.5333C36.6668 21.6 34.4501 19.3833 31.5167 19.3833Z"
                    fill="#217AE3"
                />
            </svg>

            <p className="mx-4 font-semibold mt-2">{text}</p>
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto"
            >
                <path
                    d="M26.5167 20.6166H34.3334C34.2001 28.4 32.6667 29.6833 27.8834 32.5167C27.3334 32.85 27.1501 33.5499 27.4834 34.1166C27.8167 34.6666 28.5167 34.85 29.0834 34.5167C34.7167 31.1834 36.6834 29.15 36.6834 19.45V10.4667C36.6834 7.6167 34.3667 5.31665 31.5334 5.31665H26.5334C23.6001 5.31665 21.3834 7.53336 21.3834 10.4667V15.4667C21.3667 18.4 23.5834 20.6166 26.5167 20.6166Z"
                    fill="#217AE3"
                />
                <path
                    opacity="0.4"
                    d="M8.48328 20.6166H16.2999C16.1666 28.4 14.6333 29.6833 9.84995 32.5167C9.29995 32.85 9.11661 33.5499 9.44995 34.1166C9.78328 34.6666 10.4833 34.85 11.0499 34.5167C16.6833 31.1834 18.6499 29.15 18.6499 19.45V10.4667C18.6499 7.6167 16.3333 5.31665 13.4999 5.31665H8.49995C5.56661 5.31665 3.34995 7.53336 3.34995 10.4667V15.4667C3.33328 18.4 5.54995 20.6166 8.48328 20.6166Z"
                    fill="#217AE3"
                />
            </svg>
            <p>{by}</p>
        </article>
    );
};

export default Home;
