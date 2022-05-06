import { useEffect, useRef } from 'react';
import Head from 'next/head';

const notes = [
    'c3',
    'c-3',
    'd3',
    'd-3',
    'e3',
    'f3',
    'f-3',
    'g3',
    'g-3',
    'a3',
    'a-3',
    'b3'
];

export default function Home() {
    const audiosRef = useRef([]);
    useEffect(() => {
        audiosRef.current = notes.map(note => {
            return new Audio(`/notes/${note}.mp3`);
        });
    }, []);

    const playNote = noteIndex => {
        const audio = audiosRef.current[noteIndex];
        const isAlreadyPlaying = !audio.paused;
        if (isAlreadyPlaying) {
            audio.currentTime = 0;
        }
        audio.play();
    };

    return (
        <div>
            <Head>
                <title>piano</title>
                <meta name="description" content="piano" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <div className="piano">
                    <div className="piano-top"></div>
                    <div className="piano-bottom">
                        {notes.map((note, index) => {
                            if (note.length === 2) {
                                return (
                                    <div
                                        onClick={() => playNote(index)}
                                        className="piano-white-key"
                                    ></div>
                                );
                            } else if (note.length === 3) {
                                return (
                                    <div
                                        onClick={() => playNote(index)}
                                        className={`piano-black-key piano-black-key-${note}`}
                                    ></div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
