interface IAppComponentProps {

    playerTurn: boolean; pcTurn: boolean; timeout: boolean; limit;
    generalGameStatus: { strict: boolean, timeout: boolean, ON: boolean, color: number, started: boolean };
}

interface IClickHandlersBooleans {
    (event: any, status: any): any ;
}

