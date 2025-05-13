import { MediaPlayer } from "./abstract-type";
import { MediaAdapter } from "./adapter";

class AudioPlayer implements MediaPlayer {
    play(audioType: string, fileName: string): void {
        if (audioType === "mp3") {
            console.log(`Playing mp3 file: ${fileName}`);
        } else if (audioType === "vlc" || audioType === "mp4") {
            const adapter = new MediaAdapter(audioType);
            adapter.play(audioType, fileName);
        } else {
            console.log(`Invalid media type: ${audioType}`);
        }
    }
}


const player = new AudioPlayer();

player.play("mp3", "song.mp3");
player.play("mp4", "video.mp4");
player.play("vlc", "movie.vlc");
player.play("avi", "clip.avi");

