import { Injectable } from '@nestjs/common';
import { Match } from '../matches/match.entity';
import { Result } from './result.entity';

@Injectable()
export class ResultsService {
    updateResult(homeGoalsNumber: number, awayGoalsNumber: number, match: Match): Match {
        const result = Result.create(homeGoalsNumber, awayGoalsNumber)
        return match.withResult(result)
    }
}
