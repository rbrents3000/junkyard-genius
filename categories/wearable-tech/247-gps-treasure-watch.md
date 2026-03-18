# #247 — GPS Treasure Watch

> An ESP32, a GPS module, and an OLED in a wrist case — a compass that always points to buried treasure.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

## What Is It?

A wrist-mounted GPS device that displays a compass arrow always pointing toward a pre-programmed set of coordinates, plus the distance remaining. Program in a geocache location, a hidden birthday present, the coordinates of your parked car, or the GPS position of anything you want to find — the watch guides you there with a persistent arrow and countdown distance.

Unlike a phone GPS app that shows a map (requiring you to interpret your position relative to streets and landmarks), the treasure watch reduces navigation to its simplest form: an arrow saying "go that way" and a number saying "this far." It's the same concept as a compass, except instead of pointing north, it points wherever you want.

The ESP32 reads GPS coordinates from a UBLOX NEO-6M module, calculates the bearing and distance to the target using the Haversine formula, reads the current heading from a magnetometer, and renders a directional arrow on the OLED screen. As you walk, the arrow swings to keep pointing at the target, and the distance counts down. When you arrive, the screen flashes a celebration animation.

Perfect for geocaching, scavenger hunts, or just making your walk to the coffee shop feel like a quest.

## Ingredients

- [ ] ESP32 development board (ESP32-S3 or C3 mini preferred for size) *(source: electronics supplier, ~$5)*
- [ ] GPS module — NEO-6M or NEO-M8N with antenna *(source: electronics supplier, ~$5)*
- [ ] OLED display, 0.96" 128x64 SSD1306 *(source: electronics supplier, ~$3)*
- [ ] Magnetometer module — HMC5883L or QMC5883L *(source: electronics supplier, ~$2)*
- [ ] LiPo battery, 3.7V 500-800mAh *(source: electronics supplier or salvaged Bluetooth earbud case, ~$3)*
- [ ] TP4056 LiPo charging module *(source: electronics supplier, ~$1)*
- [ ] Small project case or 3D-printed wrist enclosure *(source: electronics supplier or 3D printer, ~$2-$5)*
- [ ] Watch strap or wide velcro wrist band *(source: dollar store or old watch, $1-$3)*
- [ ] Small push buttons, 2 — for menu navigation *(source: electronics supplier, ~$0.50)*

## Build Steps

1. **Assemble and test the GPS module.** Wire the NEO-6M to the ESP32 via serial (TX/RX). Power the GPS module from the ESP32's 3.3V output. Upload a basic GPS sketch that reads NMEA sentences and prints latitude/longitude to the serial monitor. Take the setup outside (GPS needs sky view) and verify you get a fix. First fix can take 1-5 minutes with a cold start.

2. **Set up the OLED display.** Wire the SSD1306 OLED to the ESP32 via I2C (SDA/SCL). Use the `u8g2` or `Adafruit_SSD1306` library to draw test graphics. Verify you can draw text, lines, and filled shapes. The display will show: a large directional arrow (center), distance to target (bottom), and current mode/target name (top).

3. **Wire the magnetometer.** Connect the HMC5883L/QMC5883L to the same I2C bus as the OLED (different address). Read the magnetometer values and calculate compass heading. Calibrate the magnetometer by slowly rotating the module through 360 degrees and recording the min/max X and Y values — use these to calculate the offset and scale corrections. After calibration, the heading should read within a few degrees of actual compass bearing.

4. **Write the navigation firmware.** The core logic: (a) Read current GPS position. (b) Calculate bearing to target using `atan2(sin(dLon)*cos(lat2), cos(lat1)*sin(lat2) - sin(lat1)*cos(lat2)*cos(dLon))`. (c) Calculate distance using the Haversine formula. (d) Read current compass heading from magnetometer. (e) Subtract heading from bearing to get the relative arrow direction. (f) Draw an arrow rotated to that angle on the OLED.

5. **Add target management.** Program a small menu system using two buttons (next/select). Store 5-10 target coordinates in flash memory with names (e.g., "Geocache #42", "Parked Car", "Secret Stash"). Let the user scroll through targets and select one. Add an option to save the current GPS position as a new target (useful for marking where you parked).

6. **Build the wrist enclosure.** Fit the ESP32, GPS module (with antenna facing up/outward), OLED, magnetometer, LiPo, and charging board into a compact case. The case should be no larger than a chunky sports watch — roughly 50x50x25mm. 3D printing is ideal; a small Altoids tin also works if you can cut windows for the display and buttons. Mount the OLED so it faces up when the case is strapped to your wrist.

7. **Attach the wrist strap.** Screw, rivet, or glue the case to a watch band or wide velcro strap. The GPS antenna must face upward (toward the sky) when worn, so orient the case accordingly. The magnetometer should be as far from the LiPo and motor-containing wrist watch as possible to minimize magnetic interference.

8. **Power management.** Add code to put the ESP32 into light sleep between GPS reads (every 1-2 seconds is sufficient for walking navigation). Dim the OLED when no button has been pressed for 30 seconds. With a 500mAh battery and aggressive power management, expect 4-8 hours of active navigation. Wire the TP4056 module so you can charge the battery via micro-USB without opening the case.

9. **Field test and calibrate.** Load a target coordinate (use your front door as a test target). Walk 500 feet away and power on the watch. The arrow should point toward home and the distance should decrease as you walk back. If the arrow is consistently off by a fixed angle, adjust the magnetometer calibration offsets. Test in open areas away from large metal structures, which can skew the magnetometer.

## Safety Notes

- **GPS accuracy limitations.** Consumer GPS is accurate to about 3-10 meters. Don't rely on this device for precision navigation in dangerous terrain, whitewater, or backcountry where getting lost has serious consequences. It's a fun tool, not a survival instrument.
- **Battery in a sealed case.** The LiPo battery in a closed wrist case can overheat in direct sunlight. Don't leave the watch on a car dashboard in summer. If the case feels hot, remove it from your wrist and let it cool in shade.
- **Magnetic interference.** The magnetometer is sensitive to nearby magnets, large metal objects, and electromagnetic interference. Readings will be unreliable inside cars, near power lines, or next to metal fences. Recalibrate if you change environments significantly.

## See Also

- [HUD Glasses](245-hud-glasses.md) — another wearable navigation device, visual overlay instead of wrist-mounted
- [Heated Gloves](243-heated-gloves.md) — another wrist/hand wearable with LiPo power management
