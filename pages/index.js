import Image from "next/image";
import Slider from "../components/slider";
import Link from "next/link";
import Clients from "../components/client";
import Testimonials from "../components/testimonial";

export default function Home() {
  const rightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <>
      <section>
        <Slider />
      </section>
      <section className="md:pt-24 md:pb-32 text-zinc-90 bg-orange-50">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl tracking-wide font-light text-green-900">
            OUR OFFERINGS
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-4 pt-4 md:pt-8">
            <Link href="/services#turnkey-projects">
              <div className="w-auto relative">
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/wtwedo5.jpg"
                    className="absolute inset-0 object-cover"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-50 w-full p-4 ">
                    <h1 className="text-4xl tracking-wide drop-shadow-md font-semibold  text-white z-10 w-full">
                      KNOWLEDGE SERVICES
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services#product-development">
              <div className="w-auto relative">
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/wtwedo5.jpg"
                    className="absolute inset-0 object-cover"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-50 w-full p-4">
                    <h1 className="text-4xl tracking-wide drop-shadow-md font-semibold  text-white z-10 w-full">
                      STAFFING SERVICES
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services#contract-manufacturing">
              <div className="w-auto relative">
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/wtwedo5.jpg"
                    className="absolute inset-0 object-cover"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-50 w-full p-4">
                    <h1 className="text-4xl tracking-wide drop-shadow-md font-semibold  text-white z-10 w-full">
                      It services
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* clints data */}
      <section>
        <Clients />
      </section>

      <section className="text-black bg-yellow-50 body-font overflow-hidden lg:py-12">
        <div className="container bg-white px-5  py-10 mx-auto lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <div className="relative border h-[650px]  w-full md:w-1/3 ">
              <Image
                alt="ecommerce"
                objectFit="cover"
                layout="fill"
                src="/wtwedo5.jpg"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
              <h1 className="text-black text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>

              <p className="mt-4 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                adipisci beatae expedita iusto alias nostrum ipsam asperiores
                labore commodi delectus aut, vitae maxime similique accusantium
                voluptate. Rem reprehenderit, veritatis vel vitae delectus
                ullam. Odio veritatis, voluptatum natus cumque doloribus
                eligendi neque dolorum ea reiciendis sequi, nobis, inventore
                alias iste nam optio excepturi? Voluptas cumque obcaecati magnam
                cupiditate. Unde laboriosam distinctio eaque adipisci ut
                exercitationem amet tempora, cupiditate aspernatur hic
                doloremque non, dolorem debitis autem impedit explicabo optio
                neque itaque? Tempore numquam in, quidem tempora dignissimos
                assumenda blanditiis a repellat fuga voluptas mollitia labore
                quisquam est sit maiores fugit reprehenderit ipsa?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* achivements */}
      <section className="text-black ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
              our achivement
            </h1>
          </div>
          <div className="flex flex-wrap justify-center -m-4 text-center">
            <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 border-red-600 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">our clients</p>
              </div>
            </div>
            <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 border-red-600 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.3K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 border-red-600 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  74
                </h2>
                <p className="leading-relaxed">Files</p>
              </div>
            </div>
            <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 border-red-600 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  46
                </h2>
                <p className="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-100">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-black">
            Knowledge as a service
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 rounded-full bg-yellow-300"></span>
            <span className="inline-block w-3 h-1 ml-1 rounded-full bg-yellow-500"></span>
            <span className="inline-block w-1 h-1 ml-1 rounded-full bg-yellow-500"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2">
              <div className="space-y-3">
                <h1 className="text-2xl font-semibold capitalize text-black">
                  New Components
                </h1>

                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl font-semibold capitalize text-black">
                  New Components
                </h1>

                <p className=" text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl font-semibold text-black capitalize ">
                  New Components
                </h1>

                <p className="text-black ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl font-semibold text-black capitalize ">
                  New Components
                </h1>

                <p className="text-black ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <Image
                className=" flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] "
                src={"/profile.jpg"}
                width={480}
                height={480}
                alt=""
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-zinc-200">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-black capitalize lg:text-4xl ">
            Talent as a service
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 rounded-full bg-orange-400"></span>
            <span className="inline-block w-3 h-1 ml-1 rounded-full bg-orange-400"></span>
            <span className="inline-block w-1 h-1 ml-1 rounded-full bg-orange-400"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <Image
                className=" flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem]"
                src={"/profile.jpg"}
                width={480}
                height={480}
                alt=""
              ></Image>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2">
              <div className="space-y-3">
                <h1 className="text-2xl font-semibold text-black capitalize ">
                  New Components
                </h1>

                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl font-semiboldtext-black capitalize ">
                  New Components
                </h1>

                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl font-semibold text-black capitalize ">
                  New Components
                </h1>

                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl font-semibold  capitalize ">
                  New Components
                </h1>

                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Testimonials />
      </section>
      {/* blogs */}
      <section className="text-black bg-slate-200 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-black tracking-widest font-medium title-font mb-1">
              ROOF PARTY POLAROID
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
              Blogs
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              havent heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex md:flex-row  flex-col">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 h-full p-6 rounded-lg">
                <div className="relative w-full h-52">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src="/wtwedo5.jpg"
                    alt="content"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  What is ai ml block chain?
                </h2>
                <p className="leading-relaxed text-base">
                  Building solutions using artificial intelligence, machine
                  learning and blockchain technologies. Artificial intelligence
                  and machine learning can automate important, but manual and
                  time-consuming tasks, allowing employees to focus on
                  higher-value work.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 h-full p-6 rounded-lg">
                <div className="relative w-full h-52">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src="/wtwedo5.jpg"
                    alt="content"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  is ml used in block chain
                </h2>
                <p className="leading-relaxed text-base">
                  Machine learning models can use the data stored in the
                  blockchain network for making the prediction or for the
                  analysis of data purposes.Blockchain technology has been
                  trending in recent years. This technology allows a secure way
                  for individuals to deal directly with each other through a
                  highly secure and decentralized system, without an
                  intermediary. In addition to its own capabilities, machine
                  learning can help in handling many limitations that
                  blockchain-based systems have.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 h-full p-6 rounded-lg">
                <div className="relative w-full h-52">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src="/wtwedo5.jpg"
                    alt="content"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  how is ml related to block chain
                </h2>
                <p className="leading-relaxed text-base">
                  using AI and Big Data in Blockchain Technology: A step closer
                  to the futureThere has been a number of changes in the IT
                  world recently. One of the most talked-about collaborations
                  that can possibly change the entire landscape of the online
                  world is the usage of AI technology in blockchain technology.
                  Additionally, Big Data can contribute to this change quite
                  significantly......
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 h-full p-6 rounded-lg">
                <div className="relative w-full h-52">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src="/wtwedo5.jpg"
                    alt="content"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  What is ai ml block chain?
                </h2>
                <p className="leading-relaxed text-base">
                  Building solutions using artificial intelligence, machine
                  learning and blockchain technologies. Artificial intelligence
                  and machine learning can automate important, but manual and
                  time-consuming tasks, allowing employees to focus on
                  higher-value work.
                </p>
              </div>
            </div>
          </div>
          <Link href="/blogs">
            <button className="flex mx-auto  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-5">
              SEE MORE
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
