export default function TechnicalMethods() {
  return (
    <section className="section">
      <h2>Technical Methods</h2>

      {/* Implementation Details */}
      <h3>Implementation Details</h3>
      <p>
        The system was implemented in the Webots simulator using a UR5e 6-DOF
        robotic manipulator equipped with a Robotiq gripper. An RGB camera was
        used for color perception, and a distance sensor triggered grasp timing.
        Joint-space motor control was coordinated through a finite state machine
        (FSM), with forward and inverse kinematics used to validate end-effector
        pose and execute pick-and-place actions.
      </p>

      {/* Experimental Design */}
      <h3>Experimental Design</h3>
      <p><strong>Experiment 1: Color Sorting Accuracy</strong></p>
      <p>
        Hypothesis: The robot can correctly classify and sort blocks by color
        with high reliability. Independent variables included block color and
        arrival timing, while the dependent variable was successful placement.
        Accuracy was measured as the percentage of correct pick-and-place
        operations over multiple trials.
      </p>

      <p><strong>Experiment 2: Trajectory Stability</strong></p>
      <p>
        Hypothesis: Joint-space interpolation improves grasp stability compared
        to direct inverse kinematics motion. The evaluation compared grasp
        success rate and motion smoothness between the two approaches.
      </p>

      {/* Results & Discussion */}
      <h3>Results & Discussion</h3>
      <p>
        The system achieved approximately 95% sorting accuracy across trials.
        Most failures were caused by perception latency or minor grasp
        misalignment. Joint-space interpolation increased grasp success from
        approximately 75% to 90%, confirming that smoother trajectories reduce
        overshoot and instability.
      </p>

      {/* Reflection & Future Work */}
      <h3>Reflection & Future Work</h3>
      <p>
        Future improvements include more robust perception timing, support for
        non-color-based object classification, and deployment on a physical
        robotic platform. Integrating advanced planning and filtering techniques
        could further improve system robustness.
      </p>
    </section>
  );
}
