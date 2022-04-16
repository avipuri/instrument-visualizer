// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const SpectrumVisualizer = new Visualizer(
  'Spectrum_HaoyuanTan(Sunny)',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.strokeWeight(dim * 0.007);  // control the thinness of each line
    p5.background(0, 0, 0, 255);  // required for clear old frames
    p5.stroke(255, 255, 255, 255);  // required for displaying the lines

    const values = analyzer.getValue();
    const lineWidth = width / values.length;

    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number * 400;  // enlarge it to display larger
        const x = i * lineWidth;  // width of each bar/line
        const y = p5.map(amplitude, 0, values.length, height, 0);

        // we don't need the lower part because it is a spectrum
        p5.line(x, height, x, y);  
    }
    p5.endShape();
  },
);
