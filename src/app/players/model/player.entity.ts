
export class Player {
    constructor(
        public readonly name: string,
        public readonly birth: Date,
        public readonly gender: string,
        public readonly height: number,
        public readonly id?: string
    ) { }

    getAge(): number {
        const today = new Date()
        const playerBirth = new Date(this.birth)
        let playerAge = today.getFullYear() - playerBirth.getFullYear()
        const birthMonth = today.getMonth() - playerBirth.getMonth()
        if (birthMonth < 0 || (birthMonth === 0 && today.getDate() < playerBirth.getDate())) {
            playerAge--
        }
        return playerAge
    }


}