import {type NextPage} from "next";
import Link from "next/link";
import {IoChevronDownOutline} from "@react-icons/all-files/io5/IoChevronDownOutline";
import {HiOutlinePlus} from "@react-icons/all-files/hi/HiOutlinePlus";

import {FaEquals} from "@react-icons/all-files/fa/FaEquals";
import Underline from "../svg/Underline";
import CvSkeleton from "../components/CvSkeleton";
import PositionSkeleton from "../components/PostionSkeleton";
import CoverSkeleton from "../components/CoverSkeleton";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <>
            <main className="min-h-screen bg-white text-black">
                <Header/>
                <div className={"bg-secondary-700 py-16 text-white"}>
                    <div
                        className={
                            "m-auto flex max-w-3xl flex-col items-center justify-center gap-10 px-4"
                        }
                    >
                        <h1 className={"text-center text-3xl font-bold md:text-5xl"}>
              <span className={"relative"}>
                A personalized
                <Underline
                    className={
                        "absolute right-0 top-6 w-52 fill-primary-600 md:top-10 md:w-80"
                    }
                />
              </span>{" "}
                            résumé everytime
                        </h1>
                        <h3 className={"text-center text-xl"}>
                            The ultimate app designed to elevate your job application game.
                            Empowers you to create personalized résumés and cover letters{" "}
                            <span
                                className={
                                    "relative z-10 whitespace-nowrap bg-transparent px-1 font-bold text-black"
                                }
                            >
                <div
                    className={"absolute inset-0 -z-10 -rotate-1 bg-green-400"}
                />
                for each specific position
              </span>{" "}
                            you apply to.
                        </h3>
                        <Link
                            href={"https://app.tailoredcv.app"}
                            className={
                                "btn-primary text-lg"
                            }
                        >
                            Start now
                        </Link>
                    </div>
                </div>
                <section className={"m-auto max-w-7xl p-4 py-16"}>
                    <h2 className={"mb-4 text-center  text-3xl font-bold md:text-4xl"}>
                        Effortlessly frame your profile for the role.
                    </h2>
                    <div
                        className={
                            "mb-4 flex flex-col items-center justify-center gap-4 lg:flex-row"
                        }
                    >
                        <div className={"flex items-center gap-2"}>
                            <div
                                className={
                                    "h-fit w-fit rounded-lg border-2 border-solid border-secondary-600 px-1 pb-1"
                                }
                            >
                                <p className={"mb-2 font-bold text-secondary-600"}>One CV</p>
                                <CvSkeleton name={"John Doe"}/>
                            </div>
                            <HiOutlinePlus/>
                            <div
                                className={
                                    "w-fit rounded-lg border-2 border-solid border-primary-600 px-1 pb-1"
                                }
                            >
                                <p className={"mb-2 font-bold text-primary-600"}>
                                    Any Position
                                </p>
                                <PositionSkeleton name={"Software Engineer - FAANG"}/>
                            </div>
                        </div>
                        <FaEquals/>
                        <div
                            className={
                                " w-fit rounded-lg border-2 border-solid  border-secondary-600 px-1 pb-1"
                            }
                        >
                            <p className={"mb-2 font-bold text-secondary-600"}>
                                Tailored Application
                            </p>
                            <div className={"flex gap-4"}>
                                <CvSkeleton name={"John Doe at FAANG"}/>
                                <CoverSkeleton name={"Cover Letter FAANG"}/>
                            </div>
                        </div>
                    </div>

                    <p className={"mb-2 text-center text-base"}>
                        {" "}
                        Gone are the days of manually customizing your résumé and struggling
                        to highlight the most relevant skills and experiences for a
                        particular job.
                    </p>
                    <p className={"text-center text-base"}>
                        {" "}
                        With the help of Chat-GPT we analyze your background and generate a
                        custom résumé and cover letter, emphasizing relevant aspects.
                        Present yourself as an ideal candidate with optimized content,
                        streamlined structure, and enhanced readability for a polished final
                        product.
                    </p>
                </section>
                <section className={"bg-secondary-50 py-16"}>
                    <div
                        className={
                            "m-auto flex max-w-7xl flex-col flex-wrap gap-4 px-4 md:flex-row"
                        }
                    >
                        <div className={"flex flex-1 flex-col gap-4"}>
                            <div className={"relative w-fit"}>
                                <h2 className={"relative z-10 text-3xl font-bold"}>
                                    Your past
                                </h2>
                                <div
                                    className={
                                        "absolute bottom-0 right-0 h-1 w-20 -rotate-2 rounded-full bg-primary-500"
                                    }
                                />
                            </div>
                            <h3 className={"text-xl font-bold"}>
                                Tell us about you and your experiences
                            </h3>
                            <p className={"text-base"}>
                                To ensure the utmost accuracy and effectiveness, we request that
                                you provide us with a detailed, long-form résumé. This
                                comprehensive document allows our app to fully analyze your
                                professional journey, skills, and achievements. By having access
                                to a comprehensive overview of your background, we then can
                                tailor your résumé and cover letter to perfectly match your
                                qualifications with the position you are targeting.
                            </p>
                        </div>

                        <div
                            className={
                                "flex max-h-[350px] flex-1 flex-col gap-4 overflow-hidden rounded-2xl bg-gray-50 p-4 shadow-xl"
                            }
                        >
                            <div
                                className={
                                    "flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm "
                                }
                            >
                                <h3 className={"text-lg font-bold text-primary-600"}>
                                    Work experience
                                </h3>
                                <div className={"relative rounded-xl bg-gray-50 p-4 "}>
                                    <p className={"mb-4 text-base font-bold"}>
                                        Software Intern - Apple
                                    </p>
                                    <p className={"text-sm "}>2012-2014</p>
                                    <div
                                        className={
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                        }
                                    >
                                        <IoChevronDownOutline className={"h-6 w-6"}/>
                                    </div>
                                </div>
                                <div className={"relative rounded-xl bg-gray-50 p-4 "}>
                                    <p className={"mb-4 text-base font-bold"}>
                                        Senior Software Architect - Netflix
                                    </p>
                                    <p className={"text-sm "}>2014-2020</p>
                                    <div
                                        className={
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                        }
                                    >
                                        <IoChevronDownOutline className={"h-6 w-6"}/>
                                    </div>
                                </div>
                            </div>
                            <div className={"rounded-2xl bg-white p-4 shadow-sm"}>
                                <h3 className={"text-lg font-bold text-primary-600"}>
                                    Education
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={"py-16 "}>
                    <div
                        className={
                            "m-auto flex max-w-7xl flex-col-reverse flex-wrap gap-4 px-4 md:flex-row"
                        }
                    >
                        <div className={"flex-1 relative h-96"}>

                            <Image width={1201} height={779} src={"/position.png"} alt={"Position screenshot"}
                                   className={"w-full h-full"}/>
                        </div>
                        <div className={"flex flex-1 flex-col gap-4"}>
                            <div className={"relative w-fit"}>
                                <h2 className={"relative z-10 text-3xl font-bold"}>
                                    The position
                                </h2>
                                <div
                                    className={
                                        "absolute bottom-0 right-2 h-1 w-40 rotate-3 rounded-full bg-primary-500"
                                    }
                                />
                            </div>
                            <p>
                                Provide us with the position description, including the
                                requirements and any additional nice to have qualifications
                            </p>
                        </div>
                    </div>
                </section>
                <section className={"bg-secondary-50 py-16"}>
                    <div className={"m-auto flex flex-col max-w-7xl gap-4 px-4"}>
                        <div className={"flex flex-col gap-4 "}>
                            <div className={"relative w-fit"}>
                                <h2 className={"relative z-10 text-3xl font-bold"}>
                                    Get a tailored résumé and cover letter
                                </h2>
                                <div
                                    className={
                                        "absolute bottom-0 left-0 h-1 w-20 -rotate-2 rounded-full bg-primary-500"
                                    }
                                />
                            </div>
                            <p>
                                Retrieve a customized résumé and cover letter, precisely
                                highlighting the most relevant aspects of your background for
                                that specific position. It optimizes the content, streamlines
                                the structure, and enhances the overall readability, resulting
                                in a polished and professional final product.
                            </p>
                            <p>
                                You can easily modify the content, reorganize sections, or add
                                specific details to ensure your application reflects your unique
                                strengths and accomplishments.
                            </p>
                            <div className={"flex relative gap-2"}>
                                <Image src={"/resume.png"} alt={"Position screenshot"} width={1201} height={779}
                                       className={"rounded-lg shadow"}/>
                                {/*<Image src={"/cover.png"} alt={"Position screenshot"} width={400} height={500}  className={"w-2/5"}/>*/}
                            </div>
                        </div>
                    </div>
                </section>
                <section id={"waitlist"} className={"m-auto max-w-7xl px-4 py-16 flex flex-col"}>
                    <h2 className={"mb-4 text-center text-4xl font-bold"}>
                        Does this sound interesting ? 😀
                    </h2>
                    <p className={"mb-8 text-center text-lg"}>
                        Start now tailoring your résumé and cover letter to the position, and land your dream job!
                    </p>
                    <a href={"https://app.tailoredcv.app"} className={"btn-primary self-center block w-1/4 text-lg text-center"}> Join</a>
                </section>
                <Footer/>
            </main>
        </>
    );
};

export default Home;
