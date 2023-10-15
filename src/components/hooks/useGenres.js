const useGenres = (selectedGenres) => {
    if(selectedGenres.length < 1) return "";

    let genreIds = selectedGenres.map((genre) => genre.id);
    return genreIds.toString();
}

export default useGenres; 