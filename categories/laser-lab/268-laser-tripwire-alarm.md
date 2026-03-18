# #268 — Laser Tripwire Security System

> Invisible security from a $2 laser. Every spy movie you've ever watched just became a weekend project.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐ | ⭐⭐⭐ | ⭐⭐ |

## What Is It?

The concept is beautifully simple and has appeared in approximately ten thousand heist movies: a laser beam shines across a doorway or hallway to a photosensor on the other side. When someone walks through the beam, the sensor goes dark and triggers an alarm. In the movies, the lasers are always visible (and usually red) so the protagonist can do acrobatic contortions to avoid them. In reality, you can use an infrared laser that's completely invisible to the human eye, which is arguably more useful and considerably less cinematic.

A single laser-to-sensor link gives you a basic tripwire. But the real fun starts when you add mirrors. A single laser beam can bounce off multiple mirrors to create a web of invisible lines across a space — like a laser maze without the acrobatics. Break any segment and the photosensor at the end of the chain goes dark, triggering the alarm. One laser, several mirrors, complete perimeter coverage.

Add an ESP32 or ESP8266 instead of a basic Arduino and you get WiFi connectivity — which means push notifications to your phone when the beam is broken. Now you have a wireless security system that cost less than a large pizza and runs on a USB power bank. It won't replace a real security system for serious applications, but for monitoring a workshop, catching siblings entering your room, or building an elaborate laser maze for a party, it's perfect.

## Ingredients

- [ ] Laser pointer or laser module — red or infrared *(dollar store, electronics supplier, $2–5)*
- [ ] Photoresistor (LDR) or photodiode — to detect the beam *(electronics supplier, $0.50)*
- [ ] Arduino Nano, ESP32, or ESP8266 — ESP for WiFi/phone notifications *(electronics supplier, $3–8)*
- [ ] Piezo buzzer or siren module — for audible alarm *(electronics supplier, $1–3)*
- [ ] Small mirrors — 2–4 for beam routing *(craft store, makeup compact salvage, $1–3)*
- [ ] Mirror mounts — clothespins, binder clips, or 3D-printed holders *(junk drawer, free)*
- [ ] 10kΩ resistor — for the photoresistor voltage divider *(electronics supplier, $0.10)*
- [ ] USB power bank or wall adapter — for power *(junk drawer, free)*
- [ ] Small tube or shroud — for the photosensor to reject ambient light *(drinking straw, pen barrel, free)*
- [ ] Relay module or transistor (optional) — to trigger external alarms, lights, or cameras *(electronics supplier, $2)*

## Build Steps

1. **Set up the basic beam path.** Mount the laser on one side of the area you want to monitor (doorway, hallway, shelf). Mount the photosensor directly across from it. Power on the laser and aim it so the beam hits the photosensor dead center. Start with a direct line-of-sight path — no mirrors yet. Verify that the sensor reads "beam present" reliably.

2. **Build the sensor circuit.** Wire the photoresistor as a voltage divider: one leg to 5V (or 3.3V for ESP32), the other leg through a 10kΩ resistor to ground. The junction connects to an analog input on your microcontroller. When the laser hits the LDR, resistance drops and voltage rises. When the beam is blocked, resistance rises and voltage drops. Read the analog value and determine a threshold that reliably distinguishes "beam on" from "beam off."

3. **Add ambient light rejection.** Slide a short tube (drinking straw, pen barrel, or rolled black tape) over the photosensor. This blocks room light from all directions except straight ahead — where the laser is. Without this, changes in room lighting (someone turning on a light, sun moving) cause false triggers. The tube should be long enough to narrow the sensor's field of view to just the laser's direction.

4. **Program the alarm logic.** Write code that continuously reads the sensor value. When the reading drops below the threshold (beam broken), trigger the alarm — activate the buzzer, flash an LED, or send a notification. Add a small delay (100–200ms) to avoid false triggers from momentary flickers (dust particles in the beam, vibration). Add a re-arm delay after triggering so the alarm doesn't go off continuously while someone stands in the beam.

5. **Add mirror bounces for perimeter coverage.** Mount small mirrors at corners of the area you want to protect. Aim the laser at the first mirror, adjust the mirror angle so the beam bounces to the second mirror, then to the third, and finally to the photosensor. Each mirror segment creates a tripwire. One laser beam can cover an entire room perimeter with 3–4 mirrors. The alignment is fiddly — start with the first mirror and work forward, adjusting each one until the beam reaches the sensor.

6. **Add WiFi notifications (ESP32/ESP8266).** If using an ESP board, connect to your home WiFi and send push notifications when the beam breaks. Use a service like Pushover, IFTTT, or Telegram Bot API — all have simple HTTP request interfaces. A few lines of code and you get a phone buzz whenever someone crosses the beam. Include a timestamp so you know exactly when it happened.

7. **Add logging and cooldown.** Log each trigger event with a timestamp to the ESP's flash memory or an SD card. Add a configurable cooldown period (30 seconds to 5 minutes) so you don't get 47 notifications when someone walks back and forth through a doorway.

8. **Add external triggers (optional).** Wire a relay module to the alarm output to control external devices — turn on a floodlight, start recording on a camera, activate a sprinkler, or trigger a very loud siren. The relay is overkill for a bedroom alarm, but if you're protecting a workshop or garden, it's satisfying.

9. **Tune for reliability.** Test the system at different times of day (ambient light changes affect the sensor), with different beam path lengths (longer paths = weaker signal at the sensor), and with the door/window open vs. closed (air currents can shift mirror alignment over time). Adjust the threshold, tighten mirror mounts, and verify the system stays triggered during a genuine interruption but doesn't false-trigger from environmental changes.

## Safety Notes

- Even cheap laser pointers can cause eye damage with direct exposure. Mount the laser so the beam path is below knee level or above head height — never at eye level. If using mirrors, verify that no reflected beam points toward a seated or standing eye position.
- If using an infrared laser for invisible operation, remember that invisible doesn't mean safe. IR lasers cause the same eye damage as visible ones, but without the blink reflex that visible light triggers. Use extra caution during alignment — wear IR-blocking safety glasses if available.
- Secure all laser and mirror mounts so they can't shift and redirect the beam unexpectedly. A mirror that tilts 2 degrees can redirect a beam several feet at the far end.

## See Also

- [Laser Voice Communicator](265-laser-communicator.md)
- [Laser Harp](267-laser-harp.md)
