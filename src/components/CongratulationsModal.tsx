import { daysSinceBeginning, queryParamSongIndex } from "src/constants/game";
import { useStore } from "src/gameStore";
import { Modal } from "./Modal";
import dayjs from "dayjs";

const loadTime = dayjs()

export const CongratulationsModal = () => {
  const { chosenSong, turn } = useStore();
  return (
    <Modal
      title="Well done!"
      visible={true}
      closeText="Another!"
      toggleVisible={() => {
        if ("URLSearchParams" in window) {
          var searchParams = new URLSearchParams(window.location.search);
          searchParams.set(
            "chosenSongIndex",
            ((queryParamSongIndex + 1) % daysSinceBeginning).toString()
          );
          window.location.search = searchParams.toString();
        }
      }}
    >
      <p>Congratulations!!</p>
      <p>Guessed <i>{chosenSong.name}</i> in {turn} turns, {dayjs().diff(loadTime, 's', true).toFixed(2)} seconds.</p>
      <p>Listen to the song on spotify or something.</p>
    </Modal>
  );
};
