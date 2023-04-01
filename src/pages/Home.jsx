import React from "react";
import { NewsCard } from '../components';
import NewsData from '../data/newsData.json';

const Home = () => {
  return (
    <div id="home">
      <section
        id="landing-page"
        className="flex flex-row items-center justify-center h-screen"
      >
        <div className="flex-1 h-full bg-hero bg-no-repeat"></div>
        <div className="flex-1 h-full flex flex-col justify-center bg-home-color py-12">
          <div className="p-16">
            <h2 className="text-3xl font-bold mb-4">Welcome To</h2>
            <h1 className="text-6xl font-bold mb-4">Nevtik Academy</h1>
            <p className="text-xl text-home-text-p mb-8">
              Network Evolution Technology Information and Knowladge
            </p>
            <button
              href="#"
              className="bg-main-color hover:bg-home-color border-2 border-main-color text-white hover:text-main-color text-2xl font-semibold py-2 px-6 rounded-full transition duration-300"
            >
              Our News
            </button>
          </div>
        </div>
      </section>
      <section
        id="jurusan"
        className="grid grid-col place-items-center w-full justify-center flex-wrap h-auto p-10"
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold uppercase">majority</h1>
          <p className="text-xl text-home-text-p">
            About nevtiks activities and achievements :
          </p>
        </div>
        <div className="flex lg:my-8 my-3">
          {NewsData.slice(0, 3).map((newsData) => {
            return (
              <NewsCard
                key={newsData.key}
                filterKey={newsData.key}
                src={newsData.src}
                title={newsData.title}
                date={newsData.date}
                user={newsData.user}
                desc={newsData.desc}
              />
            );
          })}
        </div>
        <button class="btn-hover-white text-main-color border-2 border-main-color hover:bg-main-color hover:text-light-one text-xl font-bold py-2 px-4 rounded-full flex items-center transition duration-300">
          <span className="span-hover-white h-5 w-5 bg-playRed bg-no-repeat transition duration-300"></span>
          <span className="pl-1">More</span>
        </button>
      </section>
      <section
        id="news"
        className="grid grid-col place-items-center w-full justify-center flex-wrap h-auto p-10 bg-home-color"
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold uppercase">news update</h1>
          <p className="text-xl text-home-text-p">
            About nevtiks activities and achievements :
          </p>
        </div>
        <div className="flex lg:my-8 my-3">
          {NewsData.slice(0, 3).map((newsData) => {
            return (
              <NewsCard
                key={newsData.key}
                filterKey={newsData.key}
                src={newsData.src}
                title={newsData.title}
                date={newsData.date}
                user={newsData.user}
                desc={newsData.desc}
              />
            );
          })}
        </div>
        <button class="btn-hover-red text-light-one bg-main-color border-2 border-main-color hover:bg-light-one hover:text-main-color text-xl font-bold py-2 px-4 rounded-full flex items-center transition duration-300">
          <span className="span-hover-red h-5 w-5 bg-playWhite bg-no-repeat transition duration-300"></span>
          <span className="pl-1">More</span>
        </button>
      </section>
    </div>
  );
};

export default Home;
