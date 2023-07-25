import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import styles from '../styles/Player.module.scss'
import { ITrack } from "@/types/track";
import TrackProgress from "./TrackProgress";
const Player = () => {
    const track: ITrack = {
        _id: "123",
        text: '[Куплет 1] \n\nЯ помню, как открыл глаза \nИ встретил в них тебя \nКак первый луч, как тихий звон \nКак первая гроза \nТы словно в небесах заря \nТы полная Луна \nЯ помню лишь твои глаза \nА дальше пустота \n\n\n[Припев] \n\nСотни ночных дорог \nНапомнят мне тебя \nЯ в них терял свою любовь \nИ заново встречал \nЛишь дай мне посмотреть в последний раз \nВ твои глаза \nЯ потерял дорогу к ним \nЯ потерял себя \n\n\n[Куплет 2] \n\nИ стук колёс, как эшафот \nУносит тебя вдаль \n«Я выберусь, моя любовь!» — \nТебе я вслед кричал \nЯ научусь тебя любить \nМне без тебя не жить \nТвой голос — мой ориентир \nЯ сам себя казнил \n\n\n[Припев] \n\nСотни ночных дорог \nНапомнят мне тебя \nЯ в них терял свою любовь \nИ заново встречал \nЛишь дай мне посмотреть в последний раз \nВ твои глаза \nЯ потерял дорогу к ним \nЯ потерял себя \n\n\n[Аутро] \n\nЛишь дай мне посмотреть в последний раз \nВ твои глаза \nЯ солнцем обернусь, и в них \nОстанусь навсегда',
        name: "123",
        artist: "polnalubvi",
        audio: "http://localhost:4000/audio/ea9c4693-4232-46b1-82d5-1321a181a3b2.mp3",
        picture: "http://localhost:4000/image/fc6f3c7a-a9bb-426b-bc99-616e2c7b4e0b.jpg",
        comments: [],
        listens: 0,
    }
    const active = false

    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {!active ? <PlayArrow /> : <Pause />}
            </IconButton>
            <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => {}}/>
            <VolumeUp style={{marginLeft: "auto"}}/>
            <TrackProgress left={0} right={100} onChange={() => {}}/>
        </div>
    );
}
 
export default Player;