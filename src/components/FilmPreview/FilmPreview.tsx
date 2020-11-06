import React, {Component} from "react";
import cr from "./cr.mp4";
import style from "./style.module.css";
import {Button} from "@material-ui/core";
import {inject, observer} from "mobx-react";
import {computed} from "mobx";
import {IStore} from "../../interfaces/common/IStore";

@inject("store")
@observer
export class FilmPreview extends Component<IStore> {
    @computed
    get store() {
        return this.props.store!
    }

    render() {
        return (
            <>
                <section className={style.mainWrapper}>
                    <video className={style.videoBackground} autoPlay loop muted>
                        <source src={cr} type="video/mp4"/>
                    </video>
                    <div className={style.movieNav}>some navigation</div>
                    <div className={style.mainInformation}>
                        <div className={style.movieTitle}>Avatar</div>
                        <div className={style.movieDescription}>
                            Lorem ipsum, arcu donec nulla, tellus auctor nec sodales sed:
                            justo congue massa metus ipsum auctor, sit tellus pharetra,
                            sapien at. Et bibendum congue: vivamus molestie amet ipsum et,
                            sapien morbi, metus magna, maecenas fusce quam, eget. Arcu
                            sagittis magna, quam elementum cursus proin porta urna nec
                            proin. Ipsum maecenas lectus tellus
                        </div>
                        <div className={style.movieManage}>
                            <Button
                                className={style.button}
                                variant="contained"
                                color="primary"
                                onClick={() => this.store.movie.getTrendingMoviesList()}
                            >
                                Watch
                            </Button>
                            <Button
                                className={style.button}
                                variant="contained"
                                color="primary"
                            >
                                Bookmarks
                            </Button>
                            <Button
                                className={style.button}
                                variant="contained"
                                color="primary"
                            >
                                Trailer
                            </Button>
                        </div>
                    </div>
                    <div className={style.moviesSettings}>
                        <Button
                            className={style.settingsButton}
                            variant="contained"
                            color="primary"
                        >
                            Sound
                        </Button>
                        <Button
                            className={style.settingsButton}
                            variant="contained"
                            color="primary"
                        >
                            FullScreen
                        </Button>
                    </div>
                </section>
            </>
        );
    }
}
