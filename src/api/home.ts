import apiClient from './apiClient'

export type HomeData = {
  banner: { title: string; subtitle: string }
  useCases: Array<{ title: string; description: string }>
}

export const fetchHomeData = async () => {
  const { data } = await apiClient.get<HomeData>('/home')
  return data
}
