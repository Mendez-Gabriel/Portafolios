import CardImg from "../card/CardImg";
import GoalKeepImgage from "../../../assets/portfolios/GoalKeep.png";
import TrendyThreads from "../../../assets/portfolios/TrendyThreads.png";
import LaEsquinaDelSandwitch from "../../../assets/portfolios/LaEsquinaDelSandwitch.png";
import Guisky from "../../../assets/portfolios/Guisky.png";
import GameVerse from "../../../assets/portfolios/GameVerse.png";
import { Box } from "@mui/material";
import { Buttons, Text } from './ListCard.data';

const ListCard = () => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      <CardImg
        img={Guisky}
        title={Text.GuiskyText.title}
        text={
          <>
            {Text.GuiskyText.text1}
            <br />
            <br />
            {Text.GuiskyText.text2}
          </>
        }
        urlPage={Text.GuiskyText.url}
        arrayOfButtons={Buttons.FestBookData}
      />
      <CardImg
        img={GoalKeepImgage}
        title={Text.GoalKeepText.title}
        text={Text.GoalKeepText.text}
        arrayOfButtons={Buttons.GoalKeepData}
        urlPage={Text.GoalKeepText.url}
      />
      <CardImg
        img={TrendyThreads}
        title={Text.TrendyThreadsText.title}
        text={Text.TrendyThreadsText.text}
        arrayOfButtons={Buttons.TrendyThreadsData}
        urlPage={Text.TrendyThreadsText.url}
      />
      <CardImg
        img={LaEsquinaDelSandwitch}
        title={Text.LaEsquinaDelSandwitchText.title}
        text={Text.LaEsquinaDelSandwitchText.text}
        arrayOfButtons={Buttons.LaEsquinaDelSandwitchData}
        urlPage={Text.LaEsquinaDelSandwitchText.url}
      />
      <CardImg
        img={GameVerse}
        title={Text.GameVerseText.title}
        text={Text.GameVerseText.text}
        arrayOfButtons={Buttons.GameVerseData}
        urlPage={Text.GameVerseText.url}
      />
    </Box>
  );
};

export default ListCard;
