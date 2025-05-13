import { AdvancedMediaPlayer } from "./abstract-type";

export class VlcPlayer implements AdvancedMediaPlayer {
    playVlc(filename: string): void {
        console.log(`Playing vlc file. Name: ${filename}`);
    }

    playMp4(filename: string): void {
        // do nothing
    }
}

export class Mp4Player implements AdvancedMediaPlayer{
    playMp4(filename: string): void {
        console.log(`Playing mp4 file. Name: ${filename}`);
    }

    playVlc(filename: string): void {
        // do nothing
    }
}
