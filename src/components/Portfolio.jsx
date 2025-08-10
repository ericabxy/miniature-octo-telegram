import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import ExtLink from "./ExtLink.jsx";
import Header from "./Header.jsx";

function Portfolio () {
  const title = "Portfolio";
  const url = "/portfolio";

  return (
    <>
      <Header title={title} />
      <ListGroup>
        <RetuxLevelItem />
        <GameplayVideosItem />
        <PixelArtItem />
        <GameStoreItem />
        <MerchStoreItem />
      </ListGroup>
    </>
  );
}

function RetuxLevelItem () {
  return (
    <ListGroup.Item>
      First Place <ExtLink url="https://savannah.nongnu.org/forum/forum.php?forum_id=8621">prize-winning entry</ExtLink> for the <ExtLink url="http://retux.nongnu.org/">ReTux</ExtLink> Level Making Contest
    </ListGroup.Item>
  )
}

function GameplayVideosItem () {
  return (
    <ListGroup.Item>
      <ExtLink url="https://www.youtube.com/playlist?list=PLSWHw3WZb7jH0vBaPEe_7dxh_F3Y8BAY-">Boss Takedown</ExtLink> and <ExtLink url="https://www.youtube.com/playlist?list=PLSWHw3WZb7jEi8gP6YC_uQxoX2zOXEc32">Level Complete</ExtLink> (<ExtLink url="https://archive.org/details/level-complete-videos/">archive</ExtLink>) videos
    </ListGroup.Item>
  )
}

function PixelArtItem () {
  return (
    <ListGroup.Item>
      Free original and derivative <ExtLink url="https://opengameart.org/users/OptimusDu">pixel art</ExtLink>
    </ListGroup.Item>
  )
}

function GameStoreItem () {
  return (
    <ListGroup.Item>
      <ExtLink url="https://optimusdu.itch.io/">Video games</ExtLink> at itch.io
    </ListGroup.Item>
  )
}

function MerchStoreItem () {
  return (
    <ListGroup.Item>
      Retro gaming <ExtLink url="https://www.zazzle.com/store/noxbanners">designer store</ExtLink>
    </ListGroup.Item>
  )
}

export default Portfolio;
