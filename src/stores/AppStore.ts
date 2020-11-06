import {MoviesStore} from "./MoviesStore";

export class AppStore {
    movie: MoviesStore;

    constructor() {
        this.movie = new MoviesStore(this);
    }
}
