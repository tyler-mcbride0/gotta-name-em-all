import { Router } from 'express'
import * as db from '../db/leaderFunctions'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const leaders = await db.getTopThree()
    // const leaders = 'test test'
    // console.log(leaders)
    res.json(leaders)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/submit', async (req, res) => {
  console.log('route hit')
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
