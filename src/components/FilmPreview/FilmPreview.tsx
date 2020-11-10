import React, {Component} from "react";
import style from "./style.module.css";
import {Button} from "@material-ui/core";
import {inject, observer} from "mobx-react";
import {computed} from "mobx";
import {IStore} from "../../interfaces/common/IStore";

interface IFilmPreviewProps {
    trailer: string;
    title: string;
    description: string;
}

interface IFilmPreview extends IFilmPreviewProps, IStore {
}

@inject("store")
@observer
export class FilmPreview extends Component<IFilmPreview> {
    @computed
    get store() {
        return this.props.store!;
    }

    render() {
        return (
            <>
                <section className={style.mainWrapper}>
                    <div className={style.videoBackground}>
                        <iframe
                            frameBorder="0"
                            className={style.iframe}
                            src={this.props.trailer}
                        />
                    </div>
                    <div className={style.movieNav}>some navigation</div>
                    <div className={style.mainInformation}>
                        <div className={style.movieTitle}>{this.props.title}</div>
                        <div className={style.movieDescription}>
                            {this.props.description}
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
