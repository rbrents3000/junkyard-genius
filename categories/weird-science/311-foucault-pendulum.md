---
layout: build
title: "Foucault Pendulum"
build_number: 311
description: "A weight on a wire that proves the Earth is rotating — not because someone told you, but because you watched it happen over lunch."
image: /images/builds/311-foucault-pendulum.jpg
category: weird-science
category_name: "Weird Science"
tags: [educational, spectacle]
junk: []
ratings:
  jaw: 5
  brain: 3
  wallet: 2
  spicy: 1
  clout: 5
  time: 2
---
# #311 — Foucault Pendulum

<p align="center">
  <img src="/images/builds/311-foucault-pendulum.jpg" alt="Foucault Pendulum" width="700" />
</p>

> A weight on a wire that proves the Earth is rotating — not because someone told you, but because you watched it happen over lunch.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90%E2%AD%90-6b7280)

## 🧪 What Is It?

In 1851, Leon Foucault hung a 67-meter wire from the dome of the Pantheon in Paris, attached a 28-kilogram brass bob to the end, pulled it to one side, and let go. Over the following hours, the plane of the pendulum's swing slowly rotated — about 11 degrees per hour in Paris. The pendulum itself wasn't changing direction. The building was. The entire Earth was rotating underneath the swinging weight, and for the first time in history, you could sit in a chair and watch it happen in real time.

This is not an abstraction or an inference or a thought experiment. The pendulum swings in a fixed plane relative to the stars (inertial space). The floor rotates beneath it. At the North or South Pole, the pendulum's plane completes a full 360-degree rotation in exactly 24 hours — one sidereal day. At the equator, it doesn't rotate at all. At any latitude in between, the rotation rate is 360 degrees times the sine of the latitude per day. In New York (40.7°N), that's about 235 degrees per day, or roughly 10 degrees per hour — visible in under 15 minutes if you set up a reference marker.

The build itself is mechanically simple: a heavy weight, a long wire, and a sturdy mounting point. The physics is profound. Everything about this project is about minimizing interference — air currents, asymmetric mounting, wire flex — so the pendulum can do its thing unmolested. Get it right and you've built an instrument that detects the rotation of a planet. With hardware store supplies and patience.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Heavy pendulum bob — 10-25 lbs, symmetrical shape (lead fishing weight, steel ball, or brass plumb bob) *(source: fishing supply store, hardware store, or scrap metal — $5-20)*
- [ ] Steel wire or piano wire, 15-30 feet long, 0.5-1mm diameter *(source: music store or hardware store — $5-10)*
- [ ] Swivel bearing or ball-and-socket joint for the suspension point *(source: fishing supply — heavy-duty ball-bearing swivel — $5)*
- [ ] Eye bolt or ceiling hook rated for at least 50 lbs *(source: hardware store — $3)*
- [ ] Lag bolt or mounting hardware appropriate to your ceiling structure *(source: hardware store — $3)*
- [ ] Fine sand or salt for the trace ring *(source: grocery store or craft store — $3)*
- [ ] Large circular tray or flat board, 3-4 feet diameter, for the trace surface *(source: plywood cutoff or large serving tray — $5-10)*
- [ ] Small pointed stylus or pin attached to the bottom of the bob *(source: nail or sewing pin — free)*
- [ ] Release mechanism — thread or fishing line that can be burned to start the pendulum without pushing it *(source: sewing kit — free)*
- [ ] Optional: protractor or printed degree markings for the trace ring *(source: print your own)*
- [ ] Optional: magnetic damping ring (copper pipe section) to suppress elliptical drift *(source: plumbing supply — $5)*

</details>

## 🔨 Build Steps

1. **Find your mounting point.** This is the single most important decision. You need a high, rock-solid anchor point. Minimum 10 feet of clearance, ideally 15-30 feet. Higher = longer wire = longer swing period = less sensitivity to disturbances = better data. A cathedral ceiling, exposed roof beam, stairwell, barn rafter, tall tree branch, or second-story balcony overhang all work. The mount must not flex, sway, or vibrate. If the anchor moves even slightly, it feeds energy into the pendulum and corrupts the precession signal.

2. **Install the suspension hardware.** Drill into solid structural wood or concrete (not drywall alone) and install the eye bolt or ceiling hook. Attach the swivel bearing or ball-and-socket joint. The bearing is critical — a rigid connection between the wire and the mount will constrain the pendulum's swing plane and prevent it from precessing freely. The swivel allows the wire to rotate without twisting. Use a high-quality fishing swivel rated well above the bob's weight. Cheap swivels have too much friction.

