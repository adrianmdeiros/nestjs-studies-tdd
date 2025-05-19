import { Injectable } from '@nestjs/common';
import { Team } from '../teams/team.entity';
import { Championship } from './championship.entity';
import { Match } from '../matches/match.entity';
import { MatchFilters } from './interfaces/match-filters.interface';


@Injectable()
export class ChampionshipService {
    addTeamToChampionship(team: Team, championship: Championship): void {
        return championship.addTeam(team)
    }

    getFilteredMatches(filters: MatchFilters, championship: Championship): Match[] | [] {
        return championship.getMatchesBy(filters)
    }

    addMatchToChampionship(match: Match, championship: Championship): void {
        match.withChampionship(championship)
        return championship.addMatch(match)
    }
}
