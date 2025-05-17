
export class Player {
    constructor(
        private name: string,
        private birth: Date,
        private gender: string,
        private height: number,
        private id?: number,
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

    getName(): string {
        return this.name
    }

    getHeight(): number {
        return this.height
    }
}