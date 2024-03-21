import { Router } from 'express'
import * as db from '../db/leaderFunctions'

const router = Router()

router.get('/leaderboard', async (req, res) => {
  try {
    const leaders = await db.getTopFive()
    res.json(leaders)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// router.get('/leaderboard', async (req, res) => {
//   try {
//     const allScores = await db.getAllScores()

//     res.json(allScores)
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })

router.post('/submit', async (req, res) => {
  try {
    const { name, score, lives } = req.body
    await db.insertScore(name, score, lives)
    res.send('Success! Score added')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
