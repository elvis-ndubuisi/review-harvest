import * as argon from 'argon2'

export async function hashPasswordService(password: string): Promise<string> {
  return await argon.hash(password)
}

export async function comparePasswordService(
  hash: string,
  password: string,
): Promise<boolean> {
  return await argon.verify(hash, password)
}
