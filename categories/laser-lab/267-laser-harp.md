# #267 — Laser Harp

> Play music by waving your hands through beams of light. Jean-Michel Jarre made these famous. You're about to make one for $25.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

## What Is It?

A laser harp is exactly what it sounds like: an instrument where the strings are replaced by beams of laser light. Multiple laser beams fan out vertically like the strings of a harp. When you break a beam with your hand, a sensor detects the interruption and triggers a musical note. Different beams produce different notes. Wave your hands through the light and you're playing music on photons. It's the kind of instrument that makes people stop whatever they're doing and stare.

Jean-Michel Jarre played a laser harp during his massive outdoor concerts in the 1980s and 90s, and it became one of the most iconic electronic instrument performances ever. His version cost tens of thousands of dollars. Yours will cost about $25 and a weekend of tinkering.

The physics is delightfully simple. Each laser beam shines continuously toward a photosensor (photodiode or LDR) mounted at the far end. The sensor sees constant light and stays quiet. When your hand enters the beam, the sensor goes dark, and the Arduino detects the change and plays the corresponding note. Multiple beam/sensor pairs give you multiple notes — typically 5 to 8 for a pentatonic or full octave scale. Add fog to make the beams visible, dim the lights, and you've built one of the most visually stunning instruments that exists.

## Ingredients

- [ ] 5–8 laser modules — red (650nm) or green (532nm), low power (1–5mW each) *(electronics supplier, dollar store laser pointers, $1–3 each)*
- [ ] 5–8 photoresistors (LDRs) or photodiodes — one per laser beam *(electronics supplier, $0.50 each)*
- [ ] Arduino Uno or Mega — Mega is better if you need more pins *(electronics supplier, $5–15)*
- [ ] Piezo buzzer or speaker — for direct audio output *(electronics supplier, $1)*
- [ ] MIDI shield or USB-MIDI adapter (optional) — to trigger software synths for richer sound *(electronics supplier, $5–10)*
- [ ] Resistors — 10kΩ for each photoresistor voltage divider *(electronics supplier, $1)*
- [ ] Mounting frame — wood, PVC pipe, or metal angle bracket for laser and sensor positions *(hardware store, $5–10)*
- [ ] Fog machine or incense — essential for visible beams *(party store, $15; or incense, $3)*
- [ ] 5V power supply or USB power — for Arduino and lasers *(USB charger, free)*

## Build Steps

1. **Plan the beam layout.** Decide on the number of beams (5 for pentatonic, 7 for a full scale, 8 for an octave). The beams should fan out from a common origin point at the base, spreading upward and outward like harp strings. Space them 3–6 inches apart at playing height so you can break individual beams with your hand without hitting neighbors.

2. **Build the laser mount.** Create a base frame from wood or PVC pipe. Mount all laser modules at the bottom, angled to fan outward. Each laser should point toward its corresponding sensor at the top of the harp frame. If you don't want to build a full harp frame, you can mount the lasers on a base pointing upward and put sensors on an overhead bar or the ceiling.

3. **Build the sensor bar.** Mount the photoresistors or photodiodes at the positions where each laser beam terminates. Each sensor needs to receive its beam and only its beam — add small tubes (cut drinking straws or rolled paper) around each sensor to block ambient light and neighboring beam spill. This is critical for reliable note triggering.

4. **Wire the sensor circuits.** Each photoresistor forms a voltage divider with a 10kΩ resistor: one leg of the LDR to 5V, the other leg to a 10kΩ resistor to ground, and the junction goes to an Arduino analog input. When the laser hits the LDR, resistance drops and voltage rises. When the beam is broken, resistance increases and voltage drops. The Arduino reads this change.

5. **Program note detection.** Write Arduino code that reads each sensor's analog value in a loop. Set a threshold — when a sensor's reading drops below the threshold, the corresponding beam is broken and the note should trigger. Add a small debounce delay (20–50ms) to prevent retriggering from hand jitter. Map each beam to a musical note — C, D, E, F, G, A, B, C for a full octave.

6. **Add sound output.** The simplest option: use the Arduino `tone()` function to drive a piezo buzzer with the frequency of each note. This works but sounds like a doorbell recital. For better sound, use MIDI output — send MIDI note-on messages over serial to a computer running a software synthesizer (like a free VST plugin in a DAW). This gives you piano, strings, synth pads, or any instrument sound you want.

7. **Handle polyphony.** A real harp can play multiple notes simultaneously. If using `tone()`, you're limited to one note at a time (monophonic). For polyphony, use MIDI output to a software synth that handles multiple voices, or use a dedicated sound module (VS1053 MP3/MIDI codec board, ~$8) that can play multiple notes simultaneously.

8. **Align and calibrate.** Power on all lasers and aim each one at its sensor. Verify that each sensor reads high when its beam is unbroken and low when you block it. Adjust sensor tube depth and angle to reject ambient light. Test in the lighting conditions you plan to perform in — bright rooms may need higher-power lasers or deeper sensor tubes.

9. **Add fog and perform.** The beams are invisible without fog. Fire up a fog machine, haze machine, or burn incense to fill the air with particles. Turn off the lights. The laser beams appear as solid lines of light fanning upward. Wave your hands through them and music plays. This is peak "I can't believe I built this" territory.

## Safety Notes

- Even low-power lasers (1–5mW) can cause eye damage with direct exposure. Mount the lasers so beams travel vertically, well above or away from eye level. Never look down into the beam origin point.
- If using green lasers, be aware that cheap green laser modules often emit invisible infrared along with the visible green. An IR filter is recommended if the module doesn't have one built in.
- Fog machines produce glycol-based or glycerin-based haze that can irritate lungs with prolonged exposure. Ventilate the room between performances. People with asthma should be cautious.
- Secure the laser mounts firmly. If a laser slips and points horizontally, it becomes an eye-level hazard. Hot glue, screws, clamps — whatever keeps them locked in place.

## See Also

- [Galvanometer Laser Light Show](266-laser-galvo-show.md)
- [Laser Spirograph](271-laser-spirograph.md)
