import Toggle from 'material-ui/Toggle';
import * as React from 'react';
import {randomColorGenerator, strictMode, turnOffState, turnOnState} from '../ColorGeneration/ColorGeneration';

interface IProps {

    playerTurn: boolean; pcTurn: boolean; timeout: boolean; limit;
    generalGameStatus: { strict: boolean, timeout: boolean, ON: boolean, color: number, started: boolean };
}

export class InnerCircle extends React.PureComponent<IProps, any> {
    private counterNumberCSS: string;
    private counter: string;
    private strictTextCSS: string;
    private startTextCSS: string;
    private ON: boolean;
    private started: boolean;
    private strict: boolean;

    constructor(props) {
        super(props);

        this.strictModeToggle = this.strictModeToggle.bind(this);
        this.startGameToggle = this.startGameToggle.bind(this);
        this.onOff = this.onOff.bind(this);
    }

    private assignValues(props: IProps) {
        const {generalGameStatus, limit} = props;
        const {ON, started, strict} = generalGameStatus;
        this.ON = ON;
        this.started = started;
        this.strict = strict;
        this.counter = ON && started ? limit : '--';
        this.counterNumberCSS = `floatLeft ${ON ? 'limitActive' : ''}`;
        this.strictTextCSS = `Strict ${strict ? 'is-activeText' : ''}`;
        this.startTextCSS = `Start ${started ? 'is-activeText' : ''}`;

    }

    private strictModeToggle() {
        if (this.ON && !this.started) {
            this.strict ? strictMode(false) : strictMode(true);
        }
    }

    private startGameToggle() {
        if (this.ON && !this.started) {randomColorGenerator()}
    }

    private onOff() {
        this.ON ? turnOffState() : turnOnState();
    }

    public  render() {
        this.assignValues(this.props);

        return (

            <div className='center'>
                <h3 className='Title'>Simon Game</h3>
                <p className={ this.counterNumberCSS }>{ this.counter }</p>
                <div role='button' className='redButton' onClick={ this.startGameToggle }/>
                <div role='button' className='yellowButton' onClick={ this.strictModeToggle }/>
                <p className='countText'> CnT </p>
                <p className={ this.strictTextCSS }> ScT </p>
                <p className={ this.startTextCSS }> SrT </p>
                <div className='ToggleWrapper'>
                    <Toggle onClick={ this.onOff }/>
                </div>
            </div>
        );
    }
}
