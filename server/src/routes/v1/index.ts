import express from 'express';
import tweetControllers from '../../controllers/tweet-controllers';
import userControllers from '../../controllers/user-controllers';
const router = express.Router();

router.post('/tweet', tweetControllers.create);

router.post('/user', userControllers.create);

export default router;
