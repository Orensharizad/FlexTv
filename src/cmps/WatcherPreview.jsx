import { Link } from "react-router-dom"

export function WatcherPreview({ watcher, onRemoveWatcher }) {
    return (
        <Link to={`/movie/${watcher._id}`}>
            <article className="watcher-preview">
                <img src={`https://res.cloudinary.com/dsvs2bgn4/image/upload/v1675364027/AAAABfMnIhIdkM8LdU5BZaYVaxoVTrMGzIjafPBzCQUwebzxeK7JKvcI7-Jm-5AituzcdJYIT_45NSkbbTwfVva-E01G9J1YVVBveA_sydo43.png`} alt="" />
                <h3 className="watcher-name">{watcher.fullName}</h3>
                <div className="flex align-center ">
                    {/* <button onClick={() => onRemoveWatcher(watcher._id)}>X</button> */}
                </div>
            </article>
        </Link>


    )
}
