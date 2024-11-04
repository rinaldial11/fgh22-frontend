import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import Subscribe from "../components/Subscribe";
import { FaMagnifyingGlass } from "react-icons/fa6";

function HomeList() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <div className="bg-[url(/src/assets/images/avengers-darken2.png)] w-screen h-[600px] bg-no-repeat bg-cover py-28 px-6 md:px-28">
        <div className="text-white md:text-left text-center flex h-full flex-col gap-3 justify-center">
          <div className="text-lg font-semibold">LIST MOVIE OF THE WEEK</div>
          <div className="text-3xl md:text-5xl  font-medium w-full max-w-2xl">
            Experience the Magic of Cinema: Book Your Tickets Today
          </div>
        </div>
      </div>
      <main className="px-6 md:px-28 py-14 text-base flex flex-col gap-5 text-maintext">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-3">
            <label htmlFor="search">Cari Event</label>
            <div className="relative w-96 h-16">
              <FaMagnifyingGlass className="absolute top-1/3 left-6" />
              <input
                className="border px-14 outline-none rounded-md w-full h-full border-grey "
                type="text"
                name="search"
                id="search"
                placeholder="New Born Expert"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>Filter</div>
            <div className="flex gap-8 flex-wrap items-center">
              <div className="h-16 w-24 flex items-center">
                <button className="h-10 w-24 rounded-xl hover:bg-secondtix hover:text-maintix">
                  Thriller
                </button>
              </div>
              <div className="h-16 w-24 flex items-center">
                <button className="h-10 w-24 rounded-xl hover:bg-secondtix hover:text-maintix">
                  Horror
                </button>
              </div>
              <div className="h-16 w-24 flex items-center">
                <button className="h-10 w-24 rounded-xl hover:bg-secondtix hover:text-maintix">
                  Romantic
                </button>
              </div>
              <div className="h-16 w-24 flex items-center">
                <button className="h-10 w-24 rounded-xl hover:bg-secondtix hover:text-maintix">
                  Adventure
                </button>
              </div>
              <div className="h-16 w-24 flex items-center">
                <button className="h-10 w-24 rounded-xl hover:bg-secondtix hover:text-maintix">
                  Sci-fi
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full overflow-scroll gap-5 justify-between py-12">
            <MovieCard
              tittle={"Black Widow"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"The Witches"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"Tenet"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"Spiderman"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"Black Widow"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
          </div>
          <div className="flex w-full overflow-scroll gap-5 justify-between py-12">
            <MovieCard
              tittle={"Black Widow"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"The Witches"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"Tenet"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"Spiderman"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"Black Widow"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
          </div>
          <div className="flex w-full overflow-scroll gap-5 justify-between py-12">
            <MovieCard
              tittle={"Black Widow"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"The Witches"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"Tenet"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"Spiderman"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
            <MovieCard
              tittle={"Black Widow"}
              genre1={"Action"}
              genre2={"Adventure"}
            />
          </div>
          <div className="w-full flex gap-5 py-10 justify-center text-sm">
            <button className="w-10 h-10 rounded-full bg-maintix hover:bg-secondtix hover:text-maintix">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-maintix hover:bg-secondtix hover:text-maintix">
              2
            </button>
            <button className="w-10 h-10 rounded-full bg-maintix hover:bg-secondtix hover:text-maintix">
              3
            </button>
            <button className="w-10 h-10 rounded-full bg-maintix hover:bg-secondtix hover:text-maintix">
              4
            </button>
            <button className="w-10 h-10 rounded-full bg-maintix hover:bg-secondtix hover:text-maintix">
              5
            </button>
          </div>
        </div>
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default HomeList;
