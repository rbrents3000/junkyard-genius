# #104 — Cold Spark Machine

> Titanium powder heated and launched upward creates dazzling sparks that won't burn skin or set anything on fire.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |

## What Is It?

Cold spark machines are the secret behind the indoor pyrotechnics you see at concerts, weddings, and award shows. They launch tiny granules of titanium powder through a heating element that makes them glow brilliantly — but the sparks cool almost instantly and won't burn skin, set clothes on fire, or damage ceilings. Commercial cold spark machines cost $300-500 each. The core technology is straightforward: a heating element, a motorized feed mechanism, and titanium composite powder. Build your own for a fraction of the cost and suddenly every backyard party looks like a stadium concert.

## Ingredients

- [ ] Titanium composite powder (Ti granules) — specifically rated for cold spark machines *(specialty pyro supplier, online)*
- [ ] Nichrome heating coil — 20-gauge, shaped into a small chamber *(electronics supplier)*
- [ ] Small DC motor with impeller or fan blade — to launch the heated granules upward *(salvaged from old appliances)*
- [ ] Steel or aluminum tube — 2-3 inch diameter, 12-18 inches tall, acts as the launch tube *(hardware store)*
- [ ] Hopper/funnel — feeds granules to heating element *(sheet metal or 3D printed)*
- [ ] 12V power supply — old laptop charger *(junk drawer)*
- [ ] MOSFET or relay — to control heating element *(electronics supplier)*
- [ ] Toggle switch — master power *(electronics supplier)*
- [ ] Arduino or Pi — for DMX/remote control (optional) *(electronics supplier)*
- [ ] Steel base plate — keeps the unit stable *(hardware store)*

## Build Steps

1. **Build the heating chamber.** Coil nichrome wire into a small basket or cup shape, roughly 1 inch diameter. This is where the titanium granules will momentarily contact the hot wire before being launched upward. Mount it inside the base of your steel tube.
2. **Create the feed mechanism.** Mount a small funnel or hopper above the heating element. The granules need to fall by gravity onto the hot coil at a controlled rate. A small vibration motor on the hopper helps maintain consistent flow.
3. **Install the launch fan.** Mount a small DC motor with an impeller blade below and angled toward the heating chamber. When the motor spins, it creates an upward air current through the tube that carries the glowing granules upward.
4. **Wire the power circuit.** Connect the nichrome coil through a MOSFET to the 12V supply. The MOSFET gate connects to your control switch or Arduino. Wire the fan motor separately so you can run them independently during testing.
5. **Build the launch tube.** A steel tube mounted vertically above the heating chamber directs the sparks straight up. The tube should be open at the top and have air intake holes at the bottom for the fan to draw through.
6. **Mount everything to the base plate.** The unit needs to be heavy and stable at the bottom. A steel plate with rubber feet prevents tipping. The center of gravity must be well below the launch tube opening.
7. **Test with low power.** Start with the fan running and the heater at reduced voltage (use a variable power supply or PWM). Drop a few granules in by hand to verify they glow and launch without sputtering or clumping.
8. **Calibrate the flow rate.** Adjust the hopper feed rate and fan speed until you get a consistent fountain of sparks. Too many granules = clumping and dull sparks. Too few = sparse effect. The sweet spot produces a shower 4-8 feet tall.
9. **Add remote control.** Wire the MOSFET gate to an Arduino or Pi GPIO pin. Control via button, DMX signal, or even music-reactive code that fires the machine on beat drops.

## Safety Notes

- Use ONLY titanium composite powder rated for cold spark machines. Other metal powders (aluminum, magnesium, iron) burn much hotter and are genuinely dangerous. Titanium cold spark granules are engineered to cool rapidly.
- Even though the sparks are "cold," the heating element itself is extremely hot. Never reach into the machine while it's powered on. Always use the master kill switch before any adjustments.
- Operate in well-ventilated areas. While the sparks themselves are cool, the heating element can produce fumes. Not suitable for small enclosed rooms without ventilation.

## See Also

- [Fireworks Sequencer](../pi-and-arduino/121-fireworks-sequencer.md)
- [Steel Wool Photography](113-steel-wool-photography.md)
