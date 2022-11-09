import config from '../config.json';
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import { CSSReset } from '../src/components/CSSReset';
import Favoritos from '../src/components/Favoritos';
import React from 'react';

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    return(
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
                <Favoritos favoritos={config.favorites}/>
            </div>
        </>
    )
  }
  
  export default HomePage