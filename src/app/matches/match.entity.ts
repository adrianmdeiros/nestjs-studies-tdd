import { Championship } from "../championships/championship.entity";
import { Result } from "../results/result.entity";
import { Stadium } from "../stadiums/stadium.entity";
import { Team } from "../teams/team.entity";

export class Match {
    constructor(
        public readonly id: number,
        public readonly date: Date,
        public readonly homeTeam: Team,
        public readonly awayTeam: Team,
        public readonly stadium: Stadium,
        public readonly championship: Championship,
        public readonly result: Result = Result.init()
    ) { }

    withChampionship(championship: Championship): Match {
        return new Match(
            this.id,
            this.date,
            this.homeTeam,
            this.awayTeam,
            this.stadium,
            championship,
        )
    }

    withResult(result: Result): Match {
        return new Match(
            this.id,
            this.date,
            this.homeTeam,
            this.awayTeam,
            this.stadium,
            this.championship,
            result
        )
    }
}