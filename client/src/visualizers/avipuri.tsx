// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

// create sphere visualizer

export const WaterVisualizer = new Visualizer(
  'avipuri',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();
    const values = analyzer.getValue();
    p5.beginShape();
    let x = 0;
    let y = 0;
    let amplitude = 0;
    for (let i = 0; i < values.length; i++) {
      // draw circle in the center of window
        amplitude = values[i] as number;
        x = width / 2 - 100;
        y = height / 2;
    }
    // change the size of the circle based on the amplitude
    p5.fill(100);
    p5.ellipse(x, y, (amplitude * dim) + 100, (amplitude * dim) + 100);
    //p5.ellipse(x, y, (amplitude * 2) + 200, (amplitude * 2) + 200); 
    p5.endShape();
  },
);
