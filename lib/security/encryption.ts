import crypto from "node:crypto"

const ALGORITHM = "aes-256-gcm"
const IV_LENGTH = 12
const AUTH_TAG_LENGTH = 16

function getEncryptionKey() {
  const key = process.env.AI_CREDENTIAL_ENCRYPTION_KEY

  if (!key) {
    throw new Error("AI_CREDENTIAL_ENCRYPTION_KEY is not configured.")
  }

  const buffer = Buffer.from(key, "base64")

  if (buffer.length !== 32) {
    throw new Error(
      "AI_CREDENTIAL_ENCRYPTION_KEY must be a base64-encoded 32-byte key."
    )
  }

  return buffer
}

export function encryptSecret(value: string) {
  const key = getEncryptionKey()
  const iv = crypto.randomBytes(IV_LENGTH)

  const cipher = crypto.createCipheriv(ALGORITHM, key, iv)

  const encrypted = Buffer.concat([
    cipher.update(value, "utf8"),
    cipher.final(),
  ])

  const authTag = cipher.getAuthTag()

  return [
    iv.toString("base64"),
    authTag.toString("base64"),
    encrypted.toString("base64"),
  ].join(".")
}

export function decryptSecret(value: string) {
  const [ivBase64, authTagBase64, encryptedBase64] = value.split(".")

  if (!ivBase64 || !authTagBase64 || !encryptedBase64) {
    throw new Error("Invalid encrypted secret.")
  }

  const key = getEncryptionKey()

  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    key,
    Buffer.from(ivBase64, "base64")
  )

  decipher.setAuthTag(Buffer.from(authTagBase64, "base64"))

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedBase64, "base64")),
    decipher.final(),
  ])

  return decrypted.toString("utf8")
}
