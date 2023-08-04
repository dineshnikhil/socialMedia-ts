import express from 'express';
import tweetControllers from '../../controllers/tweet-controllers';
const router = express.Router();

router.post('/tweet', tweetControllers.create);

export default router;
