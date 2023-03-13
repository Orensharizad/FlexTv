import { Loader } from "./loader";
import { WatcherPreview } from "./WatcherPreview";

export function WatcherList({ watchers, onRemoveWatcher }) {

    return (
        <section className="watcher-list ">
            {watchers.map(watcher =>
                <WatcherPreview
                    key={watcher._id}
                    watcher={watcher}
                    onRemoveWatcher={onRemoveWatcher}
                />
            )}

        </section>
    )
}
