# #021 — CRT Oscilloscope Visualizer

> Feed audio directly into a CRT TV's deflection coils and turn it into a real-time music visualizer from the 1970s.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |

## What Is It?

A CRT (cathode ray tube) TV creates images by steering an electron beam across a phosphor-coated screen using electromagnetic deflection coils. Normally, complex signals from the TV tuner control these coils. But if you disconnect the original electronics and feed audio signals directly into the deflection coils, the electron beam traces patterns on the screen that correspond to the audio waveform. Play music and the beam draws dancing, flowing shapes — circles become spirals, bass hits make the pattern expand, and stereo separation creates complex Lissajous figures.

This is essentially what an oscilloscope does, but on a much larger screen and with the lo-fi charm of phosphor glow and analog warmth. The result is a vintage-looking music visualizer that responds with zero latency to every nuance of the audio — because it IS the audio, directly controlling the beam position.

## Ingredients

- [ ] CRT TV or monitor, any size *(source: electronics recycler, thrift store, or curb, free-$5)*
- [ ] Audio amplifier — small stereo amp or two-channel amp board *(source: thrift store or online, ~$5-10)*
- [ ] Audio source with 3.5mm output *(source: phone, computer, already own)*
- [ ] 3.5mm audio splitter cable (stereo to dual mono) *(source: dollar store or online, ~$2)*
- [ ] Insulated wire for connections *(source: hardware store or scrap)*
- [ ] Insulated screwdriver *(source: around the house)*
- [ ] Rubber gloves and mat *(source: hardware store)*

## Build Steps

1. **Discharge the CRT.** THIS IS MANDATORY. Unplug the TV and let it sit for at least 24 hours. Then, wearing rubber gloves and standing on a rubber mat, discharge the anode cap (the suction cup on the CRT with the thick red wire). Connect a high-value resistor (10M ohm) between the anode cap terminal and the chassis ground, using an insulated screwdriver to lift the cap edge. Do this several times. CRTs can hold 25,000+ volts for months.

2. **Open the TV and locate the deflection yoke.** The deflection yoke is the funnel-shaped assembly of coils wrapped around the neck of the CRT tube. It has two sets of coils — horizontal deflection and vertical deflection. Find the wires from the yoke that connect to the main board. There will be at least 4 wires (2 per axis).

3. **Disconnect the yoke from the main board.** Disconnect (desolder or cut) the deflection yoke wires from the TV's main circuit board. You're taking over deflection control. Leave the CRT's heater, high-voltage, and brightness circuits connected — you still need those to light up the screen. Mark which wire pairs go to horizontal and which go to vertical.

4. **Connect audio to the deflection coils.** Wire the left audio channel (amplified) to the horizontal deflection coil pair, and the right audio channel (amplified) to the vertical deflection coil pair. This creates an X-Y display where the electron beam position is controlled by the stereo audio signal.

5. **Set up the amplifier.** Connect your audio source to the amplifier input. Split the stereo signal so left goes to horizontal amp and right goes to vertical amp. The amp needs to deliver enough current to drive the deflection coils (they're inductive loads — a speaker amp works because it's designed for inductive loads).

6. **Power up carefully.** With the audio playing at LOW volume, turn on the CRT (keep the original power supply connected for the CRT heater and high voltage). You should see a dot or small pattern on the screen. If you see nothing, the brightness may need adjustment or the beam may be deflected off-screen — reduce the audio level.

7. **Adjust and play music.** Increase the audio volume slowly. The pattern on the screen will grow. With stereo music, you'll see complex, evolving shapes — mono content produces diagonal lines, stereo separation creates circles and ovals, and complex mixes create beautiful abstract patterns. Adjust the amp gain so the pattern fills most of the screen without going off the edges.

8. **Tune for best visuals.** Different music genres produce different patterns. Electronic music with hard-panned stereo elements creates the most dramatic geometric shapes. Ambient music creates smooth, flowing forms. Try playing dedicated oscilloscope music — artists create tracks specifically designed to draw images on X-Y displays.

## Safety Notes

- **CRTs store lethal charge.** The anode can hold 25,000V+ for months after unplugging. Step 1 (discharge) is not optional — skipping it can kill you. Always discharge multiple times and verify with a multimeter if possible. If you're not comfortable with high-voltage electronics, find someone experienced to help.
- **Don't break the CRT.** The tube is under vacuum. A broken CRT implodes violently, throwing glass shrapnel. Handle the TV carefully. Don't drop it, don't hit the tube, and don't remove the tube from the housing unless you know what you're doing.
- **The CRT produces X-rays at high voltage.** This is normal and the leaded glass of the tube shields it, but don't remove the tube from its housing and operate it bare. Keep the shielding intact.

## See Also

- [Ferrofluid Speaker](../sound-and-music/011-ferrofluid-speaker.md) — another analog music visualization method
- [Plasma Speaker](../sound-and-music/008-plasma-speaker.md) — audio driving an electrical phenomenon for a visual+audio experience
