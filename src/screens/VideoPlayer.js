import AnimatedFrame from "../components/AnimatedFrame";
import ScreenHeader from "../components/ScreenHeader";

export default function VideoPlayer() {
  return (
    <AnimatedFrame scrollable>
      <ScreenHeader text="video playlist" />
    </AnimatedFrame>
  );
}
