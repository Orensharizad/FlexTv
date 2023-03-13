export function MoviePreview({ movie, isLarge }) {
    const base_url = 'https://image.tmdb.org/t/p/original/'

    return (
        <section className='movie-preview'>
            <img className={isLarge ? 'movie-img large' : 'movie-img'} key={movie.id} src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt='movie-img' />
        </section>
    )
} 