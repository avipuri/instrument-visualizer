// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

// image imports
import blowFlute from '../img/blow.png';
import holePressed from '../img/pressed.png';
import holeReleased from '../img/released.png';

/*
    Flute-like instrument has a different system than string-based instruments.
    We need to press the holes and when we blow air into the body.
    So we will only have one play/blow button and mutiple hole as options.
*/

// render the hole image and patch the click events
// the index is the only thing we need, which is used for id
function FluteHole(holeIndex: number): JSX.Element {
    return (
        <img 
        src={holePressed} 
        id={`hole${holeIndex}`} 
        alt="pressed" 
        draggable="false"
        onClick={(ele) => 
            {
                // use *alt* as a state
                const image = ele.currentTarget;
                const state = image.getAttribute("alt");
                
                // swap state and image when clicked
                if (state === "pressed") {
                    image.setAttribute("alt", "released");
                    image.setAttribute("src", holeReleased)
                }
                else {  // even though user can modify *alt*, it can still catch the case
                    image.setAttribute("alt", "pressed");
                    image.setAttribute("src", holePressed)
                }
            }
        }
        ></img>
    )
}

// render the blow button and patch the click events to play sound
function FluteBlow(synth?: Tone.Synth): JSX.Element {
    return (
        <img 
        src={blowFlute}
        alt="blow"
        draggable="false"
        onMouseDown={() => {
            let key: string = "";
            for (let i = 0; i < 6; i++) {
                let alt = document.getElementById(`hole${i}`)?.getAttribute("alt");
                key += (alt == "pressed") ? "1" : "0";
            }
            
            // not all notes are correct, most of them are fake
            let note: string = {
                "000000": "Bb5",  // fake
                "000001": "A5",  // fake
                "000010": "B5",  // fake
                "000011": "Bb5",  // fake
                "000100": "A5",  // fake
                "000101": "C5",  // fake
                "000110": "B5",  // fake
                "000111": "C5",  // fake
                "001000": "Db5",
                "001001": "Db5",  // fake
                "001010": "Gb4",
                "001011": "G4",  // fake
                "001100": "F4",  // fake
                "001101": "E4",  // fake
                "001110": "E4",  // fake
                "001111": "F4",  // fake
                "010000": "Gb4",  // fake
                "010001": "Eb4",  // fake
                "010010": "G4",  // fake
                "010011": "D4",  // fake
                "010100": "Db4",  // fake
                "010101": "Eb4",  // fake
                "010110": "Gb4",  // fake
                "010111": "D4",  // fake
                "011000": "G4",
                "011001": "F4",  // fake
                "011010": "G4",  // fake
                "011011": "Db4",  // fake
                "011100": "Gb4",
                "011101": "D4",  // fake
                "011110": "F4",
                "011111": "G4",
                "100000": "E4",
                "100001": "Eb4",  // fake
                "100010": "C4",  // fake
                "100011": "F4",  // fake
                "100100": "Eb4",  // fake
                "100101": "B4",  // fake
                "100110": "Gb4",  // fake
                "100111": "Ab4",  // fake
                "101000": "F4",
                "101001": "C4",
                "101010": "Gb4",  // fake
                "101011": "Ab4",  // fake
                "101100": "F4",
                "101101": "B4",
                "101110": "G4",  // fake
                "101111": "B4",
                "110000": "D4",
                "110001": "A4",
                "110010": "Bb4",
                "110011": "Eb4",  // fake
                "110100": "Db4",
                "110101": "Ab4",
                "110110": "A4",
                "110111": "B4",  // fake
                "111000": "C4",
                "111001": "D4",  // fake
                "111010": "E4",  // fake
                "111011": "F4",  // fake
                "111100": "B3",
                "111101": "Bb",
                "111110": "A3",
                "111111": "G3"
            }[key] || "C3";  // adding the default value to ignore error

            synth?.triggerAttack(note);
        }}
        onMouseUp={() => synth?.triggerRelease('+0.25')}
        ></img>
    )
}

// use the original PianoType, just change the name for understanding
function OscillatorType({ title, onClick, active }: any): JSX.Element {
    return (
      <div
        onClick={onClick}
        className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
          'b--black black': active,
          'gray b--light-gray': !active,
        })}
      >
        {title}
      </div>
    );
}

function Piano({ synth, setSynth }: InstrumentProps): JSX.Element {
  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };

  const oscillators: List<OscillatorType> = List([
    'sine',
    'sawtooth',
    'square',
    'triangle',
    'fmsine',
    'fmsawtooth',
    'fmtriangle',
    'amsine',
    'amsawtooth',
    'amtriangle',
  ]) as List<OscillatorType>;

  return (
    <div className="pv4">
      <div className="relative dib h4 w-100 ml4">
        {FluteBlow(synth)}
        {Range(0,6).map(index => FluteHole(index))}
      </div>

      <div className={'pl4 pt4 flex'}>
        {oscillators.map(o => (
          <OscillatorType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
      </div>
    </div>
  );
}

export const BambooFluteInstrument = new Instrument('BambooFlute', Piano);
