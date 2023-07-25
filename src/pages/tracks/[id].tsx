import MainLayout from "@/layouts/MainLayouts";
import { ITrack } from "@/types/track";
import { Button, Grid, TextField } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const TrackPage = () => {
    const router = useRouter()
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
    return (
        <MainLayout>
            <Button variant="outlined" style={{ fontSize: 32 }} onClick={() => router.push('/tracks')}>К списку</Button>
            <Grid container style={{ margin: '0 20px' }}>
                <Image src={track.picture} width={200} height={200} alt="track image" />
                <div style={{ marginLeft: 30 }}>
                    <h1>{track.name}</h1>
                    <h1>{track.artist}</h1>
                    <h1>{track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова к треку</h1>
            <p style={{ whiteSpace: "pre-wrap" }}>{track.text}</p>
            <Grid container>
                <TextField label="Ваше имя" fullWidth />

                <TextField label="Ваше комментарий" fullWidth multiline rows={4} />

                <Button>Отправить</Button>
            </Grid>
        </MainLayout>
    );
}

export default TrackPage;