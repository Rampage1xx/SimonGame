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

    constructor(props: IProps) {
        super(props);
        this.updateStatus(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    private updateStatus(props: IProps) {
        const {css, colorNumber, playerTurn, ON} = props;
        this.css = css;
        this.colorNumber = colorNumber;
        this.playerTurn = playerTurn;
        this.ON = ON;
    }



    private onClickHandler(): void {
        if (this.playerTurn && this.ON) colorDispatch(this.colorNumber);

    }

    public    render() {
        this.updateStatus(this.props);
        return (
            <div className={this.css} onClick={this.onClickHandler}/>
        );
    }

}
