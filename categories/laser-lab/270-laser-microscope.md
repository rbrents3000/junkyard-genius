# #270 — Laser Scanning Microscope

> Confocal microscopy from a laser pointer. Your optics professor would be either impressed or concerned.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

## What Is It?

A conventional microscope illuminates an entire sample at once and uses lenses to magnify the image. A laser scanning microscope does something fundamentally different: it focuses a laser to a single point, sweeps that point across the sample, and records the reflected (or transmitted) light intensity at each position. A computer assembles these point measurements into a complete image, pixel by pixel. It's like the difference between taking a photograph and drawing a picture one dot at a time with a flashlight.

Why bother? Because a scanning approach lets you do things a regular microscope can't. The single-point illumination rejects out-of-focus light, producing sharper images with better contrast — this is the principle behind confocal microscopy, a technique that revolutionized cell biology. Commercial confocal microscopes cost $50,000–$500,000. Yours will cost about $15 and take a weekend to build. It won't match the resolution of a research instrument, but it will genuinely produce magnified images by scanning, and the process of building it teaches you more about optics than a semester of lectures.

The scanning mechanism is a small mirror mounted on a motor. As the motor spins, the mirror sweeps the reflected laser beam across the sample in one axis. You move the sample manually (or with a stepper motor from a dead printer) for the other axis. A photocell captures the reflected light intensity for each position, the Arduino digitizes it, and a Processing sketch on your computer assembles the image in real time. Watching an image build up line by line from a laser and a spinning mirror is deeply satisfying.

## Ingredients

- [ ] Laser pointer or laser module — red (650nm), low power (1–5mW) *(dollar store, $2)*
- [ ] Small DC motor — for spinning the scan mirror *(salvage from toy, CD drive, free)*
- [ ] Small mirror fragment — 5–10mm, glued to the motor shaft *(craft mirror, broken mirror, free)*
- [ ] Photocell (LDR), photodiode, or phototransistor — for detecting reflected light *(electronics supplier, $0.50–2)*
- [ ] Arduino Uno or Nano *(electronics supplier, $5)*
- [ ] Focusing lens — magnifying glass lens, or lens from a laser pointer or CD drive *(salvage, $1)*
- [ ] Sample stage — a small platform that can be moved in fine increments (micrometersish) *(printer carriage salvage, or manual slide)*
- [ ] Breadboard and jumper wires *(electronics supplier, $3)*
- [ ] Potentiometer — to control motor speed *(electronics supplier, $0.50)*
- [ ] Computer running Processing IDE — for image display *(free software)*
- [ ] Dark enclosure — cardboard box or similar to block ambient light *(recycling bin, free)*

## Build Steps

1. **Build the scanning mirror.** Glue a small mirror fragment (5–10mm square) to the shaft of a small DC motor. The mirror should be flat and mounted perpendicular to the shaft so that when the motor spins, the mirror's angle changes continuously. This sweeps the reflected laser beam across the sample. Use cyanoacrylate (super glue) and let it cure fully. Balance is less critical here than in the centrifuge build — the mirror is tiny and the speeds are modest.

2. **Set up the optical path.** Mount the laser so it hits the spinning mirror. The mirror reflects the beam downward (or sideways) toward the sample. As the motor spins, the reflected beam sweeps in an arc across the sample. The sweep width depends on the distance between the mirror and the sample — farther = wider sweep. Position the sample 2–5 cm from the mirror for a reasonable scan width.

3. **Add a focusing lens.** Place a small lens between the scanning mirror and the sample. This focuses the laser spot to a smaller point on the sample, increasing resolution. The lens from a CD/DVD drive's optical assembly works well, or use a small magnifying lens. Adjust the distance until the laser spot on the sample is as small and sharp as possible. A tighter focus = finer detail in the final image.

4. **Position the detector.** Mount the photocell or photodiode near the sample, angled to capture reflected light. You're measuring how much laser light bounces back from each point on the sample as the beam sweeps across it. Dark features reflect less; light features reflect more. For transparent samples, place the detector on the opposite side (transmitted light mode). Shield the detector from ambient light — a tube or hood helps enormously.

5. **Wire the detection circuit.** Connect the photocell as a voltage divider (photocell to 5V, junction with 10kΩ resistor to ground, junction to Arduino analog input). The voltage varies with reflected light intensity. Test by pointing the laser at different surfaces and watching the analog reading — it should vary clearly between light and dark materials.

6. **Add a line-sync signal.** To build an image, you need to know when each scan line starts. Attach a small flag (piece of tape or card) to the motor shaft that breaks an IR emitter/detector pair (or passes a Hall effect sensor + magnet) once per revolution. This "sync pulse" tells the Arduino "new scan line starting now." Without it, your image lines won't align and the picture will be scrambled.

7. **Program the Arduino.** Write code that waits for the sync pulse, then rapidly samples the analog input as the beam sweeps across the sample. Take 100–200 samples per sweep (depending on motor speed and Arduino's sampling rate). Send each line of data over serial to the computer. The motor speed determines the scan rate — use the potentiometer to adjust until you get clean, consistent sampling.

8. **Write the display software.** In Processing (or Python with matplotlib), read serial data from the Arduino. Each incoming line of data becomes one row of pixels in the image. Map the analog values to grayscale (low value = dark pixel, high value = bright pixel). Display each row as it arrives, building the image from top to bottom. After all rows are collected, you have a complete microscope image.

9. **Scan the Y axis.** The spinning mirror handles one axis (X). For the other axis (Y), you need to move the sample incrementally between scan lines. The simplest approach: mount the sample on a manual linear slide and advance it slightly between each scan line. For automation, use a stepper motor and lead screw from a dead printer to advance the sample a fixed distance after each line. The Arduino can control both the scanning data acquisition and the Y-axis stepper.

10. **Image your first sample.** Start with high-contrast subjects: text printed on paper, the edge of a coin, a leaf vein structure, or a circuit board trace. These have strong reflectivity differences that produce clear images even without perfect optics. Once the system works, try biological samples — onion skin cells, pollen grains, or insect wings mounted on a glass slide.

## Safety Notes

- Low-power laser pointers (Class IIIa, <5mW) are relatively safe but still should not be aimed at eyes. The spinning mirror creates a fanned beam — ensure the scan plane doesn't intersect eye level. Enclose the optical path in a box for best results (blocks ambient light AND contains the beam).
- The motor should be securely mounted. A mirror fragment coming loose from a spinning motor becomes a sharp, fast-moving projectile. Use strong adhesive and start at low motor speeds.
- Work in a dimly lit or dark environment for best image quality. The detector is sensitive to ambient light, which adds noise. An enclosure around the entire optical path (cardboard box with holes for laser input and sample access) dramatically improves results.

## See Also

- [Laser Voice Communicator](265-laser-communicator.md)
- [Blu-Ray Laser Cutter](269-blu-ray-laser-cutter.md)
