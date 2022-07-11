import Router from 'express'
import Post from './Post.js'
import PostController from './PostController.js'

const router = new Router()

router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.put('/posts',PostController.update)
router.delete('/posts/:id', PostController.delete)

// app.get("/numbers", (req, res) => {
//     res.json({ message: "123123123" });
// });


export default router;
