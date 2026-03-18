# #265 — Laser Voice Communicator

> Talk to someone across a field using nothing but a beam of light. Alexander Graham Bell did it in 1880. Your turn.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |

## What Is It?

Before Bell invented the telephone, he invented something arguably cooler: the photophone. In 1880, he transmitted voice on a beam of sunlight reflected off a vibrating mirror. He called it his greatest invention — greater than the telephone. The world disagreed and went with copper wire instead. But the principle is elegant and simple, and with a $2 laser pointer and some basic components, you can build one that works across a room, across a yard, or across a football field on a clear night.

The transmitter side modulates a laser beam with audio. An audio signal from a microphone or phone drives current through the laser diode, causing its brightness to fluctuate in sync with the sound waves. These fluctuations are invisible to the human eye — the beam looks steady — but they carry your voice encoded in light. The receiver side uses a photocell (solar cell, photodiode, or phototransistor) aimed at the incoming beam. As the laser brightness fluctuates, the photocell generates a varying electrical signal that, when amplified and fed to a speaker, reproduces the original audio.

No wires. No radio waves. No detectable RF emissions. Just photons carrying your voice at the speed of light. It's the same fundamental principle behind modern fiber optic communication, except your "fiber" is a beam of light through open air. The NSA can't intercept it unless they physically step into the beam path — at which point you'll notice because the audio cuts out.

## Ingredients

- [ ] Laser pointer or laser diode module — red (650nm) is fine, green is brighter but harder to modulate *(dollar store, electronics supplier, $2–5)*
- [ ] Small audio amplifier module — LM386 breakout board or similar *(electronics supplier, $2)*
- [ ] Electret microphone — for voice input on the transmitter *(electronics supplier, salvage from old headset, $1)*
- [ ] Photocell, photodiode, or small solar cell — for the receiver *(electronics supplier, salvage from solar garden light, $1–3)*
- [ ] Second audio amplifier module — for the receiver side *(electronics supplier, $2)*
- [ ] Small speaker — for receiver audio output *(salvage from old radio or toy, free)*
- [ ] 9V batteries or USB power bank — power for both sides *(junk drawer)*
- [ ] Audio cable with 3.5mm jack (optional) — to connect a phone as audio source *(junk drawer)*
- [ ] Tripods, clamps, or stands — to aim the laser and receiver at each other *(junk drawer, $3)*
- [ ] Resistors — 100Ω and 10kΩ for current limiting and biasing *(electronics supplier, $1)*

## Build Steps

1. **Build the transmitter circuit.** The laser needs to be modulated by audio — meaning its brightness has to vary in proportion to the sound signal. The simplest approach: power the laser diode through a transistor (2N2222 or similar) whose base is driven by the amplified microphone signal. The LM386 amplifier boosts the mic signal, and the output drives the transistor, which controls current through the laser. Add a DC bias resistor so the laser stays on at a dim baseline and the audio signal makes it brighter and dimmer around that point.

2. **Alternative: direct-drive modulation.** If your laser pointer already has a driver circuit, you can bypass the transistor and inject the amplified audio signal directly into the laser's power line through a capacitor (10μF electrolytic). The capacitor blocks DC and passes only the AC audio signal, superimposing it on the laser's supply voltage. This is simpler but gives less modulation depth. Try both approaches and use whichever sounds cleaner.

3. **Test the transmitter.** Power on the laser and speak into the mic (or play music from your phone through the audio jack). You should be able to see very slight brightness fluctuation on a wall if you look carefully — though with music it's easier to notice with bass-heavy tracks. If you don't see any change, the modulation depth is too low — increase the amplifier gain or adjust the bias point.

4. **Build the receiver.** The photocell or photodiode connects to the second LM386 amplifier. When light hits the photocell, it generates a small voltage proportional to light intensity. The amplifier boosts this signal and drives the speaker. Wire the photocell between the amplifier input and ground. Add a 10kΩ resistor in parallel for biasing. Connect the amplifier output to the speaker.

5. **Aim the beam.** Mount the transmitter laser on a tripod or clamp so it's stable and aimed at the receiver. Mount the photocell on another stand, facing the laser. Start at close range — across a table — to verify the system works before going for distance. Alignment is critical: the photocell needs to be in the beam path. A wider beam (slightly defocused laser) makes aiming easier at the cost of signal strength.

6. **Test and tune.** Play music from a phone into the transmitter. You should hear it reproduced through the receiver speaker. If the audio is distorted, reduce the transmitter amplifier gain — you're over-modulating the laser. If it's too quiet, increase receiver gain. Background light can add noise; cupping your hand around the photocell or adding a tube/shade helps reject ambient light.

7. **Extend the range.** Once it works across a room, take it outside. On a clear night, you can communicate over hundreds of feet. The limiting factor is beam divergence (the laser spot gets bigger with distance, so less light hits the photocell) and ambient light noise. A lens in front of the photocell focuses incoming light and dramatically improves range. A magnifying glass works fine.

8. **Add a second set for two-way communication.** Build a matched pair — each end gets a transmitter and receiver. Now you have a full-duplex laser communicator. Point your transmitter at their receiver and vice versa. Walkie-talkies without radio waves.

## Safety Notes

- Never aim a laser at anyone's eyes, even from a distance. This build uses low-power laser pointers (Class IIIa or below), but direct eye exposure to any laser can cause retinal damage. Keep the beam path below or above eye level.
- The transmitter laser should be securely mounted so it can't slip and sweep across someone's face. Tape it, clamp it, weigh it down — whatever it takes.
- If using higher-power laser diodes (from DVD/Blu-ray drives) for greater range, the safety stakes increase significantly. Stay with standard pointers for your first build.

## See Also

- [Laser Tripwire Alarm](268-laser-tripwire-alarm.md)
- [Laser Galvo Show](266-laser-galvo-show.md)
