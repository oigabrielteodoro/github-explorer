export type RepositoryOwnerDTO = {
  name: string
  node_id: string
  html_url: string
  avatar_url: string
}

export type RepositoryDTO = {
  name: string
  node_id: string
  full_name: string
  description: string
  owner: RepositoryOwnerDTO
}
