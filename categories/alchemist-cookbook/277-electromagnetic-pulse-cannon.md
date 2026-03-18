# #277 — Electromagnetic Pulse Cannon (Localized)

> A capacitor bank dumps into a hand-wound coil and fires a focused electromagnetic pulse that bricks electronics within a few feet. The most beautifully destructive thing you can build from junk.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

## What Is It?

An electromagnetic pulse is a burst of electromagnetic energy that induces voltage spikes in nearby conductors — circuit traces, wires, antenna leads — frying the delicate semiconductors connected to them. Nuclear weapons produce EMPs as a side effect, but you don’t need a warhead. You just need a very large current changing very quickly through a coil. That’s it. That’s the whole physics. A capacitor bank provides the “large current,” a spark gap switch provides the “very quickly,” and a coil shaped into a directional antenna focuses the pulse in one direction instead of radiating in all directions.

The build centers around a bank of microwave oven capacitors (or camera flash capacitors for a lower-voltage version) wired in parallel for maximum current delivery. A spark gap switch connects the bank to a flat spiral coil wound from heavy copper wire. When the spark gap fires, the capacitors dump their entire charge through the coil in microseconds. The rapidly changing current produces an intense, short-duration magnetic field pulse. Any electronics within the field — phones, calculators, LED displays, microcontrollers — get induced voltages on their internal traces that exceed their semiconductor ratings. The chips die. Permanently.

The effective range is short — we’re talking a few feet at most with junkyard components. This isn’t going to take down a power grid or disable a car (despite what movies suggest). But it will reliably kill a calculator at arm’s length, scramble a cheap radio, and reset digital clocks. The real value is understanding the physics. Every EMP weapon, from military e-bombs to the hypothetical nuclear HEMP attack, works on exactly this principle. You’re just building the desktop version.

## Ingredients

- [ ] MOT capacitors — 2100V, ~1µF, quantity 4-6 *(dead microwaves, free)*
- [ ] Spark gap switch — tungsten electrodes in adjustable mount *(TIG rods + DIY mount, ~$10)*
- [ ] Heavy copper wire — 8-10 AWG solid, about 30 feet for the coil *(hardware store, ~$15)*
- [ ] Coil form — 12-inch diameter disc of HDPE, plywood, or acrylic *(scrap bin, ~$5)*
- [ ] MOT or NST — for charging circuit *(dead microwave or neon sign, free-$20)*
- [ ] HV diode — microwave rectifier diode *(dead microwave, free)*
- [ ] Bleeder resistors — 10MΩ 2W across each capacitor *(electronics store, ~$2)*
- [ ] Key switch — for arming the charge circuit *(~$5)*
- [ ] Momentary trigger — heavy-duty pushbutton or relay *(~$5)*
- [ ] Enclosure — wooden box or PVC pipe housing *(scrap, ~$5)*
- [ ] Cheap electronics for targets — dollar store calculators, LED toys *(dollar store, ~$5)*

## Build Steps

1. **Build the capacitor bank.** Wire 4-6 MOT capacitors in parallel on an insulating board. Solder bleeder resistors across each one. This bank stores serious energy — treat it with extreme respect at every stage. Add banana jack terminals for the charging input and discharge output.

2. **Build the charging circuit.** Wire a MOT or neon sign transformer through a HV diode to create a half-wave rectifier. Add a 1kΩ 50W current-limiting resistor in series. Connect the rectified output to the capacitor bank’s charging terminals. Wire the mains input through a key switch. The bank should reach full charge in 5-10 seconds.

3. **Wind the EMP coil.** This is the antenna. On a flat disc form, wind the heavy copper wire in a flat Archimedean spiral — start from the center and spiral outward, keeping turns tight with about 3mm spacing. You want 8-12 turns total. The flat spiral shape produces a directional field that projects outward from the face of the coil. Secure the turns with epoxy or cable ties.

4. **Build the spark gap switch.** Mount two tungsten electrodes in an adjustable holder with about 3mm initial spacing. This switch connects the capacitor bank to the coil. When the voltage across the gap exceeds the breakdown voltage of air (~3kV/mm), the gap fires and the capacitors dump through the coil. The gap spacing controls the firing voltage — wider gap means the caps charge higher before discharge, giving a more powerful pulse.

5. **Wire the discharge circuit.** Connect the capacitor bank through the spark gap to the coil. Use heavy-gauge wire (10 AWG minimum) with the shortest possible leads. Every inch of wire in the discharge path adds inductance that slows the current rise and weakens the pulse. Solder all connections — no alligator clips or screw terminals in the high-current path.

6. **Add the trigger.** You can self-trigger by letting the caps charge until the spark gap breaks down naturally, or add a trigger electrode to the gap. A third electrode (a thin wire near the gap) connected through a pushbutton to a small trigger capacitor can initiate breakdown at a lower voltage, giving you manual control over when the pulse fires.

7. **Enclose and label.** Mount everything in a sturdy enclosure with the coil face exposed at one end. The coil should be the “barrel.” Label with high-voltage warnings. Add a handle if you want the mad scientist cannon aesthetic. Route the trigger button to a comfortable position.

8. **Test on sacrificial targets.** Set up a cheap calculator or LED toy on a table. Charge the bank, point the coil at the target from about 12 inches away, and fire. The target should die — display goes blank, stops responding to buttons. If nothing happens, move closer or add more capacitors. Effective range depends on total stored energy and coil geometry.

## Safety Notes

- This device stores lethal electrical energy. The capacitor bank can kill you. Follow all high-voltage safety protocols: discharge before handling, one-hand rule, never work alone, bleeder resistors on every capacitor.
- The EMP will destroy any unshielded electronics in range. Keep your phone, laptop, and anything you value far away from the business end. Seriously — put them in another room.
- Using an EMP device against electronics you don’t own is illegal in most jurisdictions. This is for educational demonstration on your own equipment only.
- The spark gap produces UV radiation, ozone, and a loud crack. Wear eye protection and use in ventilated areas.
- Check local RF emissions regulations. A broadband electromagnetic pulse is technically an unlicensed radio transmission, and a powerful one at that.

## See Also

- [Capacitor Bank Plasma Igniter](230-capacitor-bank-plasma-igniter.md)
- [Electromagnetic Firework Launcher](229-electromagnetic-firework-launcher.md)
