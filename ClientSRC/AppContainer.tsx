import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {InnerCircle} from './Components/InnerCircle';
import {SimonColor} from './Components/SimonColor';
import {limitSelector} from './Selectors/computerSelector';
import {generalGameStatesSelector} from './Selectors/GameStatusesSelector';
import {playerTurnSelector} from './Selectors/playerSelector';
import './style.css';

interface IProps {

    playerTurn: boolean; pcTurn: boolean; timeout: boolean; limit;
    generalGameStatus: { strict: boolean, timeout: boolean, ON: boolean, color: number, started: boolean };
}


export class AppContainer extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);

    }

    private   capitalize(colorString: string) {
        return colorString.charAt(0).toUpperCase() + colorString.slice(1);
    }

    private generateColorCSS() {
        // generate the css and adds the is-active tag if it is choosen
        const colorNumber = this.props.generalGameStatus.color - 1;
        const colorArray = ['red', 'blue', 'yellow', 'green'];

        return colorArray.map((colorString, index) => {
            return index === colorNumber ?
                `${colorString} is-active${this.capitalize(colorString)}`
                :
                `${colorString}`;
        });
    }

    public render() {
        const props: IProps = this.props;
        const {playerTurn, generalGameStatus, limit} = props;
        const {ON} = generalGameStatus;

        const colorsCSS: string[] = this.generateColorCSS();
        return (
            <div>
                <div className='containerCircle'>
                    <div id='AppComponent' className='mainCircle'>
                        <SimonColor css={ colorsCSS[0] } playerTurn={ playerTurn } ON={ ON } colorNumber={ 1 }/>
                        <SimonColor css={ colorsCSS[1] } playerTurn={ playerTurn } ON={ ON } colorNumber={ 2 }/>
                        <InnerCircle generalGameStatus={ generalGameStatus } limit={ limit }/>
                        <SimonColor css={ colorsCSS[2] } playerTurn={ playerTurn } ON={ ON } colorNumber={ 3 }/>
                        <SimonColor css={ colorsCSS[3] } playerTurn={ playerTurn } ON={ ON } colorNumber={ 4 }/>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = createStructuredSelector({
    generalGameStatus: generalGameStatesSelector(),
    playerTurn: playerTurnSelector(),
    limit: limitSelector()

});

export const ConnectedAppContainer: any = connect(mapStateToProps, undefined)(AppContainer);
