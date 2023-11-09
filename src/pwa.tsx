import Introduction from './pages/introduction'
import './styles/index.css'
import {TopBar} from "./components/pwa/TopBar/TopBar";
import {BoundedRootColumn} from "./components/pwa/BoundedRootColumn/BoundedRootColumn";
import {OverscrollBorder} from "./components/general/OverscrollBorder/OverscrollBorder";
import {Column} from "./components/general/Column/Column";

const PWA = () => {
    const topbarModules = [<div> This is my TopBar! </div>]

    return (
        <div>
            <TopBar className='black-background dashed-border'> {topbarModules} </TopBar>
                <BoundedRootColumn>
                    <Column>
                        <Introduction/>
                    </Column>
                </BoundedRootColumn>
        </div>
    )
}

export default PWA;

