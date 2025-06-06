import { useState } from "react";
import "./shows.css";
import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) {
  const [selectedEp, setSelectedEp] = useState(null);
  if(!show){
    return(
      <>
        <h2>Show Details</h2>
        <p>Please select a show to see its available episodes</p>
      </>
    );
  }
  return(
    <>
      <EpisodeList 
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEp}
        setSelectedEpisode={setSelectedEp}
      />
      <EpisodeDetails 
        episode={selectedEp}
      />
    </>
  );
}
