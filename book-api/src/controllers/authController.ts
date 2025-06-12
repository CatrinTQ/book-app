import { Request, Response } from 'express'
import userSchema from '../models/User'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


/* -------------------------------------------------------------------------- */
/*                                   Log In                                   */
/* -------------------------------------------------------------------------- */

export const loginUser = async (req: Request, res: Response): Promise<any> => {
  try {

    const {username, password} = req.body
    if (username === undefined || password === undefined) {
      return res.status(400).json({message: "username and password are required"})
    }
    
    const user = await userSchema.findOne({username})
    if (!user) {
      return res.status(401).json({message: 'Invalid username'})
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
      return res.status(401).json({message: 'Invalid password'})
    }

    const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET || '', {
      expiresIn: '7d'
    })

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24 * 7
    })

     return res.status(200).json({message: 'You are logged in', token: accessToken, isAdmin: user.isAdmin})

  } catch (error) {
    res.status(500).json({error: 'An error occurred during login'})
  }
}


/* -------------------------------------------------------------------------- */
/*                                   Log Out                                  */
/* -------------------------------------------------------------------------- */

export const logoutUser = (req: Request, res: Response) => {
  res.clearCookie('accessToken')
  res.json({message: 'Token cleared. You are logged out'})
}