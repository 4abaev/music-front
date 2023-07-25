import TrackList from "@/components/TrackList";
import MainLayout from "@/layouts/MainLayouts";
import { ITrack } from "@/types/track";
import { Box, Card, Grid, Button } from "@mui/material";
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [{
        _id: "123",
        name: "Твои глаза",
        text: "123",
        artist: "polnalubvi",
        audio: "http://localhost:4000/audio/ea9c4693-4232-46b1-82d5-1321a181a3b2.mp3",
        picture: "http://localhost:4000/image/fc6f3c7a-a9bb-426b-bc99-616e2c7b4e0b.jpg",
        comments: [],
        listens: 0,
    }, {
        _id: "123",
        name: "Твои глаза",
        text: "123",
        artist: "polnalubvi",
        audio: "http://localhost:4000/audio/ea9c4693-4232-46b1-82d5-1321a181a3b2.mp3",
        picture: "http://localhost:4000/image/fc6f3c7a-a9bb-426b-bc99-616e2c7b4e0b.jpg",
        comments: [],
        listens: 0,
    }, {
        _id: "123",
        name: "Твои глаза",
        text: "123",
        artist: "polnalubvi",
        audio: "http://localhost:4000/audio/ea9c4693-4232-46b1-82d5-1321a181a3b2.mp3",
        picture: "http://localhost:4000/image/fc6f3c7a-a9bb-426b-bc99-616e2c7b4e0b.jpg",
        comments: [],
        listens: 0,
    },]
    return (
        <MainLayout>
            <Grid container justifyContent={'center'}>
                <Card style={{ width: 900 }}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('tracks/create')}> Загрузить </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
}

export default Index;