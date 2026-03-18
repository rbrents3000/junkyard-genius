# #203 — Gimbal Motor Star Tracker

> Drone gimbal motors rotate at exactly 15 degrees per hour — the sidereal rate — turning a DSLR into an astrophotography platform that tracks stars across the sky.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐ | ⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

## What Is It?

A motorized camera mount that slowly rotates to follow the stars as Earth spins. Without tracking, any long-exposure astrophotograph shows star trails — streaks of light instead of pinpoints. A star tracker counteracts Earth's rotation by spinning the camera at exactly the same rate (one revolution per 23 hours 56 minutes, or 15.041 arcseconds per second). Commercial star trackers like the iOptron SkyGuider Pro cost $300-$500. Drone gimbal motors can achieve the same precision for free.

Gimbal motors are designed for exactly this kind of application: extremely slow, extremely precise angular positioning. They're brushless outrunners with fine magnetic pole spacing and high cogging torque, which means they hold position without drifting and rotate smoothly at speeds measured in fractions of a degree per second. An Arduino drives the motor at a constant sidereal rate via microstepping-like PWM commutation. Align the rotation axis with Polaris (the North Star), mount your camera, and suddenly 2-5 minute exposures produce sharp stars and reveal nebulae, galaxies, and the Milky Way's structure invisible to the naked eye.

The quality of the results is staggering for a build that costs almost nothing.

## Ingredients

- [ ] Brushless gimbal motor x1 — the largest one from the drone gimbal (yaw or roll axis) *(source: crashed drone — free)*
- [ ] Arduino Nano *(electronics supplier, ~$5)*
- [ ] L6234 or similar 3-phase brushless motor driver *(electronics supplier, ~$5)*
- [ ] Ball-head tripod mount — to aim the camera *(photography store or salvaged, ~$10)*
- [ ] Tripod — sturdy enough to hold the motor, mount, and camera *(existing or thrift store)*
- [ ] 3D-printed or machined adapter plate — to connect motor shaft to ball head *(3D printer or hardware store)*
- [ ] 9V battery or small LiPo pack *(electronics supplier or salvaged)*
- [ ] Potentiometer — for fine-tuning rotation speed *(electronics supplier, ~$1)*

## Build Steps

1. **Select the right motor.** Choose the gimbal motor with the largest stator diameter — it will have the most torque and smoothest rotation at very low speeds. The yaw motor from a Phantom gimbal is ideal. Test the motor by connecting it to a driver and running it slowly — it should rotate without any visible stepping or jerking.
2. **Build the motor mount.** Create a bracket that holds the motor firmly with its shaft pointing upward. This will be the polar axis — the axis that points at Polaris. The bracket mounts on top of a tripod. Use aluminum angle stock or a 3D-printed clamp. The motor must be rock-solid with zero flex; any wobble translates directly into star trails.
3. **Attach the camera platform.** Connect a ball-head mount to the motor shaft via an adapter plate. The ball head lets you aim the camera at any part of the sky while the motor rotates the entire assembly at sidereal rate. The adapter plate can be a 3D-printed disc with a center hole matching the motor shaft and a 1/4"-20 threaded insert for the ball head.
4. **Wire the driver circuit.** Connect the Arduino Nano to the L6234 driver board. The Arduino outputs three PWM signals (one per motor phase) that commutate the brushless motor at a precisely controlled speed. The driver board amplifies these signals to drive the motor coils. Add a potentiometer to one of the Arduino's analog inputs for fine speed adjustment.
5. **Program the sidereal rate.** Write or upload an Arduino sketch that commutates the motor at exactly 15.041 arcseconds per second (one full revolution in 23h 56m 4s). The commutation frequency depends on the motor's pole count — a 14-pole motor needs 7 electrical revolutions per mechanical revolution. Calculate the PWM timing accordingly. Use the potentiometer to allow +/- 5% adjustment for calibration.
6. **Polar align the tracker.** Set up the tripod and point the motor shaft directly at Polaris. Use a polar alignment scope (a small tube aligned with the motor shaft works) or simply sight along the shaft. The accuracy of your polar alignment directly determines how long you can expose before star trailing appears. Within 1 degree is good for 2-minute exposures. Within 0.5 degrees allows 5+ minutes.
7. **Balance the camera.** Mount the camera on the ball head and aim it at your target (Orion Nebula, Milky Way core, Andromeda Galaxy). Adjust the ball head so the camera's weight is roughly balanced around the rotation axis. An unbalanced load strains the motor and introduces periodic error.
8. **Shoot and verify.** Start with 30-second exposures to confirm tracking is working — stars should be pinpoints, not trails. Gradually increase exposure time: 1 minute, 2 minutes, 5 minutes. If stars start trailing at longer exposures, check polar alignment first, then fine-tune motor speed with the potentiometer.

## Safety Notes

- You'll be setting up equipment in the dark, often in remote locations for dark skies. Bring a red flashlight (preserves night vision), a phone with charged battery, and tell someone where you're going.
- The motor draws minimal current, but if using a LiPo battery, follow standard LiPo safety — don't let it discharge below 3.5V per cell.

## See Also

- [Camera Gimbal Stabilizer](201-camera-gimbal-stabilizer.md) — same motors used for handheld video stabilization
- [Precision Digital Scale](207-precision-digital-scale.md) — another precision application of gimbal motor torque sensing
