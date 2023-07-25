import FileUpload from "@/components/FileUpload";
import StepWrapper from "@/components/StepWrapper";
import MainLayout from "@/layouts/MainLayouts";
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState();
    const [audio, setAudio] = useState();
    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        }
    }
    const back = () => {
        setActiveStep(prev => prev - 1)
    }
    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction='column' style={{ padding: 20 }}>
                        <TextField style={{ marginTop: 10 }} label={'Название трека'} />
                        <TextField style={{ marginTop: 10 }} label={'Имя исполнителя'} />
                        <TextField style={{ marginTop: 10 }} multiline rows={3} label={'Слова трека'} />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload setFile={setPicture} accept="image/*">
                        <Button>Загрузить изображение</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept="audio/*">
                        <Button>Загрузить аудио</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button onClick={() => back()} disabled={activeStep === 0}>Назад</Button>
                <Button onClick={() => next()}>Далее</Button>
            </Grid>
        </MainLayout>
    );
}

export default Create;