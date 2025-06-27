import express from 'express';
import { getAllReviews, createReview  } from '../Controllers/reviewController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

const router1 = express.Router({mergeParams:true});


// doctor/doctorId/:id

router1.route('/').get(getAllReviews).post(authenticate,restrict(['patient']),createReview);

export default router1;
 

