import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function TechnicalSummary() {
  return (
    <AnimatedSection id="technical-summary">
      <h2 className="center">Implementation Details</h2>

      <p>
        The system is implemented in the Webots simulator using a UR5e robotic
        manipulator equipped with a Robotiq 3-Finger Gripper. The environment
        includes a conveyor belt that delivers colored blocks and crates that
        serve as sorting targets.
      </p>

      <p>
        An RGB camera mounted on the robot is used for color-based object
        detection, while a distance sensor determines grasp timing. Robot motion
        is controlled through joint-space commands using Webots motor and
        position sensor APIs.
      </p>

      <p>
        The system is structured as a finite state machine (FSM) with states for
        detection, approach, grasping, transport, and placement. Custom inverse
        kinematics computes joint configurations for pickup and placement, and
        joint-space interpolation is used to ensure smooth and stable motion.
      </p>

      <h2 className="center">Experimental Design</h2>

      <h3>Experiment 1: Sorting Accuracy</h3>
      <p>
        The hypothesis was that the robot could reliably detect, grasp, and sort
        colored blocks in real time. The independent variables were block color
        and arrival timing, and the dependent variable was sorting success rate.
        Accuracy was measured across 40 randomized trials.
      </p>

      <h3>Experiment 2: Trajectory Stability</h3>
      <p>
        The hypothesis was that interpolated joint-space trajectories would
        result in more stable grasps than direct inverse kinematics motion. The
        independent variable was the motion strategy, and the dependent variable
        was grasp success rate over repeated trials.
      </p>

      <h2 className="center">Results and Discussion</h2>

      <p>
        The system achieved approximately 95% sorting accuracy, with failures
        caused by late detection, block drift on the conveyor, or minor grasp
        misalignment.
      </p>

      <p>
        Interpolated joint-space trajectories improved grasp success from 75% to
        90% compared to direct inverse kinematics, demonstrating smoother motion
        and reduced overshoot. Most remaining errors were due to perception
        timing rather than kinematic limitations.
      </p>

      <h2 className="center">Reflection and Future Work</h2>

      <p>
        Future work includes improving perception timing, extending
        classification beyond color, and deploying the system on a physical
        robot platform. Additional filtering and higher-level planning could
        further improve system robustness.
      </p>
    </AnimatedSection>
  );
}
