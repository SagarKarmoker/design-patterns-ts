import { AdvancedMediaPlayer, MediaPlayer } from "./abstract-type";
import { Mp4Player, VlcPlayer } from "./adaptee";

export class MediaAdapter implements MediaPlayer {
    private readonly advancedMediaPlayer: AdvancedMediaPlayer;

    constructor(audioType: string) {
        if (audioType === "vlc") {
            this.advancedMediaPlayer = new VlcPlayer(); // Default to VlcPlayer
        }
        else if (audioType === "mp4") {
            this.advancedMediaPlayer = new Mp4Player();
        }
        else {
            throw new Error(`Invalid media. ${audioType} format not supported`);
        }
    }

    play(audioType: string, filename: string): void {
        if (audioType === "vlc") {
            this.advancedMediaPlayer.playVlc(filename);
        }
        else if (audioType === "mp4") {
            this.advancedMediaPlayer.playMp4(filename);
        }
        else {
            console.log(`Invalid media. ${audioType} format not supported`);
        }

    }
}