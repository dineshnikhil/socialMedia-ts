import express from 'express';
import tweetControllers from '../../controllers/tweet-controllers';
import userControllers from '../../controllers/user-controllers';
import authenticate from '../../middlewares/authenticate';
const router = express.Router();

router.post('/tweet', authenticate, tweetControllers.create);

router.post('/signup', userControllers.create);
router.get('/signin', userControllers.signIn);

export default router;
