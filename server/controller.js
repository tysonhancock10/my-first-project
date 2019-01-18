let allPlayers = [
    {
        name: 'Lionel Messi',
        team: 'Unknown',
        body: ' Because of his great success, Messi rates higher than most players',
        index: 0
    },
    {
        name: 'Ronaldinho',
        team: 'Unknown',
        body: 'Because of his legendary plays and his status among players Ronaldinho is among the very highest of ratings.',
        index: 1
    },
    {
        name: 'Christiano Ronaldo',
        team: 'Unknown',
        body: 'He is obviously one of my favorite players. Not sure what else to say.',
        index: 2
    },
]



module.exports = {
    getPlayer: (req, res) => {
        console.log(allPlayers) 
        res.status(200).send(allPlayers)

    },
    addPlayer: (req, res) => {
        const index = allPlayers [allPlayers.length-1].id+1

        const newPlayer = {
            name: req.name,
            body: req.body.text,
            team: req.team,
            index: index
        };

        allPlayers.push(newPlayer)
        res.status(200).send(allPlayers)
    }
}