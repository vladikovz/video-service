import React, {Component} from "react";
import {PageLayout} from "../components/layout/PageLayout/PageLayout";
import {MoviesCollectionCarousel} from "../components/MoviesCollectionCarousel/MoviesCollectionCarousel";
import {computed} from "mobx";
import {IStore} from "../interfaces/common/IStore";
import {inject, observer} from "mobx-react";
import {PageHeader} from "../components/navigation/PageHeader/PageHeader";
import {FilmPreview} from "../components/FilmPreview/FilmPreview";

const YouTubePath: string = "https://www.youtube.com/embed/";

@inject("store")
@observer
export class MainPage extends Component<IStore> {
    @computed
    get store() {
        return this.props.store!;
    }

    state = {
        trailerKey: "",
        title: "",
        description: "",
    };

    async componentDidMount() {
        await this.store.movie.getTrendingMoviesList();
        await this.store.movie.getPopularMoviesList();
        await this.getRandomTrendingMovie();
    }

    async getRandomTrendingMovie() {
        const movieRandomNumber = await Math.floor(
            Math.random() * this.store.movie.trendingMovies.length
        );

        await this.store.movie.getTrailers(
            this.store.movie.trendingMovies[movieRandomNumber].id
        );
        if (this.store.movie.trailers.length) {
            const trailerID = await Math.floor(
                Math.random() * this.store.movie.trailers.length
            );

            this.setState({
                trailerKey: this.store.movie.trailers[trailerID].key,
                title: this.store.movie.trendingMovies[movieRandomNumber].title,
                description: this.store.movie.trendingMovies[movieRandomNumber]
                    .overview,
            });
        } else {
            await this.getRandomTrendingMovie();
        }
    }

    render() {
        return (
            <PageLayout>
                <PageHeader/>
                <FilmPreview
                    trailer={
                        YouTubePath +
                        this.state.trailerKey +
                        "?autoplay=1&mute=1&controls=0&fs=0&rel=0"
                    }
                    title={this.state.title}
                    description={this.state.description}
                />

                {/*<FilmList/>*/}
                <MoviesCollectionCarousel
                    title={"Trending"}
                    moviesCollection={this.store.movie.trendingMovies}
                    link={"/trending"}
                />
                {/*<MoviesCollectionCarousel*/}
                {/*    title={"Popular"}*/}
                {/*    moviesCollection={this.store.movie.popularMovies}*/}
                {/*    link={"/popular"}*/}
                {/*/>*/}
                {/*  <div >*/}
                {/*  Lorem ipsum, arcu donec nulla, tellus auctor nec sodales sed: justo*/}
                {/*  congue massa metus ipsum auctor, sit tellus pharetra, sapien at. Et*/}
                {/*  bibendum congue: vivamus molestie amet ipsum et, sapien morbi, metus*/}
                {/*  magna, maecenas fusce quam, eget. Arcu sagittis magna, quam elementum*/}
                {/*  cursus proin porta urna nec proin. Ipsum maecenas lectus tellus*/}
                {/*  curabitur: adipiscing duis pellentesque et nulla gravida urna*/}
                {/*  integer&nbsp;&mdash; pharetra: ultricies urna: et in magna sodales*/}
                {/*  eros et proin integer. Et fusce eros fusce, nec sem eget nulla gravida*/}
                {/*  duis, at rutrum. Malesuada, proin ligula molestie nibh arcu magna*/}
                {/*  eros, pellentesque&nbsp;&mdash; molestie mauris gravida maecenas.*/}
                {/*  Auctor nam non sem non, porta odio ultricies eros curabitur, sodales*/}
                {/*  ultricies quisque in sodales.*/}
                {/*</div>*/}
            </PageLayout>
        );
    }
}
