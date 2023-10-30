import React, { CSSProperties } from 'react';
import { Sequence } from 'remotion';
import RemotionLottie from './RemotionLottie';
import animationData from './animation.json';

const style: CSSProperties = {
  width: 3600,
  height: 1000,
  position: 'relative',
  bottom: 0,
  left: 0,
  fontSize: '40px !important',
};

const Seq1 = () => {
  animationData.assets[4].layers[1].t.d.k[0].s.t = "Now: The Big Bang Theory"
  return (
    <Sequence from={0}>
      <RemotionLottie
        animationData={animationData}
        style={style}
        speed={0.5}
      />
    </Sequence>
  );
}

const Seq2 = () => {
  animationData.assets[4].layers[1].t.d.k[0].s.t = "Next: Silicon Valley"
  return (
    <Sequence from={250}>
      <RemotionLottie
        animationData={animationData}
        style={style}
        speed={0.5}
      />
    </Sequence>
  );
}

export const Overlay: React.FC = () => {
  return (
      <>
          <Seq1 />
          <Seq2 />
      </>
  );
};
