import React, {Component} from "react";
import style from "./style.module.css";
import {CardFilm} from "../CardFilm/CardFilm";

export class FilmList extends Component<any> {
    render() {
        return (
            <>
                <div className={style.filmListContent}>
                    <div className={style.filmListBackground}>
                        <CardFilm/>
                        <CardFilm/>
                        <CardFilm/>
                        <CardFilm/>
                        <CardFilm/>
                    </div>
                </div>
            </>
        );
    }
}
