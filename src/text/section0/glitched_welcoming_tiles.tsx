import React, {CSSProperties} from 'react'
import ScrambleTextTransform from "../../components/pwa/ScrambleTextTransform/ScrambleTextTransform";

type Props = {
    style?: CSSProperties;
    className?: string;
}


export const Tile0: React.FC<Props> = ({style}) => {
    return (
        <p className='body-Menlo' style={{margin: '0', fontSize: '1.1rem', ...style}}>
            YOU ARE the RUNNER =&gt;
            <br/> <br/>
            <strong> Fight</strong> or <strong> serve</strong> the corporations.
            <strong> Raid</strong> sealed vaults.
            <strong> Hunt</strong> your targets.
            <strong> Seek</strong> wealth, pleasure or salvation.
            The CRISIS is inevitable.
        </p>
    )
}

export const Tile1: React.FC<Props> = ({style}) => {
    return (
        <p className='body-JBmono' style={{margin: '0', fontSize: '1.1rem', ...style}}>
            Think of yourself as a <strong>MODERATOR</strong>?
            <br/> <br/>
            <strong>Build</strong> a tense drama, be the rules <strong><i>lawyer</i></strong>, get inventive, risky and
            expressive.
        </p>
    )
};

export const Tile3: React.FC<Props> = ({style}) => {
    return (
        <p className='body-Menlo' style={{margin: '0', fontSize: '0.85rem', ...style}}>
            Welcome to the <strong>UC Block 04</strong>, 278 PC (<strong>post-crash</strong>). Please, fill out the
            working unit reg-form.
            <br/> <br/>
            <i>log: You are registered at the address: /HELLPIT/l.b./
                Hx5OA-block.</i>
            <br/> <br/>
            <strong>May the Oracle guard you.</strong></p>
    )
};

export const Tile4: React.FC<Props> = ({style}) => {
    return (
        <p className='body-Menlo' style={{margin: '0', fontSize: '0.85rem', ...style}}>
            System’s <strong>brainwashing</strong> will implant you a thought that the f*cking Crash has ruined
            everything.
            <br/> <br/>
            <strong>Nah.</strong> Everything went to <strong>hell</strong> much earlier.</p>
    )
};

export const Tile5: React.FC<Props> = ({style, className}) => {
    return (
        <p className={`body-JBmono black-background ${className}`}
           style={{color: '#FCE64D', margin: '0', fontSize: '1.0rem', ...style}}>
            <p style={{margin: '0 0 0.3rem 0'}}> 1. You can <b>download</b> this app for the <b>offline</b> use if your
                software supports <b>PWA</b>. </p>
            <p style={{margin: '0 0 0.3rem 0'}}> 2. Press &nbsp;&nbsp;&nbsp;&nbsp; to <b>automatically</b> roll on
                the <b>RNG</b> table like this one. </p>
            <p style={{margin: '0 0 0.3rem 0'}}> 3. <b>Click</b> scrambled text: <ScrambleTextTransform> to <b>hack</b> through the censorship
                of the Oracle. </ScrambleTextTransform> </p>
            <p style={{margin: '0 0 0.3rem 0'}}> 4. Follow the <u><b>link</b></u> to navigate to the connected
                component. </p>
        </p>
    )
};

export const Tile6: React.FC<Props> = ({style, className}) => {
    return (
        <p className={`body ${className}`} style={{margin: '0', fontSize: '0.85 rem', ...style}}>
            <p style={{margin: '0 0 0.3rem 0'}}><b>TTRPGS</b>: Blades in the Dark and other FitD games, Mothership, CY_BORG, Sprawl, Eclipse Phase, Shadowrun, CBR_PNK, Stars Without Numbers, PbtA.</p>
            <p style={{margin: '0 0 0.3rem 0'}}><b>Media</b>: Ghost in the Shell, Akira, Cowboy Bebop, Do Androids Dream of Electric Sheep?, System Shock,
            The Sprawl Trilogy, Blade Runner, Deus Ex, Psycho Pass, Alternate Carbon, Cyberpunk 2077, Ghostrunner, Ergo
            Proxy, Katana Zero.</p>
            <p style={{margin: '0 0 0.3rem 0'}}><b>Music</b>: Pertubator (New Model, Dangerous Days), Extra Terra, Pixel Grip (Arena), Dan Terminus (The Wrath
            of Code), Dreddd (Pain Deluxe), Terrordyne (High Tech, Low Living), Carpenter Brut (TRILOGY).</p>
        </p>
    )
};

export const Tile7: React.FC<Props> = ({style, className}) => {
    return (
        <p className={`body-JBmono extrabold ${className}`} style={{margin: '0', fontSize: '1.1rem', ...style}}>
            <i>Discover our Inspirations!</i>
        </p>
    )
};


export const BlackBack: React.FC<Props> = ({style, className}) => {
    return (
        <div className={`black-background ${className}`} style={{width: '100%', height: '100%', ...style}}/>
    )
}

export const YellowBack: React.FC<Props> = ({style, className}) => {
    return (
        <div className={`yellow-background ${className}`} style={{width: '100%', height: '100%'}}/>
    )
}
