# #049 — Campfire Thermoelectric Charger

> A Peltier module sandwiched between a hot side (campfire) and a cold side (water pot) generates enough electricity to charge your phone. Power from temperature difference.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐ |

## What Is It?

The Seebeck effect: when two sides of a thermoelectric module (Peltier module, technically a TEC/TEG) are at different temperatures, it generates a voltage. The greater the temperature difference, the higher the voltage and power output. A single module with a 150°C temperature differential produces roughly 2-4V at 1-2 watts — enough to trickle-charge a phone through a USB boost converter.

Peltier modules are available from dead wine coolers, mini-fridges, and portable car coolers. They're the solid-state devices with no moving parts — just a thin ceramic square with wires coming off it. Run electricity through one and it pumps heat (that's how the cooler works). Run heat through one and it generates electricity (that's the Seebeck effect). Same device, reversed function.

Mount one between a metal plate sitting on hot coals and a pot of cold water, and you've got an off-grid phone charger that runs on any heat source: campfire, wood stove, candle, even focused sunlight.

## Ingredients

- [ ] Peltier/TEG module — TEC1-12706 or similar (TEG-specific modules are more efficient but harder to find) *(dead mini-fridge, wine cooler, electronics supplier, ~$5)*
- [ ] Aluminum heat sink — large finned heatsink for the cold side *(dead PC, electronics bin)*
- [ ] Aluminum plate — 3"x3" or larger, for the hot side, 1/4" thick *(hardware store, scrap metal)*
- [ ] Thermal paste — for both interfaces *(electronics supplier, hardware store)*
- [ ] USB boost converter — takes variable low voltage in, outputs steady 5V USB *(electronics supplier, ~$3)*
- [ ] Water container — small metal pot or cup that sits on the cold-side heatsink *(kitchen, camping gear)*
- [ ] Bolts and springs — to clamp the sandwich together with consistent pressure *(hardware store)*
- [ ] Insulating gasket — high-temperature silicone or ceramic fiber, to prevent heat bypass around the module *(hardware store)*
- [ ] Wire — 18 AWG, for connecting the module to the boost converter *(hardware store)*

## Build Steps

1. **Assemble the hot side.** The aluminum plate acts as the heat collector. It sits directly on coals or in a fire. Apply thermal paste to one face and press it against one side of the Peltier module. The plate needs enough thermal mass to maintain temperature without wild fluctuations.
2. **Assemble the cold side.** Apply thermal paste to the other side of the module and press the heatsink against it. The heatsink's fins should face upward, away from the fire. The pot of cold water sits on top of the heatsink fins, providing a cold reservoir. The larger the temperature difference between hot and cold sides, the more power you get.
3. **Insulate the edges.** Wrap the sides of the module sandwich with high-temperature insulating material. You don't want heat conducting around the module from hot plate to heatsink — all heat transfer should go through the Peltier module. This insulation step dramatically improves efficiency.
4. **Clamp the assembly.** Use bolts through the corners of the plate and heatsink (with the module sandwiched between) to apply firm, even pressure. Spring washers maintain pressure as the materials expand and contract with temperature. Good thermal contact is critical — a loose sandwich produces far less power.
5. **Wire the boost converter.** Connect the Peltier module's output wires to the input of the USB boost converter. The module's output will be roughly 1-4V depending on temperature differential. The boost converter steps this up to a steady 5V for USB charging. Polarity matters — if you get it backwards, the voltage will be reversed. Check with a multimeter.
6. **Test without fire first.** Place the hot side on a pot of boiling water and pack ice on the cold side. Measure voltage output with a multimeter. You should see 1-3V open circuit. Connect the boost converter and verify 5V USB output. Plug in a phone and confirm charging begins.
7. **Deploy on a campfire.** Place the hot-side plate on a bed of coals (not in open flame — direct flame is too hot and can crack the ceramic in the Peltier module). Fill the pot on the cold side with cold water. Give it 2-3 minutes to reach temperature equilibrium and start generating power. The water will gradually warm — replace it periodically to maintain the temperature differential.

## Safety Notes

- The hot side plate will be several hundred degrees when sitting on coals. Handle only with heat-resistant gloves or tongs. Let it cool completely before disassembly. The cold side also gets quite warm over time.
- Peltier modules have a maximum operating temperature (typically 200-300°C). Exceeding this destroys the module — the solder joints between the bismuth telluride pellets melt. Keep the hot side out of direct flame and monitor for overheating. If the module suddenly stops producing voltage, it's likely been cooked.
- USB boost converters can be damaged by reverse polarity. Verify polarity with a multimeter before connecting the converter. Consider adding a diode in series to protect the converter.

## See Also

- [Bicycle Generator](050-bicycle-generator.md)
- [DIY Powerwall](052-diy-powerwall.md)
