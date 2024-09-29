"use client";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

interface faqdata {
    heading: string;
    subheading: string;
}

const faqdata: faqdata[] = [
    {
        heading: "1. What is  Blockchain?",
        subheading:
            "Blockchain is a decentralized, digital ledger that records transactions across a network of computers. It allows data to be stored in a secure, transparent, and tamper-proof way by linking blocks of data in chronological order.",
    },
    {
        heading: "2. Which industries can use PharmaLedger?",
        subheading:
            "PharmaLedger is designed for a wide range of industries, including pharmaceuticals, agriculture, logistics, manufacturing, and more. Its flexible architecture allows it to be customized to meet the unique traceability needs of different sectors.",
    },
    {
        heading: "3. How do I get started with OmniLedger??",
        subheading:
            "To get started, simply sign up for an account on our platform. Once registered, you can begin uploading product data, verifying transactions, and tracking your supply chain with real-time visibility and security",
    },
];

const Faq = () => {
    return (
        <div className="my-20 px-6" id="faq-section">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">
                Frequently Asked And Question
            </h3>
            <p className="text-center lg:text-lg font-normal text-bluish"></p>

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">
                            {faqdata.map((items, i) => (
                                <div
                                    className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5"
                                    key={i}
                                >
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${
                                                            open
                                                                ? "rotate-180 transform"
                                                                : ""
                                                        } h-5 w-5 text-purple-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">
                                                    {items.subheading}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="mt-32">
                        <Image
                            src={"/images/Faq/faq.svg"}
                            alt="faq-image"
                            width={941}
                            height={379}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
