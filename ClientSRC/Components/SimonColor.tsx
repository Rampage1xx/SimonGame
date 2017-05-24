import * as React from 'react';
import {colorDispatch} from '../ColorGeneration/ColorGeneration';

interface IProps {
    css: string,
    colorNumber: number,
    playerTurn: boolean,
    ON: boolean,
}

export class SimonColor extends React.PureComponent<IProps, any> {
    private css: string;
    private colorNumber: number;
    private playerTurn: boolean;
    private ON: boolean;

    constructor(props) {
        super(props);
        this.updateStatus(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    private updateStatus(props) {
        const {css, colorNumber, playerTurn, ON} = props;
        this.css = css;
        this.colorNumber = colorNumber;
        this.playerTurn = playerTurn;
        this.ON = ON;
    }

    private componentDidUpdate(prevState, prevProps) {

    }

    private onClickHandler() {
        if (this.playerTurn && this.ON) colorDispatch(this.colorNumber);

    }

    public    render() {
        this.updateStatus(this.props);
        return (
            <div className={this.css} onClick={this.onClickHandler}/>
        );
    }

}
