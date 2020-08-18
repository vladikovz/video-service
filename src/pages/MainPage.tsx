import React, { Component } from "react";
import { PageLayout } from "../components/layout/PageLayout/PageLayout";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export class MainPage extends Component<any, any> {
  render() {
    return (
      <PageLayout>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Video service</Typography>
          </Toolbar>
        </AppBar>
      </PageLayout>
    );
  }
}
