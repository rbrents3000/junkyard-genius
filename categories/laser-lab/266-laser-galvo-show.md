# #266 — Galvanometer Laser Light Show

> Concert laser show tech — theirs costs $5K, yours costs $20.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

## What Is It?

Every concert laser show you've ever seen works the same way: a laser beam bounces off two tiny mirrors mounted on galvanometers — one for X-axis deflection, one for Y-axis. The galvos tilt their mirrors thousands of times per second, steering the beam so fast that persistence of vision turns a single dot into shapes, text, and animations drawn in light on a wall or ceiling. Professional galvo scanners cost hundreds of dollars per pair. But the same type of mirror-on-a-motor mechanism exists in barcode scanners and can be built from hard drive voice coils.

The concept is straightforward: laser hits mirror 1 (X-axis), bounces to mirror 2 (Y-axis), bounces to the projection surface. An Arduino generates signals that control the angle of each mirror. Change both angles simultaneously and the dot moves to any X,Y position. Change them fast enough and the dot traces out continuous shapes. Hook up audio input and the shapes can react to music. Add fog and the beams become visible mid-air — that's when jaws start dropping.

This is one of those builds where the result is wildly disproportionate to the effort. A laser drawing shapes on a foggy wall in a dark room looks like a $50,000 production. The fact that it's powered by an Arduino and parts from a dead hard drive makes it even better.

## Ingredients

- [ ] Laser module — green (532nm) is most visible, 5–50mW *(electronics supplier, $5–15)*
- [ ] 2 galvanometer mirrors — salvage from barcode scanners, or build from hard drive voice coils + small mirrors *(e-waste bin, electronics supplier, $3–10 each)*
- [ ] Arduino Uno or Nano *(electronics supplier, $5)*
- [ ] 2 driver circuits — H-bridge modules (L298N) or op-amp driver circuits for galvo coils *(electronics supplier, $3–5 each)*
- [ ] Small mirrors — first-surface mirrors preferred, but craft mirrors work *(craft store, salvage from makeup compact, $1–2)*
- [ ] 12V power supply — 2A+ for the galvo drivers *(old laptop charger, PC power supply, free)*
- [ ] Mounting hardware — small angle brackets, screws, hot glue *(hardware store, junk drawer, $2)*
- [ ] Fog machine or incense — to make beams visible in air *(party store, $15; or just burn incense)*
- [ ] Audio jack + amplifier (optional) — for music-reactive mode *(electronics supplier, $2)*

## Build Steps

1. **Salvage or build galvanometer scanners.** The ideal source is a dead barcode scanner from a checkout counter — they contain matched galvo pairs designed for exactly this purpose. Alternatively, build your own: take the voice coil actuator from a dead hard drive (the arm that moves the read head) and glue a small mirror to the arm. The voice coil swings the arm (and mirror) proportionally to applied current. You need two of these — one for X, one for Y.

2. **Mount the galvos at 90 degrees.** Secure the X galvo so its mirror faces the laser. Mount the Y galvo so its mirror faces the X mirror's reflected beam. The beam path goes: laser → X mirror → Y mirror → wall. The X galvo steers the beam left/right, the Y galvo steers it up/down. Alignment matters — adjust until the beam hits the Y mirror cleanly across the full X deflection range, and the Y mirror sends the beam to a consistent area on the wall.

3. **Wire the driver circuits.** Each galvo coil needs a driver that can push current in both directions (to deflect the mirror both ways from center). An H-bridge module works, or build a simple driver from an op-amp and a push-pull transistor pair. Connect the X driver to one Arduino PWM output, Y driver to another. If using hard drive voice coils, they're low-impedance — start with low voltage (5V) and increase carefully.

4. **Program basic shapes.** Write Arduino code that outputs X and Y coordinate values as PWM signals. Start with a simple circle: X = sin(t), Y = cos(t), where t increments in a loop. The mirrors deflect smoothly and the laser traces a circle on the wall. Adjust the speed (loop rate) until the circle appears solid due to persistence of vision. Too slow and you see a moving dot. Too fast and the mirrors can't keep up, producing distorted shapes.

5. **Add more patterns.** Once a circle works, add squares (alternating X/Y ramp signals), triangles, Lissajous curves (different frequencies on X and Y for mesmerizing geometric patterns), and text (look up "laser font" coordinate tables online). Store multiple patterns and switch between them with a button or serial command.

6. **Add blanking control (optional but worth it).** When drawing discontinuous shapes (like text), you need to turn the laser off while the beam moves between letters. Connect a digital output to the laser's enable pin or a transistor in the laser's power line. Set it LOW during transit moves and HIGH when drawing. Without blanking, you get visible lines connecting separate shapes — which honestly looks kind of cool too, just not as clean.

7. **Add music reactivity.** Feed audio into an Arduino analog input through a voltage divider. Use the signal amplitude to modulate pattern size, speed, or shape parameters. Bass hits make the pattern expand. Treble makes it spin faster. Or use FFT (Fast Fourier Transform) to separate frequency bands and map each to a different visual parameter. The FastLED library has audio analysis examples that adapt well.

8. **Add fog and perform.** This is where the magic happens. Turn off the lights, fire up a fog machine (or light some incense for a budget option), and run your patterns. The beams become visible as bright lines cutting through the fog. Green lasers are the most visible. In a dark room with fog, this looks absolutely spectacular — concert-venue quality from twenty dollars of parts.

9. **Calibrate and refine.** Adjust mirror angles for maximum projection area without distortion. Tune the scan speed for the sharpest shapes — each galvo has a resonant frequency where it performs best. If shapes are rounded when they should be sharp (circles instead of squares), the scan rate is too fast for the galvos. If shapes flicker, it's too slow. Find the sweet spot.

## Safety Notes

- Laser light shows use beams that are potentially dangerous to eyes. Never allow the beam to sweep across audience eye level. Aim projections at walls, ceilings, or elevated surfaces. Professional shows have a "scan-fail safety" circuit that kills the laser if the galvos stop — consider adding one (a watchdog timer that disables the laser if the Arduino stops sending signals).
- Green laser modules above 5mW can cause eye damage from even brief direct exposure. Wear laser safety goggles rated for your laser's wavelength during alignment and testing. Remove goggles only when the show is running and you're behind the projector.
- Fog machines can trigger smoke detectors. Disable or cover nearby detectors during use, and remember to re-enable them afterward. Forgetting this step is how you end up explaining things to firefighters.
- Galvo mirrors spinning at high speed can shatter if they're regular glass mirrors. First-surface mirrors are preferred. If using glass mirrors, keep them small and enclosed in case of failure.

## See Also

- [Laser Harp](267-laser-harp.md)
- [Laser Spirograph](271-laser-spirograph.md)
