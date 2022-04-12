// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const CircularVisualizer = new Visualizer(
  'Flower_Duy-Nguyen',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    let averageVal = 0;

    p5.background(0, 0, 0, 255);

    p5.noFill();

    let values = analyzer.getValue();

    if (values.length > 40) {
      values = values.slice(0, 40);
    }

    for (let i = 0; i < values.length; i++) {
      averageVal += (values[i] as number * 2) ** 2;
    }

    averageVal = Math.min(1000 * averageVal, 255);
    const shade = (averageVal / (values[0] as number));
    p5.fill(shade, 0, averageVal, 255);
    p5.strokeWeight(2);

    console.log(values);
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      let amplitude = values[i] as number
      let ampMap = Math.min(1000 * amplitude, 255)
      if (ampMap < 0) {
        ampMap = -1 * ampMap;
      }

      let r = p5.map(amplitude, 0, 1, 0, height);
      let x = r * Math.cos(i) + (1.05 * Math.floor(width / 2)) - Math.floor(width / 10);
      let y = r * Math.sin(i) + Math.floor(height / 2);

      p5.rect(x, y, r, r);
    }
    p5.endShape();
  },
);