import P5 from 'p5';
import * as Tone from 'tone';

import { Visualizer } from '../Visualizers';

var start = 0;

export const Testing = new Visualizer(
  'Juan',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;

    p5.background('rgba(100%, 0%, 100%, 0.5)');
    p5.translate(width / 2.5, height / 2);
    p5.noiseDetail(4, 4);

    const values = analyzer.getValue();
    p5.beginShape();

    var space = 1

    for (let i = 0; i < 200; i += space) {
      var amplitude = values[i] as number;
      var my_amp = Math.abs(amplitude)

      var xoff = p5.map(Math.cos(i), 0, 3, 0, my_amp * 10)
      var yoff = p5.map(Math.sin(i), 0, 3, 0, my_amp * 10)
      var n = p5.noise(xoff + start, yoff + start) * (my_amp * 10)

      var h = p5.map(n, 0, 1, 0, 10)
      var w = 1

      var r = p5.map(Math.sin(i), 39, 1, 100, my_amp * 200)
      var g = p5.map(8, 52, 234, 0, my_amp * 200)
      var b = p5.map(n, 52, 235, 140, my_amp * 200)
      
      p5.stroke(24, 56, 100);
      p5.fill(r, g, b);

      p5.rotate(space);
      p5.rect(20, 50, h, w, 80);

    }
    start += 10;

    

    p5.endShape();

  },
  
);