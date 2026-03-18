# #245 — HUD Glasses

> A micro OLED, a prism, and a Pi Zero in a glasses frame — DIY Google Glass with notifications and nav for $25.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

## What Is It?

A heads-up display built into a pair of glasses, using a micro OLED screen reflected off a small prism or beam splitter into one eye, driven by a Raspberry Pi Zero W that pulls notifications, navigation directions, and custom data from your phone via Bluetooth. You see floating text and icons overlaid on the real world, Iron Man style, for about $25 in parts.

Google Glass was a $1,500 product that did essentially this: put a small transparent display in your field of vision. The optical principle is simple — a tiny OLED screen projects an image onto a partially reflective surface (prism, beam splitter, or angled glass) positioned in front of one eye. Your eye focuses on the reflected image while simultaneously seeing through the partially transparent surface to the real world. The brain composites both views, and you perceive the display content floating in space.

The Pi Zero W handles the computing — it connects to your phone over Bluetooth, receives notifications, and renders them as text on the OLED. Navigation apps can push turn-by-turn directions. The whole system is powered by a small LiPo battery and fits in a chunky glasses frame or a small box mounted to the temple arm.

## Ingredients

- [ ] Micro OLED display, 0.96" or 0.66" SSD1306 or similar *(source: electronics supplier, ~$4)*
- [ ] Small prism, beam splitter cube, or half-silvered glass (10-15mm) *(source: electronics supplier, old optics equipment, or craft store, ~$3-$5)*
- [ ] Raspberry Pi Zero W *(source: electronics supplier, ~$10)*
- [ ] LiPo battery, 3.7V 500-1000mAh *(source: electronics supplier or salvaged bluetooth speaker, ~$3)*
- [ ] LiPo charging board (TP4056) *(source: electronics supplier, ~$1)*
- [ ] Chunky glasses frame or safety glasses *(source: dollar store or thrift store, $1-$3)*
- [ ] Thin flexible ribbon cable or enameled wire *(source: electronics supplier, ~$2)*
- [ ] Sugru or epoxy putty for custom mounting *(source: hardware store, ~$5)*
- [ ] MicroSD card for Pi OS *(source: junk drawer or electronics supplier, ~$3)*

## Build Steps

1. **Set up the Pi Zero W.** Flash Raspberry Pi OS Lite to a MicroSD card and configure WiFi and Bluetooth. Install Python and the necessary libraries: `luma.oled` for driving the OLED display, `dbus-python` or a Bluetooth notification listener for receiving phone notifications. Test the OLED by displaying "Hello World" over I2C.

2. **Build the optical assembly.** This is the trickiest part. Mount the micro OLED screen facing upward or sideways on the glasses temple arm. Position the prism or beam splitter at a 45-degree angle in front of one lens, so it catches the OLED's image and reflects it toward your eye. The prism needs to be partially transparent so you can still see through it. A beam splitter cube is ideal; a small piece of half-silvered acrylic or glass from a teleprompter works too.

3. **Align the optics.** With the OLED displaying test text, look through the prism and adjust the angle and distance until the text appears focused and readable. The OLED should be roughly at the focal distance of your eye (about 12-18 inches equivalent via the reflection). If the text is too small or blurry, experiment with a small magnifying lens between the OLED and the prism to enlarge and focus the virtual image.

4. **Mount everything to the frame.** Using Sugru, epoxy putty, or a 3D-printed bracket, permanently mount the OLED and prism assembly to the glasses. The OLED sits on the outside of the temple arm. The prism sits at the edge of one lens. Route the ribbon cable from the OLED along the temple arm to the Pi Zero. Keep the weight balanced — counterweight the other temple arm if needed.

5. **Mount the Pi and battery.** The Pi Zero W and LiPo can sit in a small case clipped to your belt, in a jacket pocket, or (if you're brave) mounted directly to the back of the glasses frame. Belt/pocket mounting is more practical — a cable runs up to the glasses. Wire the LiPo through the TP4056 charging board to the Pi's 5V input (via a boost converter if needed).

6. **Write the notification software.** Write a Python script that runs on the Pi and: (1) Connects to your phone via Bluetooth using the ANCS (Apple) or GATT notification profile (Android). (2) When a notification arrives, displays the app name and message text on the OLED for a few seconds. (3) Scrolls long messages. (4) Shows the time when idle. Libraries like `pybluez` and `dbus` handle the Bluetooth side.

7. **Add navigation (optional).** For turn-by-turn directions, write a companion app or use Tasker (Android) to push navigation instructions over Bluetooth serial to the Pi. The Pi displays arrows (left, right, straight) and distance to the next turn. Even simple text-based directions are useful when you don't want to look at your phone.

8. **Calibrate and test.** Wear the glasses for extended periods to test comfort, readability, and battery life. Adjust the OLED brightness so it's visible in daylight but not blinding at night. A 500mAh LiPo should run the Pi Zero W and OLED for 2-4 hours depending on display activity. Add a power button to the circuit for easy on/off.

## Safety Notes

- **Do not wear while driving or cycling.** A display in your field of vision is a distraction. This is for walking, standing, or sitting use only. Many jurisdictions have laws against HUD devices while operating vehicles.
- **Eye strain.** Focusing on a near-field display in one eye while the other eye focuses at distance can cause eye strain, headaches, and nausea — especially with prolonged use. Take 15-minute breaks every hour. If you experience persistent double vision or headaches, stop using the device.
- **Social perception.** People may not realize you're wearing a computer. Be mindful of privacy concerns — bystanders may assume you're recording them, even if there's no camera. Consider adding a visible indicator LED that shows when the device is active.

## See Also

- [LED Mask](244-led-mask.md) — another face-mounted display, optimized for spectacle instead of information
- [GPS Treasure Watch](247-gps-treasure-watch.md) — another wearable with GPS and display, on the wrist instead of the face
