import { signOut } from "next-auth/react"

export default function Header({ name }: { name: string }) {
  // Navigation Panel with sign out button and User name
  return (
    <header>
      <div>{name}</div>
      <div>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    </header>
  )
}
