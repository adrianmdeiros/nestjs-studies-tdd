export class Result {
    private constructor(
        public readonly homeGoalsNumber: number,
        public readonly awayGoalsNumber: number
    ){}

    static init(): Result {
        return new Result(0, 0)
    }

    static create(homeGoalsNumber: number, awayGoalsNumber: number): Result {
        if(homeGoalsNumber < 0 || awayGoalsNumber < 0){
            throw new Error('Invalid result. Goals must be positive values.')
        }
        return new Result(homeGoalsNumber, awayGoalsNumber)
    }

}