3. **Prepare the wire and bob.** Cut the wire to length — from the swivel to the bob's center of gravity when hanging. Attach the top end to the swivel with a secure loop or crimp fitting. Attach the bottom end to the bob. The attachment must be perfectly centered so the bob hangs without any tendency to spin or wobble. If using a lead weight, drill a hole through the center and run the wire through it. If using a steel ball, use an epoxied eye screw. Attach a small pointed stylus (nail point, pin) to the bottom of the bob, pointing straight down — this will trace the swing path in sand.

4. **Build the trace surface.** Place the circular tray or plywood disc directly beneath the pendulum, centered. Level it carefully — a tilted surface will bias the trace. Spread a thin, even layer of fine sand or salt across the surface, about 3-4mm deep. The stylus on the bob should just barely drag through the sand at the lowest point of the swing. Too deep and the sand adds drag. Too shallow and the trace isn't visible. Mark degree lines on the tray every 10 or 15 degrees using a protractor — these are your reference for measuring precession.

5. **The release — this is where most people mess up.** You cannot start the pendulum by pushing it or pulling it sideways and letting go with your hand. Any lateral impulse will make the pendulum swing in an ellipse instead of a plane, and elliptical motion precesses on its own (not from the Earth's rotation), wrecking your measurement. Instead: pull the bob to one side (4-6 inches of displacement) with a loop of sewing thread or fishing line tied to a fixed point at the same height as the bob's resting position. Secure the thread so the bob is held at its displaced position. To release, burn the thread with a match or lighter. The bob starts swinging in a clean plane with zero lateral push.

6. **Observe the initial swing.** Watch the stylus trace a straight line through the sand. For the first few minutes, the line should be clean and straight — back and forth in the same track. If it's tracing an ellipse (the line widens into an oval), your release had a lateral component. Reset the sand, re-pull with the thread, and try again. A clean straight-line start is essential.

7. **Wait and measure.** Mark the position of the swing line on your degree reference at the start. Come back in 30 minutes and check. At 40°N latitude, the plane should have rotated about 5 degrees. In an hour, about 10 degrees. The sand trace shows the history — you'll see the earlier straight line at one angle and the current swing at a slightly different angle, with a fan-shaped region of disturbed sand between them. This is the Earth rotating under the pendulum. You are watching it happen.

8. **The Charron ring (elliptical correction).** Even with a perfect release, air resistance and tiny mounting asymmetries will gradually cause the swing to develop a slight ellipse over hours. Foucault himself dealt with this. The Charron ring is a raised circular ridge (a metal ring slightly larger than the bob) positioned at the center of the swing. As the bob passes over it at the low point, the ring constrains the swing path back to a plane. A simpler version: place a short section of copper pipe (3-4 inches tall, diameter larger than the bob) at the center point. The eddy current braking effect from the pipe selectively damps the elliptical component without affecting the main swing plane.

9. **Overnight run.** For the full experience, start the pendulum in the evening and leave it running overnight (if the wire is long enough and the bob heavy enough to sustain the swing for 8+ hours). In the morning, the sand trace will show a dramatic fan of lines spanning 80+ degrees (at mid-latitudes). Photograph it. This is hands-down one of the most visually striking records of a physics experiment you can create at home.

10. **Calculate and verify.** Measure the total precession angle and the elapsed time. Divide to get degrees per hour. Compare to the theoretical prediction: 15° × sin(latitude) per hour. At 40°N, that's 15 × 0.643 = 9.64°/hour. At 30°N, it's 7.5°/hour. At 51°N (London), it's 11.67°/hour. If your measurement is within 10-15% of the prediction, your pendulum is working correctly and you've just independently verified the rotation of the Earth with a rock on a string.

## ⚠️ Safety Notes

> [!WARNING]
> **Overhead mounting must be bomb-proof.** A 10-25 lb bob swinging on a long wire exerts significant dynamic force on the mount point, well beyond its static weight. Use lag bolts into solid structural members — joists, beams, rafters. Never mount into drywall, plaster, or a suspended ceiling grid. If the mount fails, you've got a cannonball on a whip. Test the mount by hanging twice the bob's weight from it statically before swinging anything.

- **Swinging weight hazard.** A 15-lb bob swinging on a 20-foot wire covers a lot of ground. Clear the swing radius of furniture, pets, children, and anything breakable. Mark the swing zone on the floor with tape. The bob has real momentum and will not stop for a shin or a vase.
- **Wire tension.** Piano wire under tension can snap and whip. Inspect the wire for kinks, corrosion, or fatigue marks before each run. Use wire rated well above the bob's weight. Stand to the side when releasing the pendulum, not in the swing plane. Wear eye protection during setup and release.

## 🔗 See Also

- [Van de Graaff Generator](/categories/weird-science/197-van-de-graaff-generator/) — another build that makes an invisible force tangibly, dramatically real
- [Homopolar Motor](/categories/weird-science/198-homopolar-motor/) — rotational physics in a form you can hold in your hand

