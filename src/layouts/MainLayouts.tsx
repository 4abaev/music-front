import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import { Container } from "@mui/material";
import Player from "@/components/Player";


type Props = {
    children?: React.ReactNode
};

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <NavBar />
            <Container style={{margin: '90px 0'}}>
                {children}
            </Container>
            <Player />
        </>
    );
}

export default MainLayout;