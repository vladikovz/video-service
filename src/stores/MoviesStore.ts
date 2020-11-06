import Axios from "axios";
import {ITrendingMovieResponse} from "../interfaces/response/ITrendingMovieResponse";
import {IJsonRpcResponse} from "../interfaces/response/IJsonRpcResponse";
import {AppStore} from "./AppStore";
import {makeAutoObservable, toJS} from "mobx";

export class MoviesStore {
    private store: AppStore;

    constructor(store: AppStore) {
        this.store = store;
        makeAutoObservable(this);
    }

    trendingMovies: ITrendingMovieResponse[] = [];
    isReceived: boolean = false;

    async getTrendingMoviesList() {
        this.setDateState(true);
        const response = await Axios.get<IJsonRpcResponse<ITrendingMovieResponse[]>>(
            "https://api.themoviedb.org/3/trending/all/day?api_key=683a4bdc4d2d5e9c1cc3b58efa94cd23"
        );
        if (response) {
            this.trendingMovies = response.data.results;
            console.log(toJS(this.trendingMovies));
        }
        this.setDateState(false);
    }

    setDateState(value: boolean) {
        this.isReceived = value;
    }
}
