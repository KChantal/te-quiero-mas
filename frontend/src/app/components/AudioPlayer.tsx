const AudioPlayer = () => {
  return (
    <div className="w-full flex justify-center">
      <audio className="w-full max-w-md" controls preload="metadata" autoPlay loop>
        <source src="/te_quiero_mas.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default AudioPlayer;