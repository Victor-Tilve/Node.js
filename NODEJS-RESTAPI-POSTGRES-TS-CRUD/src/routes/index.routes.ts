import { Router } from "express";
const router =  Router();

import {getUsers,getUserById, creatUser, deleteUser, updateUser} from '../controllers/index.controllers'

router.get('/users', getUsers)
router.get('/user/:id', getUserById)
router.post('/user', creatUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

export default router;