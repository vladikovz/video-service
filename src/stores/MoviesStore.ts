import Axios from "axios";
import {ITrendingMovieResponse} from "../interfaces/response/ITrendingMovieResponse";
import {IJsonRpcResponse} from "../interfaces/response/IJsonRpcResponse";
import {AppStore} from "./AppStore";
import {makeAutoObservable} from "mobx";
import {ITrailerResponse} from "../interfaces/response/ITrailerResponse";

export class MoviesStore {
    private store: AppStore;

    constructor(store: AppStore) {
        this.store = store;
        makeAutoObservable(this);
    }

    trendingMovies: ITrendingMovieResponse[] = [];
    popularMovies: ITrendingMovieResponse[] = [];
    trailers: ITrailerResponse[] = [];
    isReceived: boolean = false;

    async getTrendingMoviesList() {
        this.setDateState(true);
        const response = await Axios.get<IJsonRpcResponse<ITrendingMovieResponse[]>>(
            "https://api.themoviedb.org/3/trending/all/day?api_key=683a4bdc4d2d5e9c1cc3b58efa94cd23"
        );
        if (response) {
            this.trendingMovies = response.data.results;
        }
        this.setDateState(false);
    }

    async getPopularMoviesList() {
        this.setDateState(true);
        const response = await Axios.get<IJsonRpcResponse<ITrendingMovieResponse[]>>(
            "https://api.themoviedb.org/3/movie/popular?api_key=683a4bdc4d2d5e9c1cc3b58efa94cd23&language=en-US&page=1"
        );
        if (response) {
            this.popularMovies = response.data.results;
        }
        this.setDateState(false);
    }

    async getTrailers(movieId: number){
        this.setDateState(true);
        const response = await Axios.get<IJsonRpcResponse<ITrailerResponse[]>>(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=683a4bdc4d2d5e9c1cc3b58efa94cd23&language=en-US`
        );
        if (response) {
            this.trailers = response.data.results;
        }
        this.setDateState(false);
    }

    setDateState(value: boolean) {
        this.isReceived = value;
    }
}
