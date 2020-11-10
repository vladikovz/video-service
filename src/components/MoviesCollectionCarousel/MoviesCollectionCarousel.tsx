import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import {computed} from "mobx";
import {IStore} from "../../interfaces/common/IStore";
import {GridListTile, GridListTileBar} from "@material-ui/core";
import style from "./style.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rightArrow from "../../imgStore/rightArrow.svg";
import leftArrow from "../../imgStore/leftArrow.svg";
import {Link} from "react-router-dom";

const imgPath: string = "https://image.tmdb.org/t/p/w500";

interface IMoviesCollectionCarouselProps {
    title: string;
    moviesCollection: any[];
    link: string;
}

interface IMoviesCollectionCarousel
    extends IMoviesCollectionCarouselProps,
        IStore {
}

@inject("store")
@observer
export class MoviesCollectionCarousel extends Component<IMoviesCollectionCarousel> {
    @computed
    get store() {
        return this.props.store!;
    }

    state = {
        value: false,
    };

    SampleNextArrow(props: any) {
        const {onClick} = props;
        return (
            <>
                <div onClick={onClick}>
                    <div className={style.wrapperRightArrow}>
                        <img
                            src={rightArrow}
                            alt={"pic"}
                            className={style.listRightArrow}
                        />
                    </div>
                    <div className={style.arrowRightBackground}/>
                </div>
            </>
        );
    }

    SamplePrevArrow(props: any) {
        const {onClick} = props;
        return (
            <>
                <div onClick={onClick}>
                    <div className={style.arrowLeftBackground}/>
                    <div className={style.wrapperLeftArrow}>
                        <img src={leftArrow} alt={"pic"} className={style.listLeftArrow}/>
                    </div>
                </div>
            </>
        );
    }

    show(value: boolean) {
        this.setState({value});
    }

    settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <this.SampleNextArrow/>,
        prevArrow: <this.SamplePrevArrow/>,
        className: style.slickFlex,
    };

    render() {
        this.props.moviesCollection.map((movie) => {
            this.store.movie.getTrailers(movie.id);
        });
        return !this.props.moviesCollection.length ? (
            <div>Skeleton</div>
        ) : (
            <div className={style.root}>
                <Link to={this.props.link}>
                    <div className={style.listTitle}>
                        <h2 className={style.title}>{this.props.title}</h2>
                        <img
                            src={rightArrow}
                            alt={"pic"}
                            className={style.titleRightArrow}
                        />
                    </div>
                </Link>

                <Slider {...this.settings}>
                    {this.props.moviesCollection.map((movie) => {
                        return (
                            <GridListTile
                                key={movie.id}
                                className={style.movieCard}
                                onClick={() => this.show(true)}
                            >
                                <div>
                                    <div className={style.inner}>
                                        <img
                                            className={style.poster}
                                            src={imgPath + movie.backdrop_path}
                                            alt={movie.title}
                                        />
                                        <GridListTileBar
                                            className={style.movieTitle}
                                            title={movie.title ? movie.title : movie.name!}
                                        />
                                    </div>
                                </div>
                            </GridListTile>
                        );
                    })}
                </Slider>
                {/*{this.state.value? <FilmPreview trailer={"dd"} title={'dd'}/> : <></>}*/}
            </div>
        );
    }
}
