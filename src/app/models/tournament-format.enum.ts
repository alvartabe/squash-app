export enum TournamentFormat {
    BestOf5To11 = 'BestOf5To11', // 3 of 5 games to 11, win by 2
    BestOf3To11 = 'BestOf3To11', // 2 of 3 games to 11, win by 2
    OneTo15SuddenDeath = 'OneTo15SuddenDeath', // single game to 15, no 2-point diff
    TwoOf3To7SuddenDeath = 'TwoOf3To7SuddenDeath', // 2 of 3 games to 7, sudden-death
    OneTo11WinBy2 = 'OneTo11WinBy2', // single game to 11, win by 2
}