# #138 — Nerf Sentry Turret

> A motorized Nerf gun on pan/tilt servos with ultrasonic sensors or Pi camera — auto-targeting that can recognize faces.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

## What Is It?

Take a motorized Nerf gun (the kind with a flywheel launcher), mount it on a pan/tilt servo platform, add an ultrasonic sensor or Pi camera for target detection, and you've got an automated sentry turret that tracks and fires at anything that moves. The basic version uses ultrasonic distance sensors to detect objects entering a zone and sweeps to find them. The advanced version uses a Pi camera with OpenCV to track movement or even face recognition to only shoot strangers while letting family members pass unharmed. The firing mechanism is just a servo pressing the Nerf gun's trigger. It's the most fun defensive system ever built.

## Ingredients

- [ ] Motorized Nerf gun — any flywheel-powered model (Stryfe, Rapidstrike) *(toy store, thrift store)*
- [ ] Servo motors — 2, for pan and tilt (standard or high-torque depending on gun weight) *(electronics supplier)*
- [ ] Pan/tilt servo bracket — 3D printed or aluminum *(electronics supplier, 3D print)*
- [ ] Arduino or Raspberry Pi — Arduino for basic, Pi for camera vision *(electronics supplier)*
- [ ] Ultrasonic sensor (HC-SR04) — for basic target detection *(electronics supplier)*
- [ ] Pi Camera Module — for advanced tracking and face recognition *(electronics supplier)*
- [ ] Additional servo — to pull the Nerf gun trigger *(electronics supplier)*
- [ ] Power supply — 6V for servos, separate from microcontroller *(electronics supplier)*
- [ ] Base plate — heavy, to prevent recoil from tipping the turret *(hardware store)*
- [ ] Zip ties and mounting hardware *(hardware store)*

## Build Steps

1. **Modify the Nerf gun.** Open the Nerf gun and locate the trigger mechanism and flywheel motors. Wire the flywheel motor power to an external switch or relay (so the turret controller can spin up the flywheels). Mount a servo to press the trigger — a servo arm pushing the trigger lever fires the gun.
2. **Build the pan/tilt platform.** Assemble the servo bracket with one servo for horizontal panning (base) and one for vertical tilting. Mount the bracket to a heavy base plate. The base must be heavy enough that the turret doesn't walk across the table from recoil.
3. **Mount the Nerf gun.** Secure the modified Nerf gun to the tilt servo bracket using zip ties, screws, or a 3D-printed cradle. The gun should be balanced so the servos aren't fighting gravity. Add a counterweight if needed.
4. **Wire the basic detection system.** For Arduino + ultrasonic: mount the HC-SR04 sensor on the gun barrel (it points where the gun points). The Arduino sweeps the pan servo back and forth, reading distance. When an object is detected within range, the turret stops sweeping and locks on.
5. **Write the tracking code (basic).** The Arduino sweep detects an object, then hunts for the closest range reading by micro-adjusting pan and tilt. Once locked, it spins up the flywheels (relay on) and triggers the fire servo. If the target moves, the turret follows by re-sweeping.
6. **Upgrade to camera vision (advanced).** Replace the ultrasonic sensor with a Pi camera running OpenCV. Use motion detection or object tracking to identify targets. Map the pixel position of the target to servo angles. PID control on the servo position gives smooth tracking.
7. **Add face recognition (expert mode).** Train the Pi's face_recognition library on family photos. The turret only fires at unrecognized faces. Known faces get a verbal greeting ("Welcome home, Dad") through a speaker. Unknown faces get a Nerf dart to the forehead.
8. **Add a magazine and reload indicator.** Most motorized Nerf guns use magazines. When the mag is empty, a sensor (microswitch or IR break beam) detects the last dart and signals the controller to stop firing and alert you to reload.
9. **Set up the defense zone.** Position the turret to cover a doorway, hallway, or desk. Set the sweep range limits so the turret only covers the intended area. Test with volunteers who consent to being shot.

## Safety Notes

- Even Nerf darts can sting at close range, especially direct hits to the face. Set a minimum engagement distance in the software. Never aim the turret at eye level at close range. Warn everyone in the house that the turret is active.
- Spinning flywheel motors in motorized Nerf guns can catch hair, loose strings, or small fingers. Keep the flywheel area enclosed and don't reach into the barrel while the motors are on.
- If using face recognition, test thoroughly before trusting it. False positives (shooting family) and false negatives (not shooting intruders) are both possible. This is a toy — never rely on it for actual security.

## See Also

- [Face Tracking Laser](../python-projects/141-face-tracking-laser.md)
- [Printer Robot Arm](129-printer-robot-arm.md)
