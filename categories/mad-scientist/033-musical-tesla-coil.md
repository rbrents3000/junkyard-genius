# #033 — Musical Tesla Coil

> A flyback transformer driven at audio frequencies turns electrical arcs into a speaker. Lightning that plays the Imperial March.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

## What Is It?

A plasma arc is a channel of superheated ionized air. When you modulate the power driving that arc at audio frequencies, the rapid heating and cooling of the air creates pressure waves — sound. The arc literally becomes a speaker with no cone, no magnet, and no moving parts. Just lightning that sings.

A flyback transformer from an old CRT TV generates the high voltage needed to sustain an arc. A MOSFET driver circuit modulates the flyback at frequencies determined by an audio input signal. Feed it music from your phone, and the arc dances and crackles in time with the beat, producing recognizable audio from pure electricity. The sound quality is lo-fi and buzzy — closer to a kazoo than a hi-fi speaker — but the visual spectacle of a singing arc of electricity is absolutely mesmerizing.

This is technically a solid-state Tesla coil (SSTC) in its simplest form. True musical Tesla coils (DRSSTCs) are more complex, but the flyback version captures the same magic at beginner-level difficulty.

## Ingredients

- [ ] Flyback transformer — from a dead CRT TV or monitor *(e-waste, thrift store)*
- [ ] MOSFET — IRFP250N or similar, rated for 30A+ *(electronics supplier, ~$3)*
- [ ] MOSFET gate driver — IR2110 or a simple 555 timer circuit *(electronics supplier)*
- [ ] Audio input circuit — 3.5mm jack + coupling capacitor + optocoupler for isolation *(electronics supplier)*
- [ ] Heatsink — large aluminum heatsink for the MOSFET *(dead PC, electronics bin)*
- [ ] 12V-24V power supply — 5A+ *(old laptop charger, ATX PSU)*
- [ ] Breakout point — a sharp needle or bolt on the flyback's HV output *(hardware store)*
- [ ] Grounded target electrode — a metal sphere or blunt rod, 1-2" from the breakout point *(hardware store)*
- [ ] Audio source — phone, laptop, MP3 player *(already own)*
- [ ] Perfboard or PCB for the driver circuit *(electronics supplier)*
- [ ] High-voltage wire — silicone-insulated *(electronics supplier)*

## Build Steps

1. **Salvage the flyback.** Remove the flyback transformer from a dead CRT TV. It's the component with the thick red wire going to the CRT's suction cup anode. Desolder or cut it free from the circuit board. Identify the primary pins — there are usually 2-4 pins on the bottom for the primary winding.
2. **Build the driver circuit.** Wire a basic MOSFET driver: the MOSFET's drain connects to one end of the flyback primary, the other end of the primary connects to the positive power supply, and the MOSFET's source goes to ground. The gate is driven by a square wave — either from a 555 timer oscillator or a dedicated gate driver IC. The oscillation frequency should be in the 20-50 kHz range to match the flyback's resonant frequency.
3. **Find the resonant frequency.** Power up at low voltage (12V) and adjust the oscillation frequency until the flyback produces the longest, fattest arc from its high-voltage output. This is the resonant frequency of the flyback's core. Lock this frequency in — this is your carrier frequency.
4. **Add audio modulation.** Feed an audio signal from your phone through a coupling capacitor into the gate driver circuit. The audio signal modulates the amplitude or frequency of the carrier, varying the arc intensity in time with the music. An optocoupler between the audio source and the driver protects your phone from high-voltage feedback.
5. **Build the arc gap.** Attach a sharp point (needle or bolt) to the flyback's high-voltage output. Position a grounded electrode 1-2 inches away. The arc should jump between them continuously when the driver is running. Adjust the gap distance — too far and the arc sputters out, too close and it's a short with no visible arc.
6. **Tune the audio response.** Play music and listen. The arc should visibly dance and audibly reproduce the sound. Adjust the modulation depth — too much and the arc extinguishes on quiet passages, too little and the sound modulation is inaudible. Mid-range frequencies (vocals, guitar) reproduce best. Deep bass is mostly felt as vibration in the arc rather than heard.
7. **Mount everything.** Secure the flyback and driver circuit to a non-conductive base (wood, acrylic). Ensure the high-voltage output is elevated and away from the low-voltage electronics. Keep the audio source and its cable well away from the arc — electromagnetic interference from the arc will inject noise into nearby electronics.
8. **Add a kill switch.** Mount a clearly labeled power switch that cuts the DC supply to the driver. Do not rely on unplugging as the primary shutdown method.

## Safety Notes

- The flyback output produces 10-30kV at low current. While the current is typically not lethal, a shock from a flyback is extremely painful and can cause involuntary muscle contraction that throws you into other hazards. Never touch the high-voltage output or come within arcing distance while the unit is powered. Stand clear.
- The arc produces UV radiation, ozone, and nitrogen oxides. Prolonged exposure causes eye irritation and respiratory discomfort. Operate in a well-ventilated area. Don't stare directly at the arc for extended periods.
- The MOSFET and flyback primary handle high current and generate significant heat. Mount the MOSFET on a proper heatsink. If the MOSFET fails short, the flyback primary becomes a dead short across the power supply — include a fuse in the power supply line.

## See Also

- [Jacob's Ladder](034-jacobs-ladder.md)
- [Levitating Plasma Speaker](../unholy-combos/055-levitating-plasma-speaker.md)
