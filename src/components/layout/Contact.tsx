"use client";
import React from "react";
import SocialLink from "../ui/SocialLink";
import Link from "next/link";
import ScrollAnimated from "./ScrollAnimated";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Contact() {
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  return (
    <section id="Contact" className="bg-neutral-900 py-section">
      <ScrollAnimated className="container container--sm">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h2 className="text-center lg:text-left text-neutral-100 heading-second">
              <span className="text-primary-500">Contact us</span> <br /> for
              more info
            </h2>

            <address className="flex flex-col items-center mt-6 space-y-8 lg:items-start lg:items-left lg:mt-8">
              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden w-6 h-6 lg:block text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <div className="flex flex-col gap-2 text-center lg:text-left">
                  {/* <span className="truncate w-72 text-neutral-400">
                    20 Farm Rd,
                  </span> */}
                  <span className="truncate w-72 text-neutral-400">
                    Sydney
                  </span>
                  <span className="truncate w-72 text-neutral-400">
                    NSW, Australia
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-primary-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <Link
                  className="truncate text-neutral-400"
                  href={"tel:1234567890"}
                >
                  (+61) 0415 124 111
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-primary-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <Link
                  className="truncate w-fit text-neutral-400"
                  href={"mailto:spanthai@yahoo.com"}
                >
                  spanthai@yahoo.com
                </Link>
              </div>
            </address>

            <section className="mt-6 ">
              <p className="mb-2 text-center lg:text-left text-neutral-300">
                Follow us
              </p>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <SocialLink variant="facebook" url="https://www.facebook.com/spanthai/" />
                <SocialLink variant="instagram" url="https://www.instagram.com/spanthai_" />
                {/* <SocialLink variant="twitter" url="https://twitter.com/" /> */}
              </div>
            </section>
          </div>

          {/* {!isMobile && (
            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <iframe
                className="w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5990.566373508373!2d14.543439619481877!3d53.42631447644446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa093800d3a759%3A0xa95adc4e5f8ac4f3!2sSzczecin!5e0!3m2!1spl!2spl!4v1705360290393!5m2!1spl!2spl"
                width="800"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )} */}
        </div>
      </ScrollAnimated>
    </section>
  );
}
