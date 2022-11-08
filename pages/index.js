import config from '../config.json';
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import { CSSReset } from '../src/components/CSSReset';

function HomePage() {

    console.log(config.playlists)

    return(
        <div>
            <CSSReset />
            <div>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </div>
    )
  }
  
  export default HomePage