// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Violin.
 ** ------------------------------------------------------------------------ */

interface BassGuitarKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  octave: number;
  index: number; // octave + index together give a location for the Violin key
}

export function BassGuitarKey({
  note,
  synth,
  minor,
  index,
}: BassGuitarKeyProps): JSX.Element {
  
  let idv=Math.floor(index/6);
  let idh=index%6;
  console.log(`${note}rem`)
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames('ba pointer absolute dim', {
        'bg-gold black h3': minor, // minor keys are black
        'black bg-white h4': !minor, // major keys are white
      })}
      
      style={{
        // CSS
        top: `${idv * 1}rem`,
        left: `${idh * 10}%`,
        zIndex: 0,//minor ? 1 : 0,
        width: '10%',//minor ? '1.5rem' : '2rem',
        height: '0.25rem',
       // marginLeft: '0.25rem',//minor ? '0.25rem' : 0,
      }}
      
    ></div>
  );
}

// eslint-disable-next-line
function BassGuitarKeyWithoutJSX({
  note,
  synth,
  minor,
  index,
}: BassGuitarKeyProps): JSX.Element {
  console.log(`${note}rem`)
  /**
   * This React component for pedagogical purposes.
   * See `ViolinKey` for the React component with JSX (JavaScript XML).
   */
  return React.createElement(
    'div',
    {
      // onMouseDown: () => synth?.triggerAttack(`${note}`),
      // onMouseUp: () => synth?.triggerRelease('+0.10'),
      onMouseDown: () => synth?.triggerAttackRelease(`${note}`, 1),
      className: classNames('ba pointer absolute dim', {
        'bg-black black h3': minor,
        'black bg-white h4': !minor,
      }),
      style: {
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
      },
    },
    [],
  );
}

function BassGuitarType({ title, onClick, active }: any): JSX.Element {
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

function BassGuitar({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'Db1', idx: 0},
    { note: 'Eb1', idx: 1 },
    { note: 'Fb1', idx: 2 },
    { note: 'Gb1', idx: 3 },
    { note: 'Ab1', idx: 4 },
    { note: 'Bb1', idx: 5 },
    { note: 'Db2', idx: 6 },
    { note: 'Eb2', idx: 7 },
    { note: 'Fb2', idx: 8 },
    { note: 'Gb2', idx: 9 },
    { note: 'Ab2', idx: 10 },
    { note: 'Bb2', idx: 11 },
    { note: 'Cb3', idx: 12 },
    { note: 'Db3', idx: 13 },
    { note: 'Eb3', idx: 14 },
    { note: 'Fb3', idx: 15 },
    { note: 'Gb3', idx: 16 },
    { note: 'Ab3', idx: 17 }
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
      <div className="relative dib h4 w-100 ml7">
        {Range(2, 3).map(octave =>
          keys.map(key => {
            const isMinor = key.note.indexOf('b') === 1;
            const note = `${key.note}`;
            return (
              <BassGuitarKey
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
          <BassGuitarType
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

export const BassGuitarInstrument = new Instrument('BassGuitar_Juan-Aguirre', BassGuitar);