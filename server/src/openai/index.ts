import { Router, Request, Response } from 'express'
import { text, image } from './openai'

const router: Router = Router()

interface PromptByQueryRequest extends Request {
    query: {
        prompt: string
    }
}

router.post('/image', async (req: PromptByQueryRequest, res: Response) => {
    try {
        const { prompt } = req.body
        const response = await image(prompt)
        res.status(200).json({ response })

    } catch (e) {
        res.status(400).json(e)
    }
})


router.post('/text', async (req: PromptByQueryRequest, res: Response) => {
    try {
        const { prompt } = req.body
        const response = await text(prompt)
        res.status(200).json({ response })

    } catch (e) {
        res.status(400).json(e)
    }
})

export default router