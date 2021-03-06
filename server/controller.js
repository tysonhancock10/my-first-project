let allPlayers = [
    {
        name: 'Lionel Messi',
        team: 'FC Barcelona',
        body: ' Because of his great success, Messi rates higher than most players',
        index: 1
    },
    {
        name: 'Ronaldinho',
        team: 'Fluminense',
        body: 'Because of his legendary plays and his status among players Ronaldinho is among the very highest of ratings.',
        index: 2
    },
    {
        name: 'Christiano Ronaldo',
        team: 'Juventus F.C.',
        body: 'He is obviously one of my favorite players. Not sure what else to say.',
        index: 3
    },
]



module.exports = {
    getPlayer: (req, res) => {
         
        res.status(200).send(allPlayers)

    },
    addPlayer: (req, res) => {
        const index = allPlayers [allPlayers.length-1].index+1

        const newPlayer = {
            name: req.body.name,
            body: req.body.body,
            team: req.body.team,
            index: index
        };

        allPlayers.push(newPlayer)
        res.status(200).send(allPlayers)
    },
    updatePlayer: (req, res) => {
        let { index } = req.params;
        let { text } = req.body;
      
        let UpdatedPlayers = allPlayers.find((element) => {
         return element.index === +index;
        })
      
        UpdatedPlayers.body = text;
      
        res.status(200).send(allPlayers);
       },
    deletePlayer:(req, res) => {
        
        console.log(req.params)
        
        let {id} = req.params.index
        
            allPlayers.splice(id,1)
            
            
         
    
       

        res.status(200).send(allPlayers)
    }
}
