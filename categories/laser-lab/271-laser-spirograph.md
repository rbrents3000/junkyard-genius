# #271 — Motorized Laser Spirograph

> Two mirrors, two motors, one laser, infinite patterns. Add fog and prepare to lose an hour staring at the ceiling.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |

## What Is It?

Remember spirographs? Those plastic gear sets that drew hypnotic geometric patterns with a pen? This is the same mathematical principle — Lissajous curves and epicycloid patterns — but drawn on your ceiling with a laser at the speed of light. Instead of interlocking gears, two small mirrors spin on motors at different speeds. The laser bounces off the first mirror, then the second, then hits the ceiling (or wall). Each mirror deflects the beam in one axis. Because the mirrors spin at different speeds, the two deflections combine into endlessly evolving geometric patterns that never quite repeat.

The math is the same as a spirograph: if the ratio of the two motor speeds is a simple fraction (2:1, 3:2), you get a clean, closed pattern. If the ratio is irrational (or close to it), the pattern slowly drifts and never closes, producing ever-evolving curves that are genuinely mesmerizing. Adjust the speed of either motor and the pattern morphs smoothly from one shape to another.

This is one of the simplest builds in the laser lab — two motors, two mirrors, one laser, done. No microcontroller, no code, no complex optics. Just physics, persistence of vision, and the kind of result that makes people walk into a room and forget what they were doing. In fog, the beam traces become visible in three dimensions, and the effect goes from impressive to transcendent. This build has the best effort-to-spectacle ratio of anything in this book.

## Ingredients

- [ ] Laser pointer or laser module — green is most visible, red works fine *(dollar store, electronics supplier, $2–5)*
- [ ] 2 small DC motors — different RPM ratings for immediate speed ratio variety *(salvage from toys, CD drives, fans, free)*
- [ ] 2 small mirrors — 1–2 cm square or round, glued to motor shafts *(craft store, salvaged from compact or hard drive platter, $1–2)*
- [ ] Motor speed controllers — potentiometers + transistors, or PWM motor driver modules *(electronics supplier, $2–3)*
- [ ] Power supply — batteries or USB for motors, batteries for laser *(junk drawer, free)*
- [ ] Mounting board or base — wood, cardboard, or acrylic to hold everything in position *(scrap bin, free)*
- [ ] Hot glue or cyanoacrylate — for mirror attachment *(junk drawer, $1)*
- [ ] Fog machine, incense, or vape *(party store $15, or incense $3)*

## Build Steps

1. **Mount the first motor and mirror.** Secure a small DC motor to your base board with hot glue, screws, or a bracket. Glue a small mirror flat onto the end of the motor shaft. When the motor spins, the mirror rotates and deflects any beam hitting it in a circular sweep. The mirror should be as centered on the shaft as possible to minimize wobble, but perfect centering isn't critical — slight offset actually adds interesting variation to the pattern.

2. **Mount the second motor and mirror.** Position the second motor so that the reflected beam from the first mirror hits the second mirror. The second motor should be oriented at roughly 90 degrees to the first — this gives you independent X and Y deflection. Glue a mirror to this shaft too. The beam path is: laser → mirror 1 → mirror 2 → ceiling/wall.

3. **Position the laser.** Mount the laser pointer so its beam hits the center of mirror 1. Clamp it, tape it, or glue it to the base board — it needs to stay aimed at the first mirror. The laser doesn't need to be precisely centered on the mirror, but it should hit the mirror across the full range of rotation.

4. **Align the beam path.** With both motors stationary, manually rotate each mirror to find the position where the beam successfully travels from laser → mirror 1 → mirror 2 → target surface. Adjust motor positions and angles until the beam can complete the full path. You may need to tilt motors slightly to get the geometry right. The final beam should hit the ceiling or a wall.

5. **Wire motor speed controls.** Connect each motor through a potentiometer + transistor (TIP120 or MOSFET) for speed control. Or use a PWM motor driver module. Each motor needs independent speed control — the magic of this build is in the speed ratio between the two motors. Wire each to its own pot so you can adjust them independently.

6. **Power on and observe.** Start both motors at low speed. The laser dot on the ceiling should begin tracing a pattern. As you increase speed, persistence of vision kicks in and the pattern appears as a continuous glowing line. A single line becomes a circle, then a figure-eight, then increasingly complex geometric shapes as the speed ratio changes.

7. **Experiment with speed ratios.** This is where it gets addictive. When both motors spin at the same speed, you get a circle or ellipse. At a 2:1 ratio, you get a figure-eight (Lissajous curve). At 3:2, a trefoil. At ratios that are close but not exact simple fractions, the pattern slowly rotates and evolves, never quite repeating. Slowly varying one potentiometer while the other stays fixed produces smoothly morphing patterns that are genuinely hypnotic.

8. **Add fog for the full effect.** Turn off the lights. Fill the room with fog (fog machine), haze (incense), or whatever particulate delivery system you prefer. The laser beam becomes visible as a bright line tracing through the fog in three dimensions. The flat pattern on the ceiling now has depth and volume. This is the moment where the $5 build starts looking like a $5,000 art installation.

9. **Try variations.** Tilt the motors to different angles for different pattern families. Add a third motor and mirror for 3D Lissajous patterns (the beam traces shapes in three dimensions through the fog). Use a laser module with multiple colors or switch between red and green lasers. Mount the motors on springs for additional vibration-induced variation. Tape small irregular shapes to the motor shafts instead of flat mirrors for distorted, organic patterns.

## Safety Notes

- The laser beam sweeps unpredictably through the room. Ensure all beam paths stay above head height by aiming the final reflection at the ceiling. Never aim the projection at eye level.
- Secure the laser mount so it can't fall or shift during operation. A loose laser pointing horizontally across a room is a safety hazard.
- Spinning mirrors can detach from motor shafts. Use strong adhesive and inspect the bond before running at speed. Keep your face away from the spinning mirrors.
- Fog machines can trigger smoke detectors. Disable nearby detectors during use and re-enable them when done. The fire department has better things to do than admire your spirograph.

## See Also

- [Galvanometer Laser Light Show](266-laser-galvo-show.md)
- [Laser Harp](267-laser-harp.md)
