import { PrismaClient } from '@prisma/client'
import "dotenv/config.js"

const prisma = new PrismaClient()

const getPosts = async (req) =>{
    const posts = await prisma.post.findMany()
    return posts;
}

const getPost = async (req) =>{
    const {postId} = req.params;
    const post = await prisma.post.findFirst({
        where:{
            id: postId
        }
    })
    return post;
}

const createPost = async (req) =>{
    const {id, content} = req.body;
    const post = await prisma.post.create({
        data:{
            id,
            content
        }
    })
    return post;
}