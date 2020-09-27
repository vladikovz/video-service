import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { Button, InputBase } from "@material-ui/core";
import style from "./style.module.css";

function HideOnScroll(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export function PageHeader() {
  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <Typography className={style.title} variant="h6">
              Video service
            </Typography>
            <div className={style.search}>
              <InputBase className={style.searchPlaceHolder} placeholder="Search…" classes={{input: style.input}} />
            </div>
            <div className={style.navigation}>
              <Button variant="contained" color="primary">
                Bookmarks
              </Button>
              <Button variant="contained" color="primary">
                Profile
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
