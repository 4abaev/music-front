import { ITrack } from "@/types/track";
import { Grid } from "@mui/material";
import TrackItem from "./TrackItem";

interface TrackListProps {
    tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    return ( 
        <Grid container direction='column'>
            {tracks.map(track => 
                <TrackItem key={track._id} track={track} />)}
        </Grid>
     );
}
 
export default TrackList;