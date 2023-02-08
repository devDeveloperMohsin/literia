/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";
import PageTitle from "../../components/PageTitle";

export default function Home() {
  const breadCrumbs = {
    Blogs: "",
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page Title */}
      <PageTitle breadCrumbs={breadCrumbs} />
      {/* End Page Title */}

      {/* Blogs */}
      <section className="container py-24 mx-auto max-w-[1200px]">
        {[1, 1, 1, 1].map((blog, index) => (
          <div className="flex justify-center" key={index}>
            <div className="flex flex-col justify-center">
              <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center">
                <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full overflow-hidden">
                      <Image
                        src="https://source.unsplash.com/700x350/?city"
                        alt=""
                        height={300}
                        width={500}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="md:w-2/3 m-6">
                      <div className="flex text-gray-500 text-sm">
                        <Link href="/" className="m-1 font-bold hover:text-red-500">Entertainment:</Link>
                        <div className="m-1">31 March, 2023</div>
                      </div>
                      <Link
                        href="/"
                        className="font-bold text-black text-xl mt-2 hover:text-indigo-500"
                      >
                        The 8 Best City Lights In The World! The 8 Best City Lights In The World!
                      </Link>
                      <div className="text-sm text-gray-500 mt-4 mt-2">
                        There's something about city lights that make them so
                        captivating and romantic. Maybe it's because they remind
                        us of all the possibilities that exist in the world, or
                        maybe it's because they're just so darn pretty to look
                        at. No matter what the reason is, there's no denying
                        that city lights are some of the most beautiful things
                        in the world.
                      </div>
                      <Link href="/" className="text-indigo-500 mt-2 text-sm flex items-center">Read More <FiChevronsRight className="-mb-1 ml-1"/> </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* End Blogs */}
    </>
  );
}