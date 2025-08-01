import React, { useRef, useState } from "react";

const Movie = () => {
  const movieName = useRef(null);
  const movieGenre = useRef(null);
  const movieRating = useRef(null);
  const editId = useRef(null);
  const [card, setCard] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId.current) {
      console.log("ol");
      const updated = card.map((item) =>
        item.id === editId.current
          ? {
              id: editId.current,
              movieName: movieName.current.value,
              movieGenre: movieGenre.current.value,
              movieRating: movieRating.current.value,
            }
          : item
      );
      setCard(updated);
      console.log(updated);
      movieGenre.current.value = "";
      movieName.current.value = "";
      movieRating.current.value = "";
       editId.current = null;
    } else {
      const movie = {
        id: Date.now(),
        movieName: movieName.current.value,
        movieGenre: movieGenre.current.value,
        movieRating: movieRating.current.value,
      };
      setCard([...card, movie]);

      movieName.current.value = "";
      movieGenre.current.value = "";
      movieRating.current.value = "";
    }
  };
  const handleDelete = (id) => {
    setCard(card.filter((item) => item.id !== id));
  };
  const handleUpdate = (item) => {
    editId.current = item.id;
    movieName.current.value = item.movieName;
    movieGenre.current.value = item.movieGenre;
    movieRating.current.value = item.movieRating;
  };
  return (
    <section>
      <div className="container mx-auto mt-[50px] ">
        <form
          onSubmit={handleSubmit}
          action=""
          className="bg-[#3da903] max-w-[650px] p-[20px] mx-auto rounded-[5px] shadow-lg"
        >
          <h2 className="text-center text-[#fff] text-[24px] mb-[30px]">
            Movie information
          </h2>
          <div className="flex items-center justify-between gap-[8px]">
            <input
              ref={movieName}
              className="w-[50%]"
              required
              placeholder="Enter the movie name"
              type="text"
              name=""
              id=""
            />
            <input
              ref={movieGenre}
              required
              className="w-[50%]"
              placeholder="Enter the genre "
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex items-center gap-[8px]">
            <input
              ref={movieRating}
              required
              className="w-[100%]"
              placeholder="Enter the rating"
              type="number"
              name=""
              id=""
            />
          </div>
          <div className="flex items-center justify-center mt-[26px]">
            <button className="py-[8px] px-[30px] border text-[#fff]">
              Submit
            </button>
          </div>
        </form>
      </div>
      <h2 className="text-center text-[34px] mb-[30px] mt-[60px]">Movies</h2>
      <div className="container mx-auto grid grid-cols-4 gap-[16px]">
        {card?.map((item) => (
          <div
            className="border border-[#d6d4d4] shadow-md p-[20px]"
            key={item.id}
          >
            <div className="h-[70px] flex items-center justify-center">
              <p className="text-[40px] ">...</p>
            </div>
            <h3 className="text-[20px] font-medium text-[#026ed9]">
              {item.movieName}
            </h3>
            <p className="text-[17px] text-[#9c1601]">
              genre: {item.movieGenre}
            </p>

            <p className="text-[green]"> rating: {item.movieRating}</p>

            <div className="flex items-center justify-between gap-[10px] mt-[20px]">
              <button
                onClick={() => handleDelete(item.id)}
                className="block w-[50%] border py-[5px] rounded-[6px] bg-[#ea2f55] text-[white]"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdate(item)}
                className="block w-[50%] border py-[5px] rounded-[6px] bg-[#58aacf] text-[#fff]"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Movie;
