# #246 — Motion Capture Glove

> Flex sensors, an IMU, and an ESP32 on your hand — play invisible instruments with finger gestures.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

## What Is It?

A glove fitted with flex sensors on each finger and an IMU (inertial measurement unit) on the back of the hand, connected to an ESP32 that translates hand gestures into MIDI signals. Curl your fingers to play piano notes. Tilt your hand to bend pitch. Make a fist to trigger a drum hit. You're playing invisible instruments with your bare hands.

Flex sensors are variable resistors that change resistance as they bend — straight is one value, fully curled is another. By reading each finger's bend angle through the ESP32's analog inputs, you know exactly what your hand is doing. The IMU (accelerometer + gyroscope) adds hand tilt, rotation, and acceleration data. Map all of this to MIDI control messages and you've got a gestural instrument controller that rivals commercial products costing $200-$500.

The applications go beyond music. The same glove can control robotic hands, drive 3D model animations, navigate VR environments, or serve as an accessibility input device. But the most immediately impressive demo is plugging it into a synthesizer and playing music by waving your hands in the air.

## Ingredients

- [ ] Thin, tight-fitting glove — cycling glove, batting glove, or thin work glove *(source: closet or dollar store, $1-$3)*
- [ ] Flex sensors (2.2" or 4.5"), 5 — one per finger *(source: electronics supplier, ~$8-$10 each, or DIY from velostat/conductive foam, ~$2 total)*
- [ ] MPU-6050 or BNO055 IMU module *(source: electronics supplier, ~$3-$5)*
- [ ] ESP32 development board *(source: electronics supplier, ~$5)*
- [ ] 10K ohm resistors, 5 — voltage dividers for flex sensors *(source: electronics supplier, ~$1)*
- [ ] LiPo battery, 3.7V 500-1000mAh *(source: electronics supplier, ~$3)*
- [ ] Thin silicone wire or enameled wire *(source: electronics supplier, ~$2)*
- [ ] Velcro strips for mounting *(source: dollar store, ~$1)*
- [ ] Hot glue or fabric adhesive *(source: workshop supplies)*
- [ ] Sewing needle and thread *(source: sewing kit)*

## Build Steps

1. **Prepare the glove.** Put on the glove and mark the centerline of each finger on the back side (where flex sensors will go) and the center of the hand back (where the IMU will mount). The glove should be snug enough that the sensors move with your fingers, not slide around independently.

2. **Mount the flex sensors.** Sew or glue one flex sensor along the back of each finger, running from the knuckle to the fingertip. The sensor should be centered on the finger and attached firmly enough to bend with the finger. Leave the electrical contacts at the knuckle end, pointing toward the wrist. Use thread loops at multiple points along each sensor to keep it aligned.

3. **Mount the IMU.** Glue or velcro the MPU-6050 or BNO055 module to the back of the hand, centered between the knuckles and the wrist. Orient it consistently (e.g., X-axis pointing toward the fingers, Z-axis pointing away from the palm) so your firmware can interpret the orientation data predictably.

4. **Wire the flex sensor circuits.** For each flex sensor, create a voltage divider: connect one end of the flex sensor to 3.3V, the other end to a 10K resistor to ground, and tap the junction to an ESP32 analog input. This gives you a voltage that varies with finger bend. Wire all five sensors to separate analog inputs (some ESP32 boards have limited ADC pins — use a multiplexer if needed).

5. **Wire the IMU.** Connect the IMU to the ESP32 via I2C (SDA and SCL lines). The MPU-6050 gives you 3-axis acceleration and 3-axis gyroscope data; the BNO055 additionally gives you absolute orientation (quaternions). Power the IMU from the ESP32's 3.3V output.

6. **Program the ESP32.** Write firmware that: (1) Reads all five flex sensor values and maps them to 0-127 MIDI range. (2) Reads the IMU orientation and maps tilt/rotation to MIDI continuous controllers (CC). (3) Implements gesture detection — fist = note on, open = note off, finger curl speed = velocity. (4) Sends MIDI over USB or Bluetooth. The ESP32's Bluetooth LE can send MIDI wirelessly to any BLE-MIDI compatible device.

7. **Calibrate.** Put on the glove and run a calibration routine: fully extend each finger (record the "straight" flex value), then fully curl (record the "bent" value). Store these min/max values and map the range to 0-127. Calibrate the IMU's zero position (hand flat, palm down). Every hand is different, so calibration should run at startup or on button press.

8. **Route MIDI and play.** Connect the glove (via USB or Bluetooth) to a computer running a DAW, a hardware synth, or a MIDI-capable app. Map the finger sensors to notes (e.g., pinky=C, ring=D, middle=E, index=F, thumb=G for a pentatonic scale). Map hand tilt to pitch bend or filter cutoff. Start simple, then build complexity as you get comfortable with the gesture vocabulary.

9. **Refine and iterate.** The first version will have issues — cross-talk between adjacent sensors, jitter from noisy ADC readings, or calibration drift. Add software filtering (moving average or exponential smoothing on the analog readings), dead zones around threshold values, and hysteresis on note triggers to prevent stuttering. These refinements make the difference between a prototype and a playable instrument.

## Safety Notes

- **Battery placement.** Mount the LiPo on the wrist or forearm, not on the fingers where it could get squeezed. A crushed LiPo is a fire hazard. Use a battery with a protection circuit.
- **Flex sensor fragility.** Commercial flex sensors are delicate — sharp bends at the contact end can crack the resistive element. Reinforce the contact end with a small piece of rigid backing (popsicle stick or plastic) where the sensor exits the finger. Replace sensors that show erratic readings.
- **Repetitive strain.** Exaggerated finger movements for extended playing sessions can cause hand fatigue. Map gestures to comfortable ranges of motion and take breaks during long sessions.

## See Also

- [LED Jacket](242-led-jacket.md) — another body-worn ESP32 project with real-time sensor input
- [Bucket Drum Kit](../junk-instruments/237-bucket-drum-kit.md) — another DIY MIDI controller, percussive instead of gestural
