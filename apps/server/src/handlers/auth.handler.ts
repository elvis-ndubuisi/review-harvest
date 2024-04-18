import type {Request, Response, NextFunction} from 'express'

async function signInWithCredentials(req: Request, res: Response) {
  try {
  } catch (error) {
    return res.sendStatus(500)
  }
}
async function signUpWithCredentials(req: Request, res: Response) {
  try {
  } catch (error) {
    return res.sendStatus(500)
  }
}

function signUpWithGoogle(req: Request, res: Response) {
  try {
    res.send('okay')
  } catch (error) {
    return res.send(error)
  }
}

function signOut() {}

const authHandler = {signUpWithCredentials, signUpWithGoogle}
export default authHandler
