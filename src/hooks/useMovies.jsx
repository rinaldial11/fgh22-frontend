import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API_URL } from "../config/apiConfig.js";

export function useMovies({ type = "all" } = {}) {
  const [movies, setMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("");
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
        if (type === "all" || type === "moviesPage") {
          setMovies(data.results || []);
          setInfo(data.pageInfo);
          setSearchParams(params);
        }

        if (type === "all" || type === "homepage") {
          const availableMovies = data.results.filter(
            (v) => v.status === "available"
          );
          setMovies(availableMovies);
          const comingSoonMovies = data.results.filter(
            (v) => v.status === "coming soon"
          );
          console.log("Coming Soon Movies:", comingSoonMovies);
          setUpcomingMovies(comingSoonMovies);
        }
      })
      .catch((err) => console.error("Error fetching movies:", err));
  };

  const searchMovie = (title) => {
    setPage(1);
    fetchMovie(title.search, 1, 10, selectedGenre);
  };

  const handleGenreClick = (genre) => {
    if (selectedGenre !== genre) {
      setSelectedGenre(genre);
      setPage(1);
      fetchMovie(searchForm.getValues("search"), 1, 10, genre);
    } else {
      setSelectedGenre("");
      setPage(1);
    }
  };

  useEffect(() => {
    if (type === "moviesPage") {
      const queryString = new URLSearchParams(location.search);
      if (isInitialLoad) {
        window.scrollTo(0, 0);
        setIsInitialLoad(false);
      }
      fetchMovie(queryString.get("search"), page, 10, selectedGenre);
      if (queryString.get("search")) {
        searchForm.setValue("search", queryString.get("search"));
      }
    } else if (type === "homepage") {
      fetchMovie("", 1, 100, "");
      window.scrollTo(0, 0);
    }
  }, [location.search, selectedGenre]);

  return {
    movies,
    upcomingMovies,
    info,
    page,
    selectedGenre,
    searchForm,
    setPage,
    searchMovie,
    handleGenreClick,
  };
}
