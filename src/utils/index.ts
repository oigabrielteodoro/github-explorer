export function getInitials(name: string) {
  if (name.includes(' ')) {
    return (
      name.split(' ')[0].charAt(0) + name.split(' ')[1].charAt(0)
    ).toUpperCase()
  }

  return name.charAt(0).toUpperCase()
}
