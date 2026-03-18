# #225 — Seat Heater Sous Vide

> Flexible car seat heater element + PID temperature controller = a precision sous vide cooker that holds temperature within one degree.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐ | ⭐⭐⭐ | ⭐⭐ |

## What Is It?

Car seat heaters are thin, flexible resistance heating elements sandwiched between fabric layers. They're designed to distribute heat evenly across a large area and run on 12V at 40-60 watts — warm enough to heat a seat, not hot enough to burn skin. That gentle, distributed heat profile is almost exactly what sous vide cooking requires: a water bath held at a precise temperature (typically 130-165°F) for hours. Wrap the seat heater element around the outside of an insulated container, add a PID temperature controller with a waterproof thermocouple, and you have a sous vide cooker that holds temperature within a degree. Commercial sous vide circulators cost $80-200. This one costs the price of a PID controller ($15) and a junkyard seat heater (free). The heater's low wattage means it heats up slowly, but once the water reaches temperature, the PID barely has to cycle the element on and off. The thermal mass of the water does most of the regulation work.

## Ingredients

- [ ] Car seat heater element — the flexible heating pad from under the seat upholstery *(junkyard, any heated seat vehicle)*
- [ ] PID temperature controller — STC-1000 or similar *(electronics supplier, ~$15)*
- [ ] Waterproof thermocouple or thermistor — for the PID, submerged in water *(included with PID or ~$5)*
- [ ] Insulated container — a cooler, insulated pot, or any container you can wrap with the heater *(existing or thrift store)*
- [ ] 12V power supply — 5A+ rated for continuous duty *(electronics supplier, ~$10)*
- [ ] Relay — if the PID doesn't have a built-in relay, use a 12V relay rated for the heater's current *(~$3)*
- [ ] Aquarium pump (optional) — for water circulation *(pet store, ~$8)*
- [ ] Vacuum-seal bags — for the food *(grocery store)*
- [ ] Aluminum foil or insulation wrap — to cover the water surface and reduce heat loss *(hardware store)*

## Build Steps

1. **Extract the seat heater.** Remove the seat from the car and peel back the upholstery to find the heating element. It's a thin, flat pad with two wires coming out. Carefully remove it without tearing the element. Test it with 12V — it should get warm to the touch within 30 seconds.
2. **Prepare the cooking container.** Use an insulated container — a small cooler or an insulated pot is ideal. The better the insulation, the less work the heater has to do. A bare metal pot will work but you'll lose more heat to the environment.
3. **Wrap the heater element.** Wrap the flexible seat heater around the outside of the container, covering as much surface area as possible. Secure it with heat-resistant tape or aluminum tape. The heater should be in direct contact with the container wall for maximum heat transfer. If the container is plastic, the heater's low wattage won't melt it — seat heaters are designed to contact skin safely.
4. **Insulate the outside.** Wrap the heater and container in insulation — fiberglass pipe insulation, bubble wrap, or even old towels work. The goal is to keep heat in the water, not radiate it into the room.
5. **Install the PID controller.** Mount the PID controller (like an STC-1000) in a project box or just set it up nearby. Wire the thermocouple probe through a hole in the container lid so it's submerged in the water. Wire the PID's output to control the 12V power to the seat heater element via a relay.
6. **Set the temperature.** Program the PID controller with your target temperature. For a medium-rare steak, set 130°F. For chicken breast, 150°F. The PID will cycle the heater on and off to maintain the setpoint. Fill the container with water at roughly the target temperature (use hot tap water to speed up initial heating).
7. **Add circulation (optional).** A small aquarium pump placed in the water bath circulates water past the food and the thermocouple, eliminating hot and cold spots. This isn't strictly necessary for a small container but improves precision.
8. **Cook.** Seal your food in a vacuum bag or a zip-lock bag with the air pressed out. Submerge it in the water bath. Cover the surface with plastic wrap or aluminum foil to reduce evaporation and heat loss. Set a timer — most sous vide cooks run 1-4 hours depending on the protein and thickness.

## Safety Notes

- The seat heater element runs on 12V DC, which is safe from an electrical shock perspective. However, keep all electrical connections (PID, relay, power supply) away from water and steam. Use a GFCI outlet if using an AC-to-DC power supply plugged into mains power.
- Food safety requires holding temperature above 130°F for the duration of the cook. Verify your thermocouple readings against a known-accurate kitchen thermometer before trusting the PID. An inaccurate sensor could hold the water at an unsafe temperature, creating a bacteria incubator instead of a cooker.

## See Also

- [Fermentation Chamber](../fridge-and-cooling/092-fermentation-chamber.md)
- [Thermoelectric Charger](../power-and-energy/049-campfire-thermoelectric-charger.md)
