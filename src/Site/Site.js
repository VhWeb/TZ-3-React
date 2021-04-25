import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, ZoomOut } from "react-scroll-motion";
import PageOne from "./containers/PageOne";
import PageTwo from "./containers/PageTwo";

function Site() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(ZoomOut(), Fade())}>
          <PageOne />
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <div className="full-height">
          <Animator animation={batch(Fade())}>
            <PageTwo />
          </Animator>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default Site;