// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

// image imports
import uke from '../img/uke.png';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Ukulele.
 ** ------------------------------------------------------------------------ */

interface UkuleleKeyProps {
    note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
    duration?: string;
    synth?: Tone.Synth; // Contains library code for making sound
    minor?: boolean; // True if minor key, false if major key
    octave: number;
    index: number; // octave + index together give a location for the piano key
}

export function UkuleleKey({
    note,
    synth,
    minor,
    index,
}: UkuleleKeyProps): JSX.Element {
    /**
     * This React component corresponds to either a major or minor key in the piano.
     * See `PianoKeyWithoutJSX` for the React component without JSX.
     */
    // use idstr and idfret to get the postition of the fret and string based on index. 4 string 12 fret each.
    //based on Duy's code
     let idstr = Math.floor(index/13);
     let idfret = index%13;
    return (
        // Observations:
        // 1. The JSX refers to the HTML-looking syntax within TypeScript.
        // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
        // 3. The curly braces `{` and `}` should remind you of string interpolation.
        <div
          onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
          onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
          className={classNames('ba pointer absolute dim', {
            'bg-black black h3': minor,
            'black bg-white h4': !minor, // major keys are white
          })}
          style={{
            // CSS
            //center on postion of string and fret on image
            top: `${idstr * 1.25}rem`,
            left: `${idfret * 6}%`,
            zIndex: 0,
            marginTop: '30px',
            marginLeft: '30px',
            width: '6%',
            height: '12px',
          }}
         ></div>
        //   // Unable to fix bugs with background image
        //   // not resizeable/doesnt line up with keys if zoomed in
        //   //background image uke 
        //   style = {{
        //   backgroundImage: `url(${uke})`,
        //   backgroundPosition: 'left-center',
        //   width: '200%',
        //   height: '500px',
        //   backgroundRepeat: 'no-repeat',
        // }}>
        // </div></>
    );
}

function UkuleleType({ title, onClick, active }: any): JSX.Element {
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

function Ukulele({ synth, setSynth }: InstrumentProps): JSX.Element {
    const keys = List([
      //uke notes fourth string
      {note: 'A5', idx: 0 },
      {note: 'Bb5', idx: 1 },
      {note: 'B5', idx: 2 },
      {note: 'C6', idx: 3 },
      {note: 'Db6', idx: 4 },
      {note: 'D6', idx: 5 },
      {note: 'Eb6', idx: 6 },
      {note: 'E6', idx: 7 },
      {note: 'F6', idx: 8 },
      {note: 'Gb6', idx: 9 },
      {note: 'G6', idx: 10 },
      {note: 'Ab6', idx: 11 },
      {note: 'A6', idx: 12 },
      //uke notes third string
      {note: 'E5', idx: 13 },
      {note: 'F5', idx: 14 },
      {note: 'Gb5', idx: 15 },
      {note: 'G5', idx: 16 },
      {note: 'Ab5', idx: 17 },
      {note: 'A5', idx: 18 },
      {note: 'Bb5', idx: 19 },
      {note: 'B5', idx: 20 },
      {note: 'C6', idx: 21 },
      {note: 'Db6', idx: 22 },
      {note: 'D6', idx: 23 },
      {note: 'Eb6', idx: 24 },
      {note: 'E6', idx: 25 },
      //uke notes second string
      {note: 'C5', idx: 26 },
      {note: 'Db5', idx: 27 },
      {note: 'D5', idx: 28 },
      {note: 'Eb5', idx: 29 },
      {note: 'E5', idx: 30 },
      {note: 'F5', idx: 31 },
      {note: 'Gb5', idx: 32 },
      {note: 'G5', idx: 33 },
      {note: 'Ab5', idx: 34 },
      {note: 'A5', idx: 35 },
      {note: 'Bb5', idx: 36 },
      {note: 'B5', idx: 37 },
      {note: 'C6', idx: 38 },
      //uke notes frist string
      {note: 'G4', idx: 39 },
      {note: 'Ab4', idx: 40 },
      {note: 'A4', idx: 41 },
      {note: 'Bb4', idx: 42 },
      {note: 'B4', idx: 43 },
      {note: 'C5', idx: 44 },
      {note: 'Db5', idx: 45 },
      {note: 'D5', idx: 46 },
      {note: 'Eb5', idx: 47 },
      {note: 'E5', idx: 48 },
      {note: 'F5', idx: 49 },
      {note: 'Gb5', idx: 50 },
      {note: 'G5', idx: 51 },
    ]);

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
          {Range(2, 3).map(octave =>
            keys.map(key => {
              const isMinor = key.note.indexOf('b') === 1;
              const note = `${key.note}`;
              return (
                <UkuleleKey
                key={note} //react key
                note={note}
                synth={synth}
                minor={isMinor}
                octave={octave}
                index={key.idx}
                />
              );
            }),
          )}
        </div>
        <div className={'pl4 pt4 flex'}>
          {oscillators.map(o => (
            <UkuleleType
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

export const UkuleleInstrument = new Instrument('Ukulele', Ukulele);