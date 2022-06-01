const { Brainly } = require("brainly-scraper-v2");
const brain = new Brainly("id"); // 'id' - Default to 'id

export default async function handler(req, res) {
    try {
        const count = 10
        const region = req.query.r ? req.query.r : 'id'
        const ans = await brain.search(req.query.q, region, count)
        if(ans.length < 1){
            res.status(200).json({
                count: 0,
                data: null
            })
        }
        res.status(200).json({ 
            count:count, data:ans 
        })        
    } catch (error) {
        res.status(500).json({
            error:error.message,
            stack:error.stack
        })
    }

}
  