import React, {Component} from "react";
import {PageLayout} from "../components/layout/PageLayout/PageLayout";
import {PageHeader} from "../components/navigation/PageHeader/PageHeader";
import {FilmPreview} from "../components/FilmPreview/FilmPreview";
import {FilmList} from "../components/FilmList/FilmList";

export class MainPage extends Component {
    render() {
        return (
            <PageLayout>
                <PageHeader/>
                <FilmPreview/>
                <FilmList/>
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
