
interface ILinks {
  title: string
  key: string
  icon?: string
}

interface IBlockLinks {
  title: string
  key: string
  links: ILinks[]
}

interface IContent {
  title: string
  key: string
  text?: string
  innerHTML?: string
}

export interface IView {
  title: string
  key: string
  content?: IContent[],
  block_links?: IBlockLinks[]
}

export interface IAccount {
  name: string
  position: string
  avatar: string
}