export interface MediaPlayer{
    play(audioType: string, filename: string): void;
}

export interface AdvancedMediaPlayer {
    playVlc(filename: string): void;
    playMp4(filename: string): void;
}
