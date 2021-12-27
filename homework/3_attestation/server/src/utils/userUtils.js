import moment from "moment";

class UserUtils {
  formatDate(dateISO) {
    return moment(dateISO).format('DD MMM YYYY')
  }
}

export default new UserUtils();
