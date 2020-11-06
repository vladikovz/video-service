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

@inject("store")
@observer
export class TrendingMoviesPart extends Component<IStore> {
    @computed
    get store() {
        return this.props.store!;
    }

    async componentDidMount() {
        await this.store.movie.getTrendingMoviesList();
    }

    SampleNextArrow(props: any) {
        const {onClick} = props;
        return (
            <>
                <div className={style.wrapperRightArrow} onClick={onClick}>
                    <img src={rightArrow} alt={"pic"} className={style.listRightArrow}/>
                </div>
                <div className={style.arrowRightBackground} />
            </>
        );
    }

    SamplePrevArrow(props: any) {
      const {onClick} = props;
      return (
          <>
            <div className={style.arrowLeftBackground} />
            <div className={style.wrapperLeftArrow} onClick={onClick}>
              <img src={leftArrow} alt={"pic"} className={style.listLeftArrow}/>
            </div>

          </>
      );
    }

    settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4.5,
        slidesToScroll: 4,
      autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        nextArrow: <this.SampleNextArrow/>,
        prevArrow: <this.SamplePrevArrow/>,
        className: style.slickFlex,
    };

    render() {
        return !this.store.movie.trendingMovies.length ? (
            <div>Skeleton</div>
        ) : (
            <div className={style.root}>
                <Link to={"/trending"}>
                    <div className={style.listTitle}>
                        <h2 className={style.title}>Trending</h2>
                        <img
                            src={rightArrow}
                            alt={"pic"}
                            className={style.titleRightArrow}
                        />
                    </div>
                </Link>

                <Slider {...this.settings}>
                    {this.store.movie.trendingMovies.map((movie) => {
                        return (
                            <GridListTile key={movie.id} className={style.movieCard}>
                                <div>
                                    <div className={style.inner}>
                                        <img
                                            className={style.poster}
                                            src={imgPath + movie.backdrop_path!}
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
            </div>
        );
    }
}
