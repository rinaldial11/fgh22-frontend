import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { API_URL } from "../config/apiConfig.js";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

function HomeList() {
  const [movie, setMovie] = React.useState([]);
  const [info, setInfo] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [isInitialLoad, setIsInitialLoad] = React.useState(true);
  const [selectedGenre, setSelectedGenre] = React.useState("");
  const [_, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchForm = useForm();

  const fetchMovie = (search, page, limit = 10, genre = "") => {
    const url = new URL(`${API_URL}/movies`);
    const params = new URLSearchParams();

    if (search) {
      url.searchParams.append("search", search);
      params.set("search", search);
    }

    if (page) {
      url.searchParams.append("page", page);
      params.set("page", page);
    }

    url.searchParams.append("limit", limit);
    params.set("limit", limit);

    if (genre) {
      url.searchParams.append("genre", genre);
      params.set("genre", genre);
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // const availableMovie = data.results.filter(
        //   (v) => v.status === "available"
        // );
        setMovie(data.results) || [];
        setInfo(data.pageInfo);
        setSearchParams(params);
      })
      .catch((err) => console.error("Error fetching movies:", err));
  };

  function searchMovie(title) {
    setPage(1);
    fetchMovie(title.search, 1, 10, selectedGenre);
  }

  function handleGenreClick(genre) {
    if (selectedGenre !== genre) {
      setSelectedGenre(genre);
      setPage(1);
      fetchMovie(searchForm.getValues("search"), 1, 10, genre);
    } else {
      setSelectedGenre("");
      setPage(1);
    }
  }

  React.useEffect(() => {
    const queryString = new URLSearchParams(location.search);

    if (isInitialLoad) {
      window.scrollTo(0, 0);
      setIsInitialLoad(false); // Tandai bahwa ini bukan load pertama lagi
    }

    fetchMovie(queryString.get("search"), page, 10, selectedGenre);
    if (queryString.get("search")) {
      searchForm.setValue("search", queryString.get("search"));
    }
  }, [location.search, selectedGenre]);

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
      <main className="px-10 md:px-28 py-14 text-base flex flex-col gap-5 text-maintext">
        <div className="flex flex-col lg:flex-row gap-6">
          <form
            className="flex flex-col gap-3"
            onSubmit={searchForm.handleSubmit(searchMovie)}
          >
            <label htmlFor="search">Cari Event</label>
            <div className="relative w-96 h-16">
              <FaMagnifyingGlass className="absolute top-1/3 left-6" />
              <input
                {...searchForm.register("search")}
                className="border px-14 outline-none rounded-md w-full h-full border-grey "
                type="text"
                id="search"
                placeholder="Search movie..."
              />
            </div>
            <button className="hidden">go</button>
          </form>
          <div className="flex flex-col justify-end gap-3">
            <div className="flex gap-8 flex-wrap items-center">
              {[
                "Thriller",
                "Horror",
                "Romantic",
                "Adventure",
                "Sci-fi",
                "Drama",
                "Action",
                "Comedy",
              ].map((genre) => (
                <div className="h-16 w-24 flex items-center" key={genre}>
                  <button
                    className={`h-10 w-24 rounded-xl ${
                      selectedGenre === genre
                        ? "bg-secondtix text-maintix"
                        : "hover:bg-secondtix hover:text-maintix"
                    }`}
                    onClick={() => handleGenreClick(genre)}
                  >
                    {genre}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-beetwen 2xl:justify-start overflow-scroll gap-24 py-12">
          {movie.map((movie, index) => (
            <div
              key={`list-movies-${movie.id}-${index}`}
              className="group relative flex flex-col gap-5 text-start"
            >
              <div className="w-64 rounded-lg h-[375px] overflow-hidden">
                <img
                  className="h-full"
                  src={`${API_URL}/movie/image/${movie.image}`}
                  alt={movie.title}
                />
                {movie.isRecommended === true && (
                  <div className="absolute bg-secondtix top-3 -left-2 text-white text-sm py-1 px-4 w-32 rounded-e-2xl rounded-tl-xl">
                    Recommended
                  </div>
                )}
                {movie.status === "coming soon" && (
                  <div className="absolute bg-red top-3 -left-2 text-white text-sm py-1 px-4 w-32 rounded-e-2xl rounded-tl-xl">
                    Coming soon
                  </div>
                )}
              </div>
              <div className="absolute hidden group-hover:flex h-[375px] rounded-md w-64 flex-col justify-center items-center gap-3 bg-[#00000066]">
                <Link
                  className="w-44 h-12 border border-maintix flex justify-center items-center text-maintix rounded-md"
                  to={`/movie/${movie.id}`}
                >
                  Details
                </Link>
                {/* <Link
                  className="w-44 h-12 bg-secondtix flex justify-center items-center text-maintix rounded-md"
                  to="/order"
                >
                  Buy Ticket
                </Link> */}
              </div>
              <div className="text-xl font-semibold h-10 max-w-64">
                {movie.title}
              </div>
              <div className="flex gap-3 flex-wrap">
                {movie.genre.slice(0, 2).map((v) => (
                  <div
                    className="bg-abumuda text-secondtix px-3 py-1 rounded-3xl"
                    key={v}
                  >
                    {v}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full text-center font-semibold text-grey">
          {movie.length === 0 ? "0 Result" : `${info.totalData} Result`}
        </div>
        <div className="w-full flex gap-5 py-10 justify-center text-sm">
          {[...Array(info.totalPage)].map((_, index) => (
            <button
              key={`page-${index + 1}`}
              onClick={() => {
                setPage(index + 1);
                fetchMovie(
                  searchForm.getValues("search"),
                  index + 1,
                  5,
                  selectedGenre
                );
              }}
              className={`w-10 h-10 ${
                page === index + 1
                  ? "rounded-full disabled bg-secondtix text-maintix cursor-not-allowed"
                  : "rounded-full bg-abumuda hover:bg-secondtix hover:text-maintix cursor-pointer"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default HomeList;
