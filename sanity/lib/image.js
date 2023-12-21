import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source) => {
  return imageBuilder?.image(source).width(550).auto('format').fit('max').url()
}
export const urlForProjectImage = (source) => {
  return imageBuilder?.image(source).width(350).auto('format').fit('max').url()
}
