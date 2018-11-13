import Api from '@/services/Api'

export default {
  fetchReviews () {
    return Api().get('reviews')
  },

  addReview (params) {
    return Api().post('reviews', params)
  },

  updateReview (params) {
    return Api().put('reviews/' + params.id, params)
  },

  getReview (params) {
    return Api().get('review/' + params.id)
  },

  deleteReview (id) {
    return Api().delete('reviews/' + id)
  }
}
