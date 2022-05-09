CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	album text NOT NULL,
	artist text NOT NULL,
	notes varchar NOT NULL
);

-- INSERT INTO songs (id, song_title, album, artist, notes)  VALUES (1, 'Ode to Joy (Dubstep Remix)','Classical(Remix)','Blue Claw Philharmonic', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4');
INSERT INTO songs (id, song_title, album, artist, notes) VALUES (1, 'Ode to Joy - Album: 9th Symphonie - artist: Beethoven','9th Symphonie','Beethoven', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4');
INSERT INTO songs (id, song_title, album, artist, notes) VALUES (2, 'C4 scale - Album: Scales - artist: C','Scales','C', 'C4 D4 E4 F4 G4 A4 B4 B4 A4 G4 F4 E4 D4 C4');
INSERT INTO songs (id, song_title, album, artist, notes) VALUES (3, 'Music Scale - Album: Scales - artist: Music','Scales','Music', 'C4 D4 C4 E4 E4 D4 E4 D4 C4 D4 G4 G4 F4 G4 D4');
INSERT INTO songs (id, song_title, album, artist, notes) VALUES (4, 'Fur Elise Funky Version - Album: Unknown - artist: Beethoven','Unknown','Beethoven', 'E5 Eb5 E5 Eb5 E5 B4 D5 C5 A2 E3 A3 E2 E3 Ab3 C5 E4 E5 Eb5 E5 Eb5 E5 B4 D5 C5 A2 E3 A3 A2 E3 A3 E2 E3 Ab3 A4 E5 Eb5 E5 Eb5 E5 B4 D5 C5 A2 E3 A3 A4 C4 E4 A4 B4 E4 Ab4 B4 A4 C4 E4 A4 B4 E4 Ab4 B4 A4 C4 E4 A4 B4 E4 C5 B4 A2 E3 A3 E2 E3 Ab3 E6 Eb5 C5 E4 E5 Eb5 E5 Eb5 E5 B4 D5 C5 A2 E3 A3 A2 E3 A3 E2 E3 Ab3 A2 E3 A3 C3 G3 C4 D5 F4 E5 D5 C5 E4 D5 C5 G2 G3 B3 A2 E3 A3 B4 E4 E5 E5 E2 E3 E4 E4 E5 Eb5 E5 A4 C4 E4 A4 B4 E4 C5 B4 A4 B4 C5 D5 E5 G4 F5 E5 E5 Eb5 E5 Eb5 E5 Eb5 E5 B4 D5 C5 Eb5 E5 A4 C4 E4 A4 B4 E4 Ab4 B4 C5 E4 E5 Eb5 E5 Eb5 E5 B4 D5 C5 E6 Eb5 A2 E3 A3 E3 Ab3 E2 A2 E3 A3 A2 E3 A3 E2 E3 Ab3 A4 B4 C5 D5 E5 G4 F5 E5 A2 E3 A3 C3 G3 C4 D5 F4 E5 D5 C5 E4 D5 C5 G2 G3 B3 A2 E3 A3 B4 E4 E5 E5 E2 E3 E4 E4 E5 Eb5 E5 A4 C4 E4 A4 B4 E4 C5 B4 E5 Eb5 E5 Eb5 E5 Eb5 E5 B4 D5 C5 A4 C4 E4 A4 B4 E4 Ab4 B4 Eb5 E5 A2 E3 A3 E2 E3 Ab3 C5 E4 E5 Eb5 E5 Eb5 E5 B4 D5 C5 A2 E3 A3 A4 C4 E4 A4 B4 D4 C5 B4 A2 E3 A3 E2 E3 Ab3 A2');
INSERT INTO songs (id, song_title, album, artist, notes) VALUES (5, 'song 5 - Album: 3 - artist: Red','3','Red', 'C5 D5 E5 F5 G5 A5 B5 B5 A5 G5 F5 E5 D5 C5');
INSERT INTO songs (id, song_title, album, artist, notes) VALUES (6, 'song 6 - Album: 3 - artist: Yellow','3','Yellow', 'C5 D5 C5 E5 E5 D5 E5 D5 C5 D5 G5 G5 F5 G5 D5');
INSERT INTO songs (id, song_title, album, artist, notes) VALUES (7, 'song 7 - Album: 3 - artist: Green','3','Green', 'B4 Bb4 A4 Ab4 G4 Gb4 F4 E4 Eb4 D4 Db4 C4');
INSERT INTO songs (id, song_title, album, artist, notes) VALUES (8, 'song 8 - Album: 4 - artist: Green','4','Green', 'C2 Db2 D2 Eb2 E2 F2 Gb2 G2 Ab2 A2 Bb2 B2');
INSERT INTO songs (id, song_title, album, artist, notes) VALUES (9, 'song 9 - Album: 4 - artist: Red','4','Red', 'B1 Bb1 A1 Ab1 G1 Gb1 F1 E1 Eb1 D1 Db1 C1 C1 Db1 D1 Eb1 E1 F1 Gb1 G1 Ab1 A1 Bb1 B1');
INSERT INTO songs (id, song_title, album, artist, notes) VALUES (10,'song 10 - Album: 4 - artist: Red','4','Red', 'C3 Db3 D3 Eb3 E3 F3 Gb3 G3 Ab3 A3 Bb3 B3 B3 Bb3 A3 Ab3 G3 Gb3 F3 E3 Eb3 D3 Db3 C3');
INSERT INTO songs (id, song_title, album, artist, notes) VALUES (11,'song 11 - Album: 4 - artist: Yellow','4','Yellow', 'Db1 Eb1 Gb1 Bb1 Ab1 Db2 Eb2 Gb2 Ab2 Bb2 Db3 Eb3 Gb3 Ab3 Bb3 Db4 Eb4 Gb4 Ab4 Bb4 Db5 Eb5 Ab5 Bb5');
INSERT INTO songs (id, song_title, album, artist, notes) VALUES (12,'Crazy Train - Album: 5 - artist: Ozzy','5','Ozzy', 'Gb2 Gb2 Db3 Gb2 D3 Gb2 Db3 Gb2 B2 A2 Ab2 A2 B2 A2 Ab2 Gb2 Gb2 Gb2 Db3 Gb2 D3 Gb2 Db3 Gb2 B2 A2 Ab2 A2 B2 A2 Ab2 Gb2');