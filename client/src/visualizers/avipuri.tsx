// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const VibroBoxVisualizer = new Visualizer(
  'avipuri',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();
    let values = analyzer.getValue();
    if (values.length > 40) {
      values = values.slice(0, 40);
    }
    p5.beginShape();
    let amplitude = 0;
    let maxamp = 0;
    for (let i = 0; i < values.length; i++) {
        amplitude = values[i] as number;
        //round amplitude to 3 decimal places
        amplitude = Math.round(amplitude * 1000) / 1000;
        maxamp = Math.max(maxamp, Math.abs(amplitude));

    }

    // change fill color based on value of maxamp
    if(maxamp > 0.4) { // if maxamp is greater than 0.4, set fill color to purple
      p5.fill(180, 0 , 255);
    } else if(maxamp > 0.3) { // if maxamp is greater than 0.2, set fill color to gold
      p5.fill(255,225,0);
    } else if(maxamp > 0.25) { 
      p5.fill(190, 0 , 255);
    } else if(maxamp > 0.2) { 
      p5.fill(255,215,0);
    } else if(maxamp > 0.15) { 
      p5.fill(200, 0 , 255);
    } else if(maxamp > 0.1 ){ 
      p5.fill(255, 200, 0);
    } else {
      p5.fill(200, 0, 255);
    }

    console.log(maxamp);
    const w   = width  * 0.10;
    const h   = height * 0.10;
    const gap = width  * 0.05;
    const ix  = width  * 0.15;
    const iy  = height * 0.15;

    const off = width  * 0.3;

    let x1, y1;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x1 = ix + (w + gap) * i;
        y1 = iy + (h + gap) * j;

        p5.rect(x1, y1, amplitude*w*3, amplitude*h*3);
      }
    }
    p5.endShape();
  },
);
