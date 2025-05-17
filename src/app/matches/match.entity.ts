import { Championship } from "../championship/championship.entity";
import { Team } from "../teams/team.entity";

export class Match {
    constructor(
        private id: number,
        private date: Date,
        private homeTeam: Team,
        private awayTeam: Team,
        private championship: Championship
    ) { }

    getDate(): Date {
        return this.date
    }

    getHomeTeam(): Team {
        return this.homeTeam
    }

    getAwayTeam(): Team {
        return this.awayTeam
    }

    getChampionship(): Championship {
        return this.championship
    }

